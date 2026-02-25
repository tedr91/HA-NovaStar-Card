import { LitElement, css, html, nothing } from "lit";

type HassEntity = {
  state: string;
  attributes: Record<string, unknown>;
};

type HomeAssistant = {
  states: Record<string, HassEntity>;
  callService?: (domain: string, service: string, serviceData?: Record<string, unknown>) => Promise<void>;
};

type NovastarCardConfig = {
  type: string;
  title?: string;
  controller_entity: string;
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
      title: "Novastar H Series",
      controller_entity: ""
    };
  }

  protected render() {
    if (!this.config) {
      return html`<ha-card><div class="content">Invalid card configuration.</div></ha-card>`;
    }

    if (!this.hass) {
      return html`<ha-card><div class="content">Home Assistant context is unavailable.</div></ha-card>`;
    }

    const controller = this.hass.states[this.config.controller_entity];
    if (!controller) {
      return html`<ha-card><div class="content">Entity not found: ${this.config.controller_entity}</div></ha-card>`;
    }

    const statusEntity = this.config.status_entity
      ? this.hass.states[this.config.status_entity]
      : undefined;
    const brightnessEntity = this.config.brightness_entity
      ? this.hass.states[this.config.brightness_entity]
      : undefined;
    const temperatureEntity = this.config.temperature_entity
      ? this.hass.states[this.config.temperature_entity]
      : undefined;
    const brightnessValue = brightnessEntity ? Number.parseFloat(brightnessEntity.state) : Number.NaN;
    const brightnessMin = brightnessEntity ? this.readNumberAttribute(brightnessEntity, "min", 0) : 0;
    const brightnessMax = brightnessEntity ? this.readNumberAttribute(brightnessEntity, "max", 100) : 100;
    const brightnessStep = brightnessEntity ? this.readNumberAttribute(brightnessEntity, "step", 1) : 1;
    const showBrightnessSlider = brightnessEntity && Number.isFinite(brightnessValue);

    return html`
      <ha-card>
        <div class="header">${this.config.title ?? "Novastar H Series"}</div>
        <div class="content">
          <div class="row">
            <span class="label">Controller</span>
            <span class="value">${controller.state}</span>
          </div>
          ${statusEntity
            ? html`<div class="row"><span class="label">Status</span><span class="value">${statusEntity.state}</span></div>`
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
          ${temperatureEntity
            ? html`<div class="row"><span class="label">Temperature</span><span class="value">${temperatureEntity.state}</span></div>`
            : nothing}
        </div>
      </ha-card>
    `;
  }

  static styles = css`
    .header {
      font-size: 1rem;
      font-weight: 600;
      padding: 16px 16px 0;
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
    if (!this.hass || !this.config?.brightness_entity) {
      return;
    }

    const target = event.target as HTMLInputElement;
    const nextValue = Number.parseFloat(target.value);
    if (!Number.isFinite(nextValue)) {
      return;
    }

    await this.hass.callService?.("number", "set_value", {
      entity_id: this.config.brightness_entity,
      value: nextValue
    });
  }
}

class NovastarHSeriesCardEditor extends LitElement {
  public hass?: HomeAssistant;

  private config: NovastarCardConfig = {
    type: "custom:novastar-h-series-card",
    controller_entity: ""
  };

  static properties = {
    hass: { attribute: false },
    config: { attribute: false }
  };

  public setConfig(config: NovastarCardConfig): void {
    const nextConfig: NovastarCardConfig = { ...config };
    nextConfig.type ||= "custom:novastar-h-series-card";
    nextConfig.controller_entity ||= "";
    this.config = nextConfig;
  }

  protected render() {
    if (!this.hass) {
      return nothing;
    }

    return html`
      <div class="editor">
        <ha-textfield
          label="Title"
          .value=${this.config.title ?? ""}
          .configValue=${"title"}
          @input=${this.handleInputChanged}
        ></ha-textfield>
        <ha-entity-picker
          .hass=${this.hass}
          label="Controller entity (required)"
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
    `;
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

  static styles = css`
    .editor {
      display: grid;
      gap: 12px;
      padding: 12px 0;
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
  description: "Displays core status information for a Novastar H Series controller."
});
