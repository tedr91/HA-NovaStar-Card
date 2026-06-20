// Build-time tool: turns brand sources (PNG, SVG, or a generated wordmark) into
// clean monochrome SVG paths and writes src/cards/novastar-h-series-card/brands.art.ts.
// Run with: node scripts/trace-logos.mjs
// Requires devDependencies: potrace, jimp, sharp (NOT shipped in the card bundle).
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { writeFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const potrace = require("potrace");
const { Jimp, JimpMime } = require("jimp");
const sharp = require("sharp");

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const brandsDir = join(root, "brands");

// Source per brand/variant. Theme is irrelevant for a monochrome silhouette
// (recolored at runtime via currentColor), so any single source works.
//   { file }      = transparent single-colour PNG  -> alpha mask
//   { file, mode:"luminance" } / .svg              -> flatten on white, trace dark
//   { wordmark }  = render the brand name as text  -> trace
// Brands listing only `mark` reuse it for stacked/horizontal (getBrandArt fallback).
const SOURCES = {
  awall: {
    mark: { file: "awall/logo.png" },
    stacked: { file: "awall/logo-name-below.png" },
    horizontal: { file: "awall/logo-name-right.png" }
  },
  boe: {
    mark: { file: "boe/logo.png" },
    stacked: { file: "boe/logo.png" },
    horizontal: { file: "boe/logo.png" }
  },
  justvideowalls: {
    mark: { file: "justvideowalls/logo-dark.png" },
    stacked: { file: "justvideowalls/logo-name-below-dark.png" },
    horizontal: { file: "justvideowalls/logo-name-right-dark.png" }
  },
  "roe-visual": {
    // Official logo (roe-visual/logo.svg) is a dot-matrix design that traces to
    // noise and is illegible at header size, so use a clean wordmark instead.
    mark: { wordmark: "ROE VISUAL" }
  },
  leyard: {
    mark: { file: "leyard/logo.png" }
  },
  absen: {
    mark: { wordmark: "ABSEN" }
  },
  unilumin: {
    mark: { wordmark: "UNILUMIN" }
  },
  infiled: {
    mark: { wordmark: "INFiLED" }
  }
};

const POTRACE_PARAMS = {
  threshold: 128,
  blackOnWhite: true,
  turdSize: 2,
  optCurve: true,
  optTolerance: 0.2
};

// Read a source descriptor into a Jimp image (RGBA). Wordmarks render with a
// system font on white via sharp; SVGs rasterize (keeping transparency) so a
// colour isolation mask can drop white detail.
async function readSource(desc) {
  if (desc.wordmark) {
    const fontSize = 140;
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" width="4000" height="${fontSize * 2}">` +
      `<rect width="100%" height="100%" fill="white"/>` +
      `<text x="0" y="${Math.round(fontSize * 1.32)}" font-family="Arial, Helvetica, sans-serif" ` +
      `font-weight="bold" font-size="${fontSize}" letter-spacing="2" fill="black">${desc.wordmark}</text></svg>`;
    const png = await sharp(Buffer.from(svg))
      .trim({ background: "#ffffff" })
      .extend({ top: 24, bottom: 24, left: 28, right: 28, background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toBuffer();
    return Jimp.read(png);
  }
  if (desc.file.endsWith(".svg")) {
    const png = await sharp(join(brandsDir, desc.file)).resize({ height: 600, fit: "inside" }).png().toBuffer();
    return Jimp.read(png);
  }
  return Jimp.read(join(brandsDir, desc.file));
}

// Build a black-on-white mask for potrace.
//   alpha     => opaque pixels are the shape (transparent single-colour logos)
//   luminance => flatten onto white, dark pixels are the shape (wordmarks)
//   color     => opaque AND non-white pixels are the shape (colour logos with
//                white detail, e.g. an SVG with white cut-outs)
async function maskBuffer(desc) {
  const mode = desc.mode ?? (desc.wordmark ? "luminance" : "alpha");
  const img = await readSource(desc);
  const { data, width, height } = img.bitmap;
  img.scan(0, 0, width, height, (x, y, idx) => {
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = data[idx + 3];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    let foreground;
    if (mode === "alpha") {
      foreground = a > 128;
    } else if (mode === "color") {
      foreground = a > 128 && lum < 230;
    } else {
      // luminance: composite over white then threshold dark
      const af = a / 255;
      foreground = lum * af + 255 * (1 - af) < 128;
    }
    const v = foreground ? 0 : 255;
    data[idx] = v;
    data[idx + 1] = v;
    data[idx + 2] = v;
    data[idx + 3] = 255;
  });
  return img.getBuffer(JimpMime.png);
}

function traceBuffer(buffer) {
  return new Promise((resolve, reject) => {
    potrace.trace(buffer, POTRACE_PARAMS, (err, svg) => (err ? reject(err) : resolve(svg)));
  });
}

function parseSvg(svg) {
  const width = Number.parseFloat(/width="([\d.]+)"/.exec(svg)?.[1] ?? "0");
  const height = Number.parseFloat(/height="([\d.]+)"/.exec(svg)?.[1] ?? "0");
  const path = / d="([^"]*)"/.exec(svg)?.[1] ?? "";
  return { width, height, path };
}

async function run() {
  const result = {};
  const cache = new Map();

  for (const [brandId, variants] of Object.entries(SOURCES)) {
    result[brandId] = {};
    for (const [variant, desc] of Object.entries(variants)) {
      const key = JSON.stringify(desc);
      if (!cache.has(key)) {
        const svg = await traceBuffer(await maskBuffer(desc));
        cache.set(key, parseSvg(svg));
      }
      const { width, height, path } = cache.get(key);
      result[brandId][variant] = { w: Math.round(width), h: Math.round(height), path };
      console.log(`${brandId}/${variant}: ${Math.round(width)}x${Math.round(height)} (${path.length} chars)`);
    }
  }

  const header =
    "// AUTO-GENERATED by scripts/trace-logos.mjs from the sources in brands/. Do not edit by hand.\n" +
    "// Monochrome silhouettes traced with potrace; recolored at runtime via currentColor.\n" +
    'import type { LogoVariant } from "./types";\n\n' +
    "export type BrandArt = { w: number; h: number; path: string };\n\n" +
    "export const BRAND_ART: Record<string, Partial<Record<LogoVariant, BrandArt>>> = ";
  const body = JSON.stringify(result, null, 2);
  const out = join(root, "src", "cards", "novastar-h-series-card", "brands.art.ts");
  writeFileSync(out, `${header}${body};\n`, "utf8");
  console.log(`\nWrote ${out}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
