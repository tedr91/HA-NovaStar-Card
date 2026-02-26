import { LitElement, css, html, nothing } from "lit";

type HassEntity = {
  state: string;
  attributes: Record<string, unknown>;
};

type HomeAssistant = {
  states: Record<string, HassEntity>;
  callService?: (domain: string, service: string, serviceData?: Record<string, unknown>) => Promise<void>;
  callWS?: (message: Record<string, unknown>) => Promise<unknown>;
};

type NovastarCardConfig = {
  type: string;
  title?: string;
  debug_layout?: boolean;
  device_id?: string;
  power_entity?: string;
  preset_entity?: string;
  screens_entity?: string;
  layers_entity?: string;
  controller_entity?: string;
  status_entity?: string;
  brightness_entity?: string;
  temperature_entity?: string;
};

type ResolvedEntityMap = {
  power_entity?: string;
  preset_entity?: string;
  screens_entity?: string;
  layers_entity?: string;
  controller_entity?: string;
  status_entity?: string;
  brightness_entity?: string;
  temperature_entity?: string;
};

type LayoutLayer = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  z: number;
  source?: string;
  audioOpen?: boolean;
};

type LayoutPayload = {
  screenWidth: number;
  screenHeight: number;
  layers: LayoutLayer[];
};

declare global {
  interface Window {
    customCards?: Array<Record<string, unknown>>;
  }
}

export class NovastarHSeriesCard extends LitElement {
  private _hass?: HomeAssistant;

  private config?: NovastarCardConfig;
  private optimisticPowerState?: "on" | "off";
  private resolvedEntities: ResolvedEntityMap = {};
  private resolvedLayerSourceEntities: string[] = [];
  private resolvedDeviceId?: string;
  private resolvingDeviceId?: string;
  private resolvedForHass?: HomeAssistant;
  private lastRelevantStateSignature = "";

  static properties = {
    hass: { attribute: false, noAccessor: true },
    config: { attribute: false }
  };

  public get hass(): HomeAssistant | undefined {
    return this._hass;
  }

  public set hass(value: HomeAssistant | undefined) {
    const oldValue = this._hass;
    this._hass = value;

    const nextSignature = this.buildRelevantStateSignature(value);
    const hasRelevantChanges = nextSignature !== this.lastRelevantStateSignature;
    this.lastRelevantStateSignature = nextSignature;

    if (oldValue !== value || hasRelevantChanges) {
      this.requestUpdate("hass", oldValue);
    }
  }

  public setConfig(config: NovastarCardConfig): void {
    const nextConfig: NovastarCardConfig = { ...config };
    nextConfig.type ||= "custom:novastar-h-series-card";
    this.config = nextConfig;
  }

  public getCardSize(): number {
    return 3;
  }

  public static async getConfigElement(): Promise<HTMLElement> {
    return document.createElement("novastar-h-series-card-editor");
  }

  public static getStubConfig(): NovastarCardConfig {
    return {
      type: "custom:novastar-h-series-card",
      title: "Novastar H Series"
    };
  }

  protected updated(): void {
    void this.ensureResolvedEntities();
    this.syncOptimisticPowerState();
  }

