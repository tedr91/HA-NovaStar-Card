/**
 * Novastar H Series Card — main entry point.
 *
 * This is the single bundled JavaScript module that Home Assistant loads as a
 * Lovelace resource. It imports the card and its editor so they register their
 * custom elements when the module is evaluated.
 */
import { printVersionBanner } from "./shared/version-banner";

// Cards
import "./cards/novastar-h-series-card/novastar-h-series-card";
import "./cards/novastar-h-series-card/novastar-h-series-card-editor";

printVersionBanner();
