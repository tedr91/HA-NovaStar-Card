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
  device_id?: string;
  power_entity?: string;
  controller_entity?: string;
  status_entity?: string;
  brightness_entity?: string;
  temperature_entity?: string;
};

type ResolvedEntityMap = {
  power_entity?: string;
  controller_entity?: string;
  status_entity?: string;
  brightness_entity?: string;
  temperature_entity?: string;
};

declare global {
  interface Window {
    customCards?: Array<Record<string, unknown>>;
  }
}

export class NovastarHSeriesCard extends LitElement {
  public hass?: HomeAssistant;

  private config?: NovastarCardConfig;
  private resolvedEntities: ResolvedEntityMap = {};
  private resolvedDeviceId?: string;
  private resolvingDeviceId?: string;
  private resolvedForHass?: HomeAssistant;

  static properties = {
    hass: { attribute: false },
    config: { attribute: false }
  };

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
    const statusEntityId = this.getEntityId("status_entity");
    const brightnessEntityId = this.getEntityId("brightness_entity");
    const temperatureEntityId = this.getEntityId("temperature_entity");

    const powerEntity = this.hass.states[powerEntityId];
    const powerIsOn = powerEntity?.state === "on";

    const statusEntity = statusEntityId
      ? this.hass.states[statusEntityId]
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
    const controllerValue = statusEntity
      ? `${controller.state} (${statusEntity.state})`
      : controller.state;

    return html`
      <ha-card>
        <div class="header-row">
          <div class="header">${this.config.title ?? "Novastar H Series"}</div>
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
        <div class="content">
          <div class="row">
            <span class="label">Controller</span>
            <span class="value">${controllerValue}</span>
          </div>
          ${temperatureEntity
            ? html`<div class="row"><span class="label">Temperature</span><span class="value">${temperatureEntity.state}</span></div>`
            : nothing}
          ${brightnessEntity
            ? showBrightnessSlider
              ? html`
                  <div class="brightness-row">
                    <div class="brightness-header">
                      <span class="label">Brightness</span>
                      <span class="value">${Math.round(brightnessValue)}%</span>
                    </div>
                    <input
                      class="brightness-slider"
                      type="range"
                      min=${brightnessMin}
                      max=${brightnessMax}
                      step=${brightnessStep}
                      .value=${String(brightnessValue)}
                      @change=${this.handleBrightnessChanged}
                    />
                  </div>
                `
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
  `;

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

  private async handleBrightnessChanged(event: Event): Promise<void> {
    if (!this.hass) {
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

    const service = isOn ? "turn_on" : "turn_off";
    await this.hass.callService?.("switch", service, {
      entity_id: powerEntityId
    });
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

      const nextResolved: ResolvedEntityMap = {
        power_entity: this.pickEntity(entityIds, [/_power_screen_output$/, /_screen_output$/], ["switch"]),
        controller_entity: this.pickEntity(entityIds, [/_device_status$/], ["sensor"]),
        status_entity: this.pickEntity(entityIds, [/_signal_status$/], ["sensor"]),
        brightness_entity: this.pickEntity(entityIds, [/_brightness$/], ["number", "sensor"]),
        temperature_entity: this.pickEntity(entityIds, [/_temperature_status$/, /_temp_status$/], ["sensor"])
      };

      nextResolved.controller_entity ||= this.pickEntity(entityIds, [/^media_player\./], ["media_player"]);
      nextResolved.controller_entity ||= this.pickEntity(entityIds, [/_status$/], ["sensor"]);

      this.resolvedEntities = nextResolved;
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