  protected render() {
    if (!this.config) {
      return html`<ha-card><div class="content">Invalid card configuration.</div></ha-card>`;
    }

    if (!this.hass) {
      return html`<ha-card><div class="content">Home Assistant context is unavailable.</div></ha-card>`;
    }

    const controllerEntityId = this.getEntityId("controller_entity");
    if (!controllerEntityId) {
      const loadingMessage = this.config.device_id && this.resolvingDeviceId === this.config.device_id
        ? "Resolving entities for selected device..."
        : "Set a device_id or controller_entity in card configuration.";
      return html`<ha-card><div class="content">${loadingMessage}</div></ha-card>`;
    }

    const controller = this.hass.states[controllerEntityId];
    if (!controller) {
      return html`<ha-card><div class="content">Entity not found: ${controllerEntityId}</div></ha-card>`;
    }

    const powerEntityId = this.getEntityId("power_entity") ?? "switch.novastar_h2_power_screen_output";
    const presetEntityId = this.getEntityId("preset_entity");
    const screensEntityId = this.getEntityId("screens_entity");
    const layersEntityId = this.getEntityId("layers_entity");
    const statusEntityId = this.getEntityId("status_entity");
    const brightnessEntityId = this.getEntityId("brightness_entity");
    const temperatureEntityId = this.getEntityId("temperature_entity");

    const powerEntity = this.hass.states[powerEntityId];
    const powerState = this.optimisticPowerState ?? powerEntity?.state;
    const powerIsOn = powerState === "on";
    const powerFadeToBlack = Boolean(powerEntity) && !powerIsOn;

    const statusEntity = statusEntityId
      ? this.hass.states[statusEntityId]
      : undefined;
    const presetEntity = presetEntityId
      ? this.hass.states[presetEntityId]
      : undefined;
    const screensEntity = screensEntityId
      ? this.hass.states[screensEntityId]
      : undefined;
    const layersEntity = layersEntityId
      ? this.hass.states[layersEntityId]
      : undefined;
    const brightnessEntity = brightnessEntityId
      ? this.hass.states[brightnessEntityId]
      : undefined;
    const temperatureEntity = temperatureEntityId
      ? this.hass.states[temperatureEntityId]
      : undefined;
    const brightnessValue = brightnessEntity ? Number.parseFloat(brightnessEntity.state) : Number.NaN;
    const brightnessMin = brightnessEntity ? this.readNumberAttribute(brightnessEntity, "min", 0) : 0;
    const brightnessMax = brightnessEntity ? this.readNumberAttribute(brightnessEntity, "max", 100) : 100;
    const brightnessStep = brightnessEntity ? this.readNumberAttribute(brightnessEntity, "step", 1) : 1;
    const showBrightnessSlider = brightnessEntity && Number.isFinite(brightnessValue);
    const presetOptions = this.readStringListAttribute(presetEntity, "options");
    const layerSourceRows = this.getLayerSourceRows();
    const layoutPayload = this.readLayoutPayload(screensEntity, layersEntity);
    const controllerValue = statusEntity
      ? `${controller.state} (${statusEntity.state})`
      : controller.state;

    return html`
      <ha-card>
        <div class="header-row">
          <div class="header">${this.config.title ?? "Novastar H Series"}</div>
          <div class="header-controls">
            ${brightnessEntity && showBrightnessSlider
              ? html`
                  <div class="header-brightness" title="Brightness">
                    <input
                      class="brightness-slider header-brightness-slider"
                      type="range"
                      min=${brightnessMin}
                      max=${brightnessMax}
                      step=${brightnessStep}
                      .value=${String(brightnessValue)}
                      .disabled=${powerFadeToBlack}
                      ?disabled=${powerFadeToBlack}
                      @change=${this.handleBrightnessChanged}
                    />
                  </div>
                `
              : nothing}
            ${powerEntity
              ? html`
                  <label class="power-toggle" title="Toggle screen output">
                    <input
                      type="checkbox"
                      .checked=${powerIsOn}
                      @change=${this.handlePowerToggle}
                    />
                    <span class="power-slider"></span>
                  </label>
                `
              : nothing}
          </div>
        </div>
        <div class="content">
          <div class="row">
            <span class="label">Status</span>
            <span class="value">${controllerValue}</span>
          </div>
          ${temperatureEntity
            ? html`<div class="row"><span class="label">Temperature</span><span class="value">${temperatureEntity.state}</span></div>`
            : nothing}
          ${presetEntity
            ? presetOptions.length > 0
              ? (() => {
                  const selectedPresetOption = this.resolveSelectedOption(presetEntity, presetOptions);
                  return html`
                    <div class="row input-row">
                      <span class="label">Preset</span>
                      <select
                        class="input-select"
                        .disabled=${powerFadeToBlack}
                        ?disabled=${powerFadeToBlack}
                        @change=${this.handlePresetSelectionChanged}
                      >
                        ${presetOptions.map((option) => html`
                          <option
                            .value=${option}
                            ?selected=${this.optionEquals(option, selectedPresetOption)}
                          >${option}</option>
                        `) }
                      </select>
                    </div>
                  `;
                })()
              : html`<div class="row"><span class="label">Preset</span><span class="value">${presetEntity.state}</span></div>`
            : nothing}
          ${layerSourceRows.map((row) => {
            const selectedOption = this.resolveSelectedOption(row.entity, row.options);
            return html`
              <div class="row input-row">
                <span class="label">Layer ${row.layerNumber} Source</span>
                <select
                  class="input-select"
                  data-entity-id=${row.entityId}
                  .disabled=${powerFadeToBlack}
                  ?disabled=${powerFadeToBlack}
                  @change=${this.handleLayerSourceChanged}
                >
                  ${row.options.map((option) => html`
                    <option
                      .value=${option}
                      ?selected=${this.optionEquals(option, selectedOption)}
                    >${option}</option>
                  `)}
                </select>
              </div>
            `;
          })}
          ${layoutPayload
            ? this.renderLayoutPreview(layoutPayload)
            : nothing}
          ${brightnessEntity
            ? showBrightnessSlider
              ? nothing
              : html`<div class="row"><span class="label">Brightness</span><span class="value">${brightnessEntity.state}</span></div>`
            : nothing}
        </div>
      </ha-card>
    `;
  }

  static styles = css`
    .header-row {
      align-items: center;
      display: flex;
      justify-content: space-between;
      gap: 12px;
      padding: 16px 16px 0;
    }

    .header {
      font-size: 1rem;
      font-weight: 600;
    }

    .content {
      padding: 16px;
    }

    .row {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .row:last-child {
      margin-bottom: 0;
    }

    .label {
      color: var(--secondary-text-color);
      font-size: 0.95rem;
    }

    .value {
      font-weight: 500;
      text-transform: capitalize;
    }

    .brightness-row {
      margin-bottom: 8px;
    }

    .header-controls {
      align-items: center;
      display: inline-flex;
      gap: 10px;
      min-height: 24px;
    }

    .header-brightness {
      align-items: center;
      display: inline-flex;
      min-width: 120px;
    }

    .header-brightness-slider {
      width: 120px;
    }

    .brightness-header {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 6px;
    }

    .brightness-slider {
      box-sizing: border-box;
      width: 100%;
    }

    .brightness-slider:disabled {
      opacity: 0.45;
      pointer-events: none;
    }

    .power-toggle {
      display: inline-flex;
      height: 22px;
      position: relative;
      width: 40px;
    }

    .power-toggle input {
      height: 0;
      opacity: 0;
      width: 0;
    }

    .power-slider {
      background-color: var(--disabled-color);
      border-radius: 999px;
      cursor: pointer;
      inset: 0;
      position: absolute;
      transition: 0.2s;
    }

    .power-slider::before {
      background-color: var(--card-background-color);
      border-radius: 50%;
      content: "";
      height: 16px;
      left: 3px;
      position: absolute;
      top: 3px;
      transition: 0.2s;
      width: 16px;
    }

    .power-toggle input:checked + .power-slider {
      background-color: var(--success-color, var(--primary-color));
    }

    .power-toggle input:checked + .power-slider::before {
      transform: translateX(18px);
    }

    .input-row {
      align-items: center;
    }

    .input-select {
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      color: var(--primary-text-color);
      font: inherit;
      max-width: 60%;
      min-width: 140px;
      padding: 4px 8px;
    }

    .input-select:disabled {
      opacity: 0.45;
      pointer-events: none;
    }

    .layout-preview {
      margin-top: 12px;
      border-top: 1px solid var(--divider-color);
      padding-top: 12px;
    }

    .layout-title {
      color: var(--secondary-text-color);
      font-size: 0.9rem;
      margin-bottom: 8px;
    }

    .layout-canvas {
      width: 100%;
      display: block;
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 6px;
    }

    .layout-screen {
      fill: #000000;
      stroke: #4a4a4a;
      stroke-width: 1;
    }

    .layout-layer {
      fill: #d9d9d9;
      fill-opacity: 1;
      stroke: #808080;
      stroke-width: 1;
    }

    .layout-label {
      fill: var(--primary-text-color);
      font-size: 9px;
      font-family: inherit;
      pointer-events: none;
    }

    .layout-empty {
      fill: #bdbdbd;
      font-size: 14px;
      font-family: inherit;
      text-anchor: middle;
      dominant-baseline: middle;
    }
  `;

