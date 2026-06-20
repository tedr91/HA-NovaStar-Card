# Brand logo source art.
#
# Built-in brand logos ship INSIDE the card as inline monochrome SVG. These PNGs
# are the SOURCE the SVG is traced from — they are NOT loaded at runtime.
#
# Per brand subfolder, provide any subset of these variant sources:
#   logo.png            (logo only / "mark")
#   logo-name-below.png (logo with the brand name below / "stacked")
#   logo-name-right.png (logo with the brand name to the right / "horizontal")
#
# Theme-suffixed files (e.g. logo-dark.png / logo-light.png) also work as a
# source; tracing only uses the shape (alpha), so colour/theme does not matter.
#
# To (re)generate the inline SVG art after adding or changing PNGs:
#   npm install                    # once: pulls dev-only tracer deps (potrace, jimp, sharp)
#   node scripts/trace-logos.mjs   # rewrites src/cards/.../brands.art.ts
# Map new files in the SOURCES table at the top of scripts/trace-logos.mjs. Each
# entry is one of: { file } (transparent PNG), { file, mode:"color" } (colour
# logo / SVG, drops white detail), or { wordmark:"NAME" } (renders the brand
# name as text when no usable logo image is available).
#
# A user's own "Custom" brand logo is uploaded in the card editor and stored in
# Home Assistant's image store (no files in this folder needed for that).
