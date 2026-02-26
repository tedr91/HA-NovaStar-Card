import { build, context } from "esbuild";
import { execSync } from "node:child_process";

function getArg(name, defaultValue) {
  const prefix = `--${name}=`;
  const arg = process.argv.find((value) => value.startsWith(prefix));
  if (!arg) {
    return defaultValue;
  }

  return arg.slice(prefix.length);
}

function getCardVersion() {
  if (process.env.CARD_VERSION?.trim()) {
    return process.env.CARD_VERSION.trim();
  }

  try {
    return execSync("git describe --tags --exact-match", { encoding: "utf8" }).trim();
  } catch {
  }

  try {
    return execSync("git describe --tags --always --dirty", { encoding: "utf8" }).trim();
  } catch {
  }

  return "dev";
}

async function run() {
  const mode = getArg("mode", "prod");
  const isWatch = mode === "watch";
  const isProd = mode === "prod";

  const commonOptions = {
    entryPoints: ["src/novastar-h-series-card.ts"],
    bundle: true,
    format: "esm",
    target: "es2022",
    outfile: "novastar-h-series-card.js",
    minify: isProd,
    sourcemap: !isProd,
    define: {
      __CARD_VERSION__: JSON.stringify(getCardVersion())
    }
  };

  if (isWatch) {
    const watchContext = await context(commonOptions);
    await watchContext.watch();
    return;
  }

  await build(commonOptions);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});