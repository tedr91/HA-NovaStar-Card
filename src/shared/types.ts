/**
 * Cross-cutting types shared by every card in this collection.
 *
 * These mirror the minimal Home Assistant shapes the cards rely on, kept
 * dependency-free so the bundle stays self-contained.
 */

export type HassEntity = {
  state: string;
  attributes: Record<string, unknown>;
};

export type HomeAssistant = {
  states: Record<string, HassEntity>;
  callService?: (domain: string, service: string, serviceData?: Record<string, unknown>) => Promise<void>;
  callWS?: (message: Record<string, unknown>) => Promise<unknown>;
};

/** Visual styling mode shared by all cards: `ted-style` = self-contained look; `ha` = follow HA theme. */
export type ThemeMode = "ted-style" | "ha";
