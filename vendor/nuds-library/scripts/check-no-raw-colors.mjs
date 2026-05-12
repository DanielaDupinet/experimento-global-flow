import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const targetDir = path.join(root, "packages/react-native/src");
const filePattern = /\.(ts|tsx)$/;
const rawColorPattern = /#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b|rgba?\(/;

const allowMarkers = [
  "raw-color-ok"
];

const ignoredFiles = new Set();

const files = [];

const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (!filePattern.test(entry.name)) {
      continue;
    }
    if (ignoredFiles.has(fullPath)) {
      continue;
    }
    files.push(fullPath);
  }
};

walk(targetDir);

const violations = [];

for (const filePath of files) {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");
  lines.forEach((line, index) => {
    if (allowMarkers.some((marker) => line.includes(marker))) {
      return;
    }
    if (rawColorPattern.test(line)) {
      violations.push(`${path.relative(root, filePath)}:${index + 1} -> ${line.trim()}`);
    }
  });
}

if (violations.length > 0) {
  console.error("Raw color literals are not allowed in react-native package files:");
  violations.forEach((violation) => console.error(`- ${violation}`));
  process.exit(1);
}

console.log("No raw color literals detected.");
