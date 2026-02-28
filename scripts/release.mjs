import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

function run(command, options = {}) {
  console.log(`$ ${command}`);
  return execSync(command, {
    stdio: "pipe",
    encoding: "utf8",
    ...options
  }).trim();
}

function runStreaming(command, options = {}) {
  console.log(`$ ${command}`);
  execSync(command, {
    stdio: "inherit",
    ...options
  });
}

function hasArg(name) {
  return process.argv.includes(name);
}

function getBumpType() {
  const positional = process.argv
    .slice(2)
    .find((arg) => !arg.startsWith("--"));

  if (!positional) {
    return "patch";
  }

  if (positional === "patch" || positional === "minor" || positional === "major") {
    return positional;
  }

  throw new Error(`Unsupported bump type: ${positional}. Use patch, minor, or major.`);
}

function bumpVersion(version, bumpType) {
  const match = version.match(/^(\d+)\.(\d+)\.(\d+)$/);
  if (!match) {
    throw new Error(`Invalid semver in package.json: ${version}`);
  }

  const major = Number.parseInt(match[1], 10);
  const minor = Number.parseInt(match[2], 10);
  const patch = Number.parseInt(match[3], 10);

  if (bumpType === "major") {
    return `${major + 1}.0.0`;
  }

  if (bumpType === "minor") {
    return `${major}.${minor + 1}.0`;
  }

  return `${major}.${minor}.${patch + 1}`;
}

function updatePackageVersion(nextVersion) {
  const packagePath = "package.json";
  const packageJson = JSON.parse(readFileSync(packagePath, "utf8"));
  packageJson.version = nextVersion;
  writeFileSync(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`, "utf8");
}

function getPreviousTag() {
  try {
    const tagsOutput = run("git tag --sort=-v:refname");
    const tags = tagsOutput.split(/\r?\n/).map((tag) => tag.trim()).filter(Boolean);
    return tags[0];
  } catch {
    return undefined;
  }
}

function commandExists(command) {
  const checkCommand = process.platform === "win32"
    ? `where ${command}`
    : `command -v ${command}`;

  try {
    run(checkCommand, { shell: true });
    return true;
  } catch {
    return false;
  }
}

function getReleaseNotes(tag, previousTag) {
  let commitLines = "";

  try {
    const range = previousTag
      ? `${previousTag}..HEAD`
      : "HEAD";
    commitLines = run(`git log ${range} --pretty=format:"- %s (%h)"`);
  } catch {
    commitLines = "";
  }

  const notesLines = [
    `## ${tag}`,
    "",
    "### Changes",
    commitLines || "- Release housekeeping"
  ];

  return notesLines.join("\n");
}

function main() {
  const bumpType = getBumpType();
  const isDryRun = hasArg("--dry-run");

  const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
  const currentVersion = packageJson.version;
  const nextVersion = bumpVersion(currentVersion, bumpType);
  const tag = `v${nextVersion}`;
  const previousTag = getPreviousTag();

  console.log(`Preparing ${bumpType} release: ${currentVersion} -> ${nextVersion}`);

  if (isDryRun) {
    console.log("Dry run complete. No changes written.");
    return;
  }

  updatePackageVersion(nextVersion);

  const env = {
    ...process.env,
    CARD_VERSION: tag
  };

  const npmCmd = process.platform === "win32"
    ? "npm.cmd"
    : "npm";

  runStreaming(`${npmCmd} run build`, { env });

  runStreaming("git add -A");

  let hasStagedChanges = true;
  try {
    run("git diff --cached --quiet");
    hasStagedChanges = false;
  } catch {
    hasStagedChanges = true;
  }

  if (!hasStagedChanges) {
    throw new Error("No staged changes to release.");
  }

  runStreaming(`git commit -m "release: ${tag}"`);
  runStreaming(`git tag -a ${tag} -m "Release ${tag}"`);
  runStreaming("git push origin HEAD");
  runStreaming(`git push origin ${tag}`);

  if (!commandExists("gh")) {
    console.log("GitHub CLI (gh) not found. Skipping GitHub release creation.");
    return;
  }

  const releaseNotes = getReleaseNotes(tag, previousTag);
  const releaseNotesEscaped = releaseNotes
    .replace(/"/g, '\\"')
    .replace(/\r?\n/g, "\\n");

  runStreaming(`gh release create ${tag} --title "${tag}" --latest --notes "${releaseNotesEscaped}"`);
}

try {
  main();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exit(1);
}