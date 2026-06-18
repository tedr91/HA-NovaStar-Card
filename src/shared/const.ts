/**
 * Global constants shared across all cards in this collection.
 *
 * NAMESPACE is the prefix for every custom element registered by this package
 * (e.g. NAMESPACE = "novastar" produces `novastar-h-series-card`).
 */
export const NAMESPACE = "novastar";

// Replaced at build time by esbuild's `define` from the git tag / CARD_VERSION.
declare const __CARD_VERSION__: string;
export const VERSION: string = __CARD_VERSION__;

/** Entry on `window.customCards` — surfaces a card in the UI card picker. */
export interface CustomCardEntry {
  type: string;
  name: string;
  description: string;
  preview?: boolean;
  documentationURL?: string;
}

declare global {
  interface Window {
    customCards?: CustomCardEntry[];
  }
}