  private renderLayoutPreview(payload: LayoutPayload) {
    const viewBoxWidth = payload.screenWidth;
    const viewBoxHeight = payload.screenHeight;
    const sortedLayers = [...payload.layers].sort((a, b) => a.z - b.z);

    return html`
      <div class="layout-preview">
        <div class="layout-title">Screen Layout</div>
        <svg
          class="layout-canvas"
          viewBox=${`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          role="img"
          aria-label="Current screen layout preview"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect class="layout-screen" x="0" y="0" width=${viewBoxWidth} height=${viewBoxHeight}></rect>
          ${sortedLayers.length === 0
            ? html`<text class="layout-empty" x=${viewBoxWidth / 2} y=${viewBoxHeight / 2}>No layers detected</text>`
            : nothing}
          ${sortedLayers.map((layer) => {
            const label = layer.source?.trim() || layer.id;
            const labelX = layer.x + 2;
            const labelY = layer.y + 10;

            return html`
              <g>
                <rect
                  class="layout-layer"
                  x=${layer.x}
                  y=${layer.y}
                  width=${layer.width}
                  height=${layer.height}
                ></rect>
                <text class="layout-label" x=${labelX} y=${labelY}>${label}</text>
              </g>
            `;
          })}
        </svg>
      </div>
    `;
  }

  private readNumberAttribute(entity: HassEntity, key: string, fallbackValue: number): number {
    const rawValue = entity.attributes[key];
    if (typeof rawValue === "number" && Number.isFinite(rawValue)) {
      return rawValue;
    }

    if (typeof rawValue === "string") {
      const parsedValue = Number.parseFloat(rawValue);
      if (Number.isFinite(parsedValue)) {
        return parsedValue;
      }
    }

    return fallbackValue;
  }

  private readStringListAttribute(entity: HassEntity | undefined, key: string): string[] {
    if (!entity) {
      return [];
    }

    const value = entity.attributes[key];
    if (!Array.isArray(value)) {
      return [];
    }

    return value.filter((item): item is string => typeof item === "string");
  }

  private resolveSelectedOption(entity: HassEntity, options: string[]): string {
    const stateValue = entity.state?.trim();
    const candidates = [
      stateValue,
      this.readStringAttribute(entity, "current_option"),
      this.readStringAttribute(entity, "selected_option"),
      this.readStringAttribute(entity, "source"),
      this.readStringAttribute(entity, "current_source")
    ].filter((candidate): candidate is string => Boolean(candidate));

    for (const candidate of candidates) {
      const exactMatch = options.find((option) => option === candidate);
      if (exactMatch) {
        return exactMatch;
      }

      const normalizedCandidate = candidate.toLowerCase();
      const caseInsensitiveMatch = options.find((option) => option.toLowerCase() === normalizedCandidate);
      if (caseInsensitiveMatch) {
        return caseInsensitiveMatch;
      }
    }

    return stateValue ?? "";
  }

  private readStringAttribute(entity: HassEntity, key: string): string | undefined {
    const value = entity.attributes[key];
    if (typeof value !== "string") {
      return undefined;
    }

    const trimmed = value.trim();
    return trimmed || undefined;
  }

  private optionEquals(left: string, right: string): boolean {
    if (left === right) {
      return true;
    }

    const normalizedLeft = left.trim().toLowerCase();
    const normalizedRight = right.trim().toLowerCase();
    return normalizedLeft === normalizedRight;
  }

  private readLayoutPayload(
    screensEntity: HassEntity | undefined,
    layersEntity: HassEntity | undefined
  ): LayoutPayload | undefined {
    if (!screensEntity || !layersEntity) {
      this.logLayoutDebug("readLayoutPayload: missing screensEntity or layersEntity", {
        hasScreensEntity: Boolean(screensEntity),
        hasLayersEntity: Boolean(layersEntity)
      });
      return undefined;
    }

    const firstScreen = this.readFirstScreen(screensEntity);
    if (!firstScreen) {
      this.logLayoutDebug("readLayoutPayload: no screen found in screens entity");
      return undefined;
    }

    const screenWidth = this.readFiniteNumber(firstScreen.width ?? firstScreen.w);
    const screenHeight = this.readFiniteNumber(firstScreen.height ?? firstScreen.h);
    if (!screenWidth || !screenHeight || screenWidth <= 0 || screenHeight <= 0) {
      this.logLayoutDebug("readLayoutPayload: invalid screen dimensions", {
        screenWidth,
        screenHeight,
        firstScreen
      });
      return undefined;
    }

    const rawLayers = this.readLayersCollection(layersEntity);
    const layers: LayoutLayer[] = rawLayers
      .map((item, index) => this.normalizeLayoutLayer(item, index))
      .filter((item): item is LayoutLayer => Boolean(item));

    this.logLayoutDebug("readLayoutPayload: parsed layers summary", {
      rawLayerCount: rawLayers.length,
      renderedLayerCount: layers.length,
      screenWidth,
      screenHeight
    });

    return {
      screenWidth,
      screenHeight,
      layers
    };
  }

  private readFirstScreen(entity: HassEntity): Record<string, unknown> | undefined {
    const candidates: unknown[] = [
      entity.state,
      entity.attributes.screens,
      entity.attributes.screen_list,
      entity.attributes.screen,
      entity.attributes.value,
      entity.attributes.data,
      entity.attributes.layout_json,
      entity.attributes.layout,
      entity.attributes.screen_layout
    ];

    for (const candidate of candidates) {
      const parsed = this.parseStructuredValue(candidate);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const firstEntry = this.asRecord(parsed[0]);
        if (firstEntry) {
          return firstEntry;
        }
      }

      const record = this.asRecord(parsed);
      if (!record) {
        continue;
      }

      const nestedScreens = record.screens;
      if (Array.isArray(nestedScreens) && nestedScreens.length > 0) {
        const firstNested = this.asRecord(nestedScreens[0]);
        if (firstNested) {
          return firstNested;
        }
      }

      if (this.readFiniteNumber(record.width ?? record.w) && this.readFiniteNumber(record.height ?? record.h)) {
        return record;
      }
    }

    if (this.readFiniteNumber(entity.attributes.width ?? entity.attributes.w)
      && this.readFiniteNumber(entity.attributes.height ?? entity.attributes.h)) {
      return entity.attributes;
    }

    return undefined;
  }

  private readLayersCollection(entity: HassEntity): unknown[] {
    const candidates: unknown[] = [
      entity.state,
      entity.attributes.layers,
      entity.attributes.layer_list,
      entity.attributes.value,
      entity.attributes.data,
      entity.attributes.layout_json,
      entity.attributes.layout,
      entity.attributes.screen_layout
    ];

    for (const candidate of candidates) {
      const parsed = this.parseStructuredValue(candidate);
      if (Array.isArray(parsed)) {
        return parsed;
      }

      const record = this.asRecord(parsed);
      if (!record) {
        continue;
      }

      if (Array.isArray(record.layers)) {
        return record.layers;
      }

      if (Array.isArray(record.layer_list)) {
        return record.layer_list;
      }

      const resultRecord = this.asRecord(record.result);
      if (resultRecord && Array.isArray(resultRecord.layers)) {
        return resultRecord.layers;
      }

      const dataRecord = this.asRecord(record.data);
      if (dataRecord && Array.isArray(dataRecord.layers)) {
        return dataRecord.layers;
      }

      const objectMapLayers = Object.values(record)
        .map((item) => this.asRecord(item))
        .filter((item): item is Record<string, unknown> => Boolean(item))
        .filter((item) => Boolean(this.asRecord(item.general)) && Boolean(this.asRecord(item.window)));
      if (objectMapLayers.length > 0) {
        return objectMapLayers;
      }

      if (this.asRecord(record.general) && this.asRecord(record.window)) {
        return [record];
      }
    }

    return [];
  }

  private parseStructuredValue(value: unknown): unknown {
    if (typeof value !== "string") {
      return value;
    }

    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }

  private asRecord(value: unknown): Record<string, unknown> | undefined {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      return undefined;
    }

    return value as Record<string, unknown>;
  }

  private readFiniteNumber(value: unknown): number | undefined {
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }

    if (typeof value === "string") {
      const parsed = Number.parseFloat(value);
      if (Number.isFinite(parsed)) {
        return parsed;
      }
    }

    return undefined;
  }

  private normalizeLayoutLayer(value: unknown, index: number): LayoutLayer | undefined {
    const layer = this.asRecord(value);
    if (!layer) {
      this.logLayoutDebug("normalizeLayoutLayer: skipped - layer is not an object", { index, value });
      return undefined;
    }

    const general = this.asRecord(layer.general);
    const windowData = this.asRecord(layer.window);
    const audioStatus = this.asRecord(layer.audioStatus);

    if (!general || !windowData) {
      this.logLayoutDebug("normalizeLayoutLayer: skipped - missing general or window", {
        index,
        hasGeneral: Boolean(general),
        hasWindow: Boolean(windowData),
        layer
      });
      return undefined;
    }

    const width = this.readFiniteNumber(windowData.width);
    const height = this.readFiniteNumber(windowData.height);
    const x = this.readFiniteNumber(windowData.x) ?? 0;
    const y = this.readFiniteNumber(windowData.y) ?? 0;

    if (!width || !height || width <= 0 || height <= 0) {
      this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid dimensions", {
        index,
        width,
        height,
        windowData
      });
      return undefined;
    }

    const layerId = general.layerId;
    if (typeof layerId !== "string" && typeof layerId !== "number") {
      this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid layerId", {
        index,
        layerId,
        general
      });
      return undefined;
    }

    const zValue = this.readFiniteNumber(general.zorder);
    if (zValue === undefined) {
      this.logLayoutDebug("normalizeLayoutLayer: skipped - invalid zorder", {
        index,
        zorder: general.zorder,
        general
      });
      return undefined;
    }

    const source = typeof general.name === "string"
      ? general.name
      : undefined;
    const audioOpen = audioStatus?.isOpen === undefined
      ? undefined
      : Boolean(audioStatus.isOpen);

    this.logLayoutDebug("normalizeLayoutLayer: accepted", {
      index,
      layerId,
      x,
      y,
      width,
      height,
      zValue,
      source,
      audioOpen
    });

    return {
      id: String(layerId),
      x,
      y,
      width,
      height,
      z: zValue,
      source,
      audioOpen
    };
  }

  private isLayoutDebugEnabled(): boolean {
    return this.config?.debug_layout === true;
  }

  private logLayoutDebug(message: string, data?: unknown): void {
    if (!this.isLayoutDebugEnabled()) {
      return;
    }

    if (data === undefined) {
      console.debug("[NovastarCard][layout]", message);
      return;
    }

    console.debug("[NovastarCard][layout]", message, data);
  }

  private buildRelevantStateSignature(hass: HomeAssistant | undefined): string {
    if (!hass) {
      return "";
    }

    const ids = new Set<string>();
    const trackedKeys: Array<keyof ResolvedEntityMap> = [
      "power_entity",
      "preset_entity",
      "screens_entity",
      "layers_entity",
      "controller_entity",
      "status_entity",
      "brightness_entity",
      "temperature_entity"
    ];

    for (const key of trackedKeys) {
      const configuredId = this.config?.[key];
      if (configuredId) {
        ids.add(configuredId);
      }

      const resolvedId = this.resolvedEntities[key];
      if (resolvedId) {
        ids.add(resolvedId);
      }
    }

    ids.add("switch.novastar_h2_power_screen_output");

    const layerPattern = /^select\..*_layer_\d+_source$/;
    for (const entityId of Object.keys(hass.states)) {
      if (layerPattern.test(entityId)) {
        ids.add(entityId);
      }
    }

    const signatureParts = Array.from(ids)
      .sort()
      .map((entityId) => {
        const entity = hass.states[entityId];
        if (!entity) {
          return `${entityId}:missing`;
        }

        const options = this.readStringListAttribute(entity, "options").join("|");
        const currentOption = this.readStringAttribute(entity, "current_option") ?? "";
        const selectedOption = this.readStringAttribute(entity, "selected_option") ?? "";
        const source = this.readStringAttribute(entity, "source") ?? "";
        const currentSource = this.readStringAttribute(entity, "current_source") ?? "";
        return `${entityId}:${entity.state}:${options}:${currentOption}:${selectedOption}:${source}:${currentSource}`;
      });

    return signatureParts.join("||");
  }

  private reloadLayerSources(): void {
    this.resolvedLayerSourceEntities = [];
    this.resolvedDeviceId = undefined;
    this.resolvingDeviceId = undefined;
    this.requestUpdate();
  }

  private async waitFor(milliseconds: number): Promise<void> {
    await new Promise<void>((resolve) => {
      window.setTimeout(() => resolve(), milliseconds);
    });
  }

  private getLayerSourceRows(): Array<{ entityId: string; entity: HassEntity; layerNumber: number; options: string[] }> {
    if (!this.hass) {
      return [];
    }

    return this.getLayerSourceEntityIds()
      .map((entityId) => ({ entityId, entity: this.hass?.states[entityId] }))
      .filter((row): row is { entityId: string; entity: HassEntity } => Boolean(row.entity))
      .map((row) => {
        const options = this.readStringListAttribute(row.entity, "options");
        return {
          ...row,
          options,
          layerNumber: this.getLayerNumber(row.entityId)
        };
      })
      .filter((row) => row.options.length > 0 && row.entity.state !== "unavailable" && row.entity.state !== "unknown")
      .sort((a, b) => a.layerNumber - b.layerNumber);
  }

  private getLayerSourceEntityIds(): string[] {
    const pattern = /^select\..*_layer_\d+_source$/;
    const resolvedIds = this.resolvedLayerSourceEntities;
    const liveIds = this.hass
      ? Object.keys(this.hass.states).filter((entityId) => pattern.test(entityId))
      : [];

    if (resolvedIds.length === 0) {
      return liveIds;
    }

    if (liveIds.length === 0) {
      return resolvedIds;
    }

    return Array.from(new Set([...resolvedIds, ...liveIds]));
  }

  private getLayerNumber(entityId: string): number {
    const match = entityId.match(/_layer_(\d+)_source$/);
    if (!match) {
      return Number.MAX_SAFE_INTEGER;
    }

    const layerNumber = Number.parseInt(match[1], 10);
    return Number.isFinite(layerNumber) ? layerNumber : Number.MAX_SAFE_INTEGER;
  }

  private async handleBrightnessChanged(event: Event): Promise<void> {
    if (!this.hass) {
      return;
    }

    const powerEntityId = this.getEntityId("power_entity") ?? "switch.novastar_h2_power_screen_output";
    const powerEntity = this.hass.states[powerEntityId];
    if (powerEntity && powerEntity.state !== "on") {
      return;
    }

    const brightnessEntityId = this.getEntityId("brightness_entity");
    if (!brightnessEntityId) {
      return;
    }

    const target = event.target as HTMLInputElement;
    const nextValue = Number.parseFloat(target.value);
    if (!Number.isFinite(nextValue)) {
      return;
    }

    await this.hass.callService?.("number", "set_value", {
      entity_id: brightnessEntityId,
      value: nextValue
    });
  }

  private async handlePowerToggle(event: Event): Promise<void> {
    if (!this.hass) {
      return;
    }

    const powerEntityId = this.getEntityId("power_entity") ?? "switch.novastar_h2_power_screen_output";
    if (!this.hass.states[powerEntityId]) {
      return;
    }

    const target = event.target as HTMLInputElement;
    const isOn = target.checked;
    this.optimisticPowerState = isOn ? "on" : "off";
    this.requestUpdate();

    const service = isOn ? "turn_on" : "turn_off";
    try {
      await this.hass.callService?.("switch", service, {
        entity_id: powerEntityId
      });
    } catch {
      this.optimisticPowerState = undefined;
      this.requestUpdate();
    }
  }

  private async handlePresetSelectionChanged(event: Event): Promise<void> {
    if (!this.hass) {
      return;
    }

    const presetEntityId = this.getEntityId("preset_entity");
    if (!presetEntityId) {
      return;
    }

    const target = event.target as HTMLSelectElement;
    const option = target.value?.trim();
    if (!option) {
      return;
    }

    await this.hass.callService?.("select", "select_option", {
      entity_id: presetEntityId,
      option
    });

    this.reloadLayerSources();
    await this.waitFor(350);
    this.reloadLayerSources();
  }

  private async handleLayerSourceChanged(event: Event): Promise<void> {
    if (!this.hass) {
      return;
    }

    const target = event.target as HTMLSelectElement;
    const entityId = target.dataset.entityId;
    const option = target.value?.trim();
    if (!entityId || !option) {
      return;
    }

    await this.hass.callService?.("select", "select_option", {
      entity_id: entityId,
      option
    });
  }

  private syncOptimisticPowerState(): void {
    if (!this.hass || !this.optimisticPowerState) {
      return;
    }

    const powerEntityId = this.getEntityId("power_entity") ?? "switch.novastar_h2_power_screen_output";
    const powerEntity = this.hass.states[powerEntityId];
    if (!powerEntity) {
      this.optimisticPowerState = undefined;
      return;
    }

    if (powerEntity.state === this.optimisticPowerState) {
      this.optimisticPowerState = undefined;
    }
  }

  private getEntityId(key: keyof ResolvedEntityMap): string | undefined {
    const configuredValue = this.config?.[key];
    if (configuredValue && configuredValue.trim()) {
      return configuredValue;
    }

    const resolvedValue = this.resolvedEntities[key];
    if (resolvedValue && resolvedValue.trim()) {
      return resolvedValue;
    }

    return undefined;
  }

  private async ensureResolvedEntities(): Promise<void> {
    if (!this.hass || !this.config) {
      return;
    }

    const deviceId = this.config.device_id?.trim();
    if (!deviceId) {
      if (this.resolvedDeviceId || Object.keys(this.resolvedEntities).length > 0) {
        this.resolvedEntities = {};
        this.resolvedLayerSourceEntities = [];
        this.resolvedDeviceId = undefined;
        this.resolvedForHass = undefined;
        this.requestUpdate();
      }
      return;
    }

    if (!this.hass.callWS) {
      return;
    }

    if (this.resolvingDeviceId === deviceId) {
      return;
    }

    if (this.resolvedDeviceId === deviceId && this.resolvedForHass === this.hass) {
      return;
    }

    this.resolvingDeviceId = deviceId;
    try {
      const registry = await this.hass.callWS({ type: "config/entity_registry/list" });
      if (!Array.isArray(registry)) {
        return;
      }

      const entityIds = registry
        .filter((entry) => {
          if (!entry || typeof entry !== "object") {
            return false;
          }

          const item = entry as Record<string, unknown>;
          return item.device_id === deviceId
            && !item.disabled_by
            && !item.hidden_by
            && typeof item.entity_id === "string";
        })
        .map((entry) => (entry as Record<string, unknown>).entity_id as string);

      const layerPattern = /^select\..*_layer_\d+_source$/;
      const layerSourceEntities = entityIds
        .filter((entityId) => layerPattern.test(entityId))
        .sort((a, b) => this.getLayerNumber(a) - this.getLayerNumber(b));

      const nextResolved: ResolvedEntityMap = {
        power_entity: this.pickEntity(entityIds, [/_power_screen_output$/, /_screen_output$/], ["switch"]),
        preset_entity: this.pickEntity(entityIds, [/_preset$/, /_layer_\d+_source$/], ["select"]),
        screens_entity: this.pickEntity(entityIds, [/_screens$/], ["sensor"]),
        layers_entity: this.pickEntity(entityIds, [/_layers$/], ["sensor"]),
        controller_entity: this.pickEntity(entityIds, [/_device_status$/], ["sensor"]),
        status_entity: this.pickEntity(entityIds, [/_signal_status$/], ["sensor"]),
        brightness_entity: this.pickEntity(entityIds, [/_brightness$/], ["number", "sensor"]),
        temperature_entity: this.pickEntity(entityIds, [/_temperature_status$/, /_temp_status$/], ["sensor"])
      };

      nextResolved.controller_entity ||= this.pickEntity(entityIds, [/^media_player\./], ["media_player"]);
      nextResolved.controller_entity ||= this.pickEntity(entityIds, [/_status$/], ["sensor"]);

      this.resolvedEntities = nextResolved;
      this.resolvedLayerSourceEntities = layerSourceEntities;
      this.resolvedDeviceId = deviceId;
      this.resolvedForHass = this.hass;
      this.requestUpdate();
    } catch {
    } finally {
      if (this.resolvingDeviceId === deviceId) {
        this.resolvingDeviceId = undefined;
      }
    }
  }

  private pickEntity(entityIds: string[], patterns: RegExp[], domains: string[]): string | undefined {
    for (const pattern of patterns) {
      const patternMatch = entityIds.find((entityId) => pattern.test(entityId));
      if (patternMatch) {
        return patternMatch;
      }
    }

    for (const domain of domains) {
      const domainPrefix = `${domain}.`;
      const domainMatch = entityIds.find((entityId) => entityId.startsWith(domainPrefix));
      if (domainMatch) {
        return domainMatch;
      }
    }

    return undefined;
  }
}

class NovastarHSeriesCardEditor extends LitElement {
  public hass?: HomeAssistant;

  private config: NovastarCardConfig = {
    type: "custom:novastar-h-series-card"
  };
  private showOverrides = false;
  private localDeviceId?: string;
  private autoDetectedDeviceId?: string;
  private deviceNameById: Record<string, string> = {};
  private loadingDeviceNames = false;
  private attemptedAutoDeviceDefault = false;

  static properties = {
    hass: { attribute: false },
    config: { attribute: false },
    showOverrides: { attribute: false }
  };

  public setConfig(config: NovastarCardConfig): void {
    const nextConfig: NovastarCardConfig = { ...config };
    nextConfig.type ||= "custom:novastar-h-series-card";
    this.config = nextConfig;
    const configuredDeviceId = nextConfig.device_id?.trim();
    if (configuredDeviceId) {
      this.localDeviceId = configuredDeviceId;
      this.autoDetectedDeviceId = configuredDeviceId;
    }
    this.showOverrides = Boolean(
      nextConfig.power_entity
      || nextConfig.preset_entity
      || nextConfig.screens_entity
      || nextConfig.layers_entity
      || nextConfig.controller_entity
      || nextConfig.status_entity
      || nextConfig.brightness_entity
      || nextConfig.temperature_entity
    );
    this.attemptedAutoDeviceDefault = false;
  }

  protected updated(): void {
    void this.ensureDefaultDeviceId();
    void this.ensureDeviceNames();
  }

  protected render() {
    if (!this.hass) {
      return nothing;
    }

    const hasDevicePicker = Boolean(customElements.get("ha-device-picker"));
    const effectiveDeviceId = this.config.device_id?.trim() || this.localDeviceId || this.autoDetectedDeviceId || "";
    const selectedDeviceLabel = this.getSelectedDeviceLabel(effectiveDeviceId);

    return html`
      <div class="editor">
        <ha-textfield
          label="Title"
          .value=${this.config.title ?? ""}
          .configValue=${"title"}
          @input=${this.handleInputChanged}
        ></ha-textfield>
        ${hasDevicePicker
          ? html`
              <ha-device-picker
                .hass=${this.hass}
                label="Device picker (optional)"
                .value=${effectiveDeviceId}
                .configValue=${"device_id"}
                @value-changed=${this.handleEntityChanged}
              ></ha-device-picker>
            `
          : html`
              <ha-textfield
                label="Device ID"
                .value=${effectiveDeviceId}
                .configValue=${"device_id"}
                @input=${this.handleInputChanged}
              ></ha-textfield>
              <div class="helper">Device picker is unavailable in this Home Assistant frontend. Manually enter Device ID of novastar_h device above (note: auto-defaults to first available novastar_h device).</div>
            `}
        <ha-textfield
          class="readonly"
          label="Selected Device ID"
          .value=${selectedDeviceLabel}
          readonly
        ></ha-textfield>
        <details class="overrides" .open=${this.showOverrides} @toggle=${this.handleOverridesToggle}>
          <summary>Override Entities</summary>
          <div class="overrides-content">
            <ha-entity-picker
              .hass=${this.hass}
              label="Power entity (optional override)"
              .value=${this.config.power_entity ?? ""}
              .configValue=${"power_entity"}
              @value-changed=${this.handleEntityChanged}
            ></ha-entity-picker>
            <ha-entity-picker
              .hass=${this.hass}
              label="Preset selection entity (optional override)"
              .value=${this.config.preset_entity ?? ""}
              .configValue=${"preset_entity"}
              @value-changed=${this.handleEntityChanged}
            ></ha-entity-picker>
            <ha-entity-picker
              .hass=${this.hass}
              label="Screens entity (optional override)"
              .value=${this.config.screens_entity ?? ""}
              .configValue=${"screens_entity"}
              @value-changed=${this.handleEntityChanged}
            ></ha-entity-picker>
            <ha-entity-picker
              .hass=${this.hass}
              label="Layers entity (optional override)"
              .value=${this.config.layers_entity ?? ""}
              .configValue=${"layers_entity"}
              @value-changed=${this.handleEntityChanged}
            ></ha-entity-picker>
            <ha-entity-picker
              .hass=${this.hass}
              label="Controller entity (optional override)"
              .value=${this.config.controller_entity ?? ""}
              .configValue=${"controller_entity"}
              @value-changed=${this.handleEntityChanged}
            ></ha-entity-picker>
            <ha-entity-picker
              .hass=${this.hass}
              label="Status entity (optional)"
              .value=${this.config.status_entity ?? ""}
              .configValue=${"status_entity"}
              @value-changed=${this.handleEntityChanged}
            ></ha-entity-picker>
            <ha-entity-picker
              .hass=${this.hass}
              label="Brightness entity (optional)"
              .value=${this.config.brightness_entity ?? ""}
              .configValue=${"brightness_entity"}
              @value-changed=${this.handleEntityChanged}
            ></ha-entity-picker>
            <ha-entity-picker
              .hass=${this.hass}
              label="Temperature entity (optional)"
              .value=${this.config.temperature_entity ?? ""}
              .configValue=${"temperature_entity"}
              @value-changed=${this.handleEntityChanged}
            ></ha-entity-picker>
          </div>
        </details>
      </div>
    `;
  }

  private handleOverridesToggle(event: Event): void {
    const target = event.target as HTMLDetailsElement;
    this.showOverrides = target.open;
  }

  private handleInputChanged(event: Event): void {
    const target = event.target as EventTarget & { configValue?: keyof NovastarCardConfig; value?: string };
    const configValue = target.configValue;
    if (!configValue) {
      return;
    }

    const nextValue = target.value?.trim() ?? "";
    this.updateConfigValue(configValue, nextValue);
  }

  private handleEntityChanged(event: CustomEvent<{ value?: string }>): void {
    const target = event.target as EventTarget & { configValue?: keyof NovastarCardConfig };
    const configValue = target.configValue;
    if (!configValue) {
      return;
    }

    if (!event.detail || event.detail.value === undefined) {
      return;
    }

    const nextValue = event.detail.value?.trim() ?? "";
    this.updateConfigValue(configValue, nextValue);
  }

  private updateConfigValue(configValue: keyof NovastarCardConfig, nextValue: string): void {
    if (configValue === "device_id") {
      this.localDeviceId = nextValue || undefined;
      this.autoDetectedDeviceId = nextValue || this.autoDetectedDeviceId;
    }

    const currentValue = (this.config[configValue] as string | undefined) ?? "";
    if (currentValue === nextValue) {
      return;
    }

    const nextConfig: NovastarCardConfig = { ...this.config };

    if (nextValue) {
      (nextConfig[configValue] as string) = nextValue;
    } else {
      delete nextConfig[configValue];
    }

    if (!nextConfig.type) {
      nextConfig.type = "custom:novastar-h-series-card";
    }

    if (!nextConfig.controller_entity) {
      nextConfig.controller_entity = "";
    }

    this.config = nextConfig;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: nextConfig },
        bubbles: true,
        composed: true
      })
    );
  }

  private async ensureDefaultDeviceId(): Promise<void> {
    if (this.attemptedAutoDeviceDefault || !this.hass?.callWS) {
      return;
    }

    if (this.config.device_id?.trim()) {
      this.attemptedAutoDeviceDefault = true;
      return;
    }

    this.attemptedAutoDeviceDefault = true;

    try {
      const registry = await this.hass.callWS({ type: "config/entity_registry/list" });
      if (!Array.isArray(registry)) {
        return;
      }

      const firstNovastarDeviceId = registry
        .filter((entry) => {
          if (!entry || typeof entry !== "object") {
            return false;
          }

          const item = entry as Record<string, unknown>;
          return item.platform === "novastar_h"
            && typeof item.device_id === "string"
            && !item.disabled_by
            && !item.hidden_by;
        })
        .map((entry) => (entry as Record<string, unknown>).device_id as string)[0];

      if (!firstNovastarDeviceId) {
        return;
      }

      this.autoDetectedDeviceId = firstNovastarDeviceId;
      this.localDeviceId = firstNovastarDeviceId;
      this.requestUpdate();
      this.updateConfigValue("device_id", firstNovastarDeviceId);
    } catch {
    }
  }

  private async ensureDeviceNames(): Promise<void> {
    if (!this.hass?.callWS || this.loadingDeviceNames) {
      return;
    }

    const effectiveDeviceId = this.config.device_id ?? this.localDeviceId;
    if (!effectiveDeviceId || this.deviceNameById[effectiveDeviceId]) {
      return;
    }

    this.loadingDeviceNames = true;
    try {
      const registry = await this.hass.callWS({ type: "config/device_registry/list" });
      if (!Array.isArray(registry)) {
        return;
      }

      const nextMap: Record<string, string> = { ...this.deviceNameById };
      for (const entry of registry) {
        if (!entry || typeof entry !== "object") {
          continue;
        }

        const item = entry as Record<string, unknown>;
        const id = item.id;
        if (typeof id !== "string") {
          continue;
        }

        const preferredName = item.name_by_user ?? item.name ?? item.model;
        if (typeof preferredName === "string" && preferredName.trim()) {
          nextMap[id] = preferredName.trim();
        }
      }

      this.deviceNameById = nextMap;
      this.requestUpdate();
    } catch {
    } finally {
      this.loadingDeviceNames = false;
    }
  }

  private getSelectedDeviceLabel(effectiveDeviceId: string): string {
    if (!effectiveDeviceId) {
      return "Auto-detecting...";
    }

    const deviceName = this.deviceNameById[effectiveDeviceId];
    if (!deviceName) {
      return effectiveDeviceId;
    }

    return `${deviceName} (${effectiveDeviceId})`;
  }

  static styles = css`
    .editor {
      display: grid;
      gap: 12px;
      padding: 12px 0;
    }

    .helper {
      color: var(--secondary-text-color);
      font-size: 0.9rem;
    }

    .readonly {
      opacity: 0.9;
    }

    .overrides {
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      padding: 8px 12px;
    }

    .overrides summary {
      cursor: pointer;
      font-weight: 500;
      user-select: none;
    }

    .overrides-content {
      display: grid;
      gap: 12px;
      margin-top: 12px;
    }
  `;
}

try {
  customElements.define("novastar-h-series-card", NovastarHSeriesCard);
} catch {
}

try {
  customElements.define("novastar-h-series-card-editor", NovastarHSeriesCardEditor);
} catch {
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "novastar-h-series-card",
  name: "Novastar H Series Card",
  description: "Displays core status information for a Novastar H Series controller from device or entity config."
});
