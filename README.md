# Novastar H Series Card

Lovelace frontend card for the Novastar H Series Home Assistant integration.

## Prerequisite

This card requires the **HA-novastar-h** Home Assistant device integration to be installed first:

https://github.com/tedr91/HA-novastar-h

## Features

- Polished, touch-friendly UI designed for wall-mounted control panels.
- Two theme styles: a self-contained "Ted's Home Theater" look (default — a Windows 11 Fluent / Mica-dark style with a cyan accent) or follow your Home Assistant theme.
- Three display modes: Detailed, Standard (default), and Compact.
- Apple TV-style power button, tappable preset chips, and an inline brightness control.
- Interactive screen layout preview with per-layer source selection.
- Reorderable card sections: rearrange the Presets and Layout preview blocks (and hide either) from the visual editor.
- Displays a primary controller entity state, with optional status, brightness, and temperature entities.
- Includes a visual Lovelace card editor (grouped into Visual, Card sections, and Advanced) in the dashboard UI.
- Ships as a single HACS-distributed frontend module.

## Install via HACS

1. Add this repository as a custom frontend repository in HACS.
2. Install **Novastar H Series Card**.
3. Restart Home Assistant.
4. Add the card to a dashboard.

## Manual Install

1. Run `npm install`.
2. Build with `npm run build`.
3. Copy `novastar-h-series-card.js` to your Home Assistant `/config/www/` folder.
4. Add resource:

```yaml
url: /local/novastar-h-series-card.js
type: module
```

## Card Configuration

```yaml
type: custom:novastar-h-series-card
header: Novastar H Series
display_mode: standard
theme: ted-style
controller_entity: sensor.novastar_h_series_controller
status_entity: sensor.novastar_h_series_status
brightness_entity: sensor.novastar_h_series_brightness
temperature_entity: sensor.novastar_h_series_temperature
```

`controller_entity` is required. All other fields are optional.

`header` sets the title shown in the card header. Defaults to `Novastar H Series`.

`display_mode` options:
- `detailed`: full card with labeled status, temperature, brightness, and preset rows plus the layout preview.
- `standard` (default): streamlined controls (power, brightness, presets) with the layout preview as the centerpiece.
- `compact`: layout visualization only.

`theme` options:
- `ted-style` (default): self-contained "Ted's Home Theater" appearance — a Windows 11 Fluent (Mica-dark) style with a cyan accent and Segoe UI typography — that looks the same regardless of your Home Assistant theme.
- `ha`: follow the active Home Assistant theme (accent color, surfaces, and corner radius).

`show_header_in_compact` options:
- `false` (default): hide the header in compact mode.
- `true`: show the header (and power button) in compact mode.

`show_card_version` options:
- `false` (default): hide the card version.
- `true`: show the card version at the bottom of the Detailed view.

`show_presets` and `show_layout` options:
- `true` (default): show the Presets section / Layout preview section on the card.
- `false`: hide that section. In the visual editor each section has its own on/off toggle under **Card sections**.

`section_order` (optional): controls the order of the card's reorderable body sections (`presets` and `layout`). In the visual editor, open **Card sections**, then use the three-dot menu on a section row to **Move up** / **Move down**. The same order is used in Detailed and Standard modes (the Detailed-mode status/temperature/brightness rows stay pinned at the top and the version footer stays at the bottom). Leave it unset to use the default order (presets, then layout). You can also set it directly in YAML, e.g. `section_order: [layout, presets]`.

`screen_color` and `screen_background_color` (optional): customize the layout preview colors. `screen_color` sets the layer tone and `screen_background_color` sets the screen backdrop. Each accepts a Home Assistant theme color name (e.g. `blue`) or a hex value (e.g. `#202733`); leave unset to use the defaults. Both are most easily set with the color pickers in the visual editor.

`preset_order` (optional): customize which presets appear and in what order. In the visual editor, a **Preset order** field lists the presets read live from your NovaStar device as draggable chips — drag to reorder, and remove a chip to hide that preset. The same order is used in both Detailed and Standard modes; in Standard mode the first presets become the quick buttons (up to 5 shown directly, otherwise the first 4 plus a "more" button). Clear the field to show every preset again in the device's default order.

If the set of presets on the device changes (a preset added, removed, or renamed via the NovaStar web interface), the card automatically discards your saved order and falls back to showing all presets in device order, so nothing is ever stranded. A companion `preset_baseline` value is written automatically to detect those changes — you don't need to set it yourself.

Compact example:

```yaml
type: custom:novastar-h-series-card
header: Novastar Layout
display_mode: compact
show_header_in_compact: true
device_id: YOUR_DEVICE_ID
```

## Development

- `npm run build` creates a production bundle in the repository root.
- `npm run watch` rebuilds on file change.

## Windows PowerShell note

If PowerShell blocks `npm` with an execution policy error for `npm.ps1`, run commands with `npm.cmd` instead:

- `npm.cmd install`
- `npm.cmd run build`

You can also run `cmd /c npm install` and `cmd /c npm run build`.
