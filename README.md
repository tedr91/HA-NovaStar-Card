# Novastar H Series Card

Lovelace frontend card for the Novastar H Series Home Assistant integration.

## Prerequisite

This card requires the **HA-novastar-h** Home Assistant device integration to be installed first:

https://github.com/tedr91/HA-novastar-h

## Features

- Displays a primary controller entity state.
- Supports optional status, brightness, and temperature entities.
- Includes a visual Lovelace card editor in the dashboard UI.
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
title: Novastar H Series
display_mode: full
controller_entity: sensor.novastar_h_series_controller
status_entity: sensor.novastar_h_series_status
brightness_entity: sensor.novastar_h_series_brightness
temperature_entity: sensor.novastar_h_series_temperature
```

`controller_entity` is required. All other fields are optional.

`display_mode` options:
- `full` (default): full card with status/controls plus layout preview.
- `layout`: layout-only output (screen layout and layer source interaction only).

Layout-only example:

```yaml
type: custom:novastar-h-series-card
title: Novastar Layout
display_mode: layout
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
