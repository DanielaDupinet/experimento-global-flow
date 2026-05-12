import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const rnRoot = path.join(root, "packages/react-native/src");
const componentMapPath = path.join(rnRoot, "figma/component-map.json");
const tokenMapPath = path.join(rnRoot, "figma/token-map.json");

const readJson = (filePath) => JSON.parse(fs.readFileSync(filePath, "utf8"));
const readText = (filePath) => fs.readFileSync(filePath, "utf8");

const resolveModuleFile = (fromDir, modulePath) => {
  const base = path.resolve(fromDir, modulePath);
  const candidates = [
    `${base}.ts`,
    `${base}.tsx`,
    path.join(base, "index.ts"),
    path.join(base, "index.tsx")
  ];
  for (const filePath of candidates) {
    if (fs.existsSync(filePath)) return filePath;
  }
  return null;
};

const parseExportNames = (source) => {
  const names = new Set();
  const valueDeclRegex = /export\s+(?:const|function|class)\s+([A-Za-z0-9_]+)/g;
  const namedExportRegex = /export\s*\{([^}]+)\}(?!\s*from)/g;
  let match;
  while ((match = valueDeclRegex.exec(source))) names.add(match[1]);
  while ((match = namedExportRegex.exec(source))) {
    const parts = match[1]
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);
    for (const part of parts) {
      if (part.startsWith("type ")) continue;
      const aliasParts = part.split(/\s+as\s+/i);
      names.add((aliasParts[1] ?? aliasParts[0]).trim());
    }
  }
  return names;
};

const collectFromIndex = (indexPath, visited = new Set()) => {
  if (visited.has(indexPath)) return new Set();
  visited.add(indexPath);

  const source = readText(indexPath);
  const exportFromRegex = /export\s+(type\s+)?(\*|\{[^}]+\})\s+from\s+["']([^"']+)["'];?/g;
  const names = new Set(parseExportNames(source));
  let match;

  while ((match = exportFromRegex.exec(source))) {
    const isTypeOnly = Boolean(match[1]);
    const clause = match[2];
    const modulePath = match[3];
    if (isTypeOnly) continue;

    const resolved = resolveModuleFile(path.dirname(indexPath), modulePath);
    if (!resolved) continue;
    const resolvedSource = readText(resolved);

    if (clause === "*") {
      // Recurse through indexes; otherwise read declarations directly.
      if (path.basename(resolved).startsWith("index.")) {
        for (const n of collectFromIndex(resolved, visited)) names.add(n);
      } else {
        for (const n of parseExportNames(resolvedSource)) names.add(n);
      }
      continue;
    }

    // export { A, B as C } from ...
    const namedClause = clause.slice(1, -1);
    const namedParts = namedClause
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);
    for (const part of namedParts) {
      if (part.startsWith("type ")) continue;
      const aliasParts = part.split(/\s+as\s+/i);
      names.add((aliasParts[1] ?? aliasParts[0]).trim());
    }
  }

  return names;
};

const extractObjectLiteral = (fileContent, anchor, scope = {}) => {
  const anchorIndex = fileContent.indexOf(anchor);
  if (anchorIndex < 0) throw new Error(`Anchor not found: ${anchor}`);
  const start = fileContent.indexOf("{", anchorIndex);
  if (start < 0) throw new Error(`Object start not found for: ${anchor}`);
  let depth = 0;
  let end = -1;
  for (let i = start; i < fileContent.length; i += 1) {
    const ch = fileContent[i];
    if (ch === "{") depth += 1;
    if (ch === "}") {
      depth -= 1;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end < 0) throw new Error(`Object end not found for: ${anchor}`);
  const literal = fileContent.slice(start, end + 1);
  const scopeKeys = Object.keys(scope);
  const scopeValues = Object.values(scope);
  return Function(...scopeKeys, `return (${literal});`)(...scopeValues);
};

const extractObjectLiteralText = (fileContent, anchor) => {
  const anchorIndex = fileContent.indexOf(anchor);
  if (anchorIndex < 0) throw new Error(`Anchor not found: ${anchor}`);
  const start = fileContent.indexOf("{", anchorIndex);
  if (start < 0) throw new Error(`Object start not found for: ${anchor}`);
  let depth = 0;
  let end = -1;
  for (let i = start; i < fileContent.length; i += 1) {
    const ch = fileContent[i];
    if (ch === "{") depth += 1;
    if (ch === "}") {
      depth -= 1;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end < 0) throw new Error(`Object end not found for: ${anchor}`);
  return fileContent.slice(start, end + 1);
};

const extractTopLevelKeys = (fileContent, anchor) => {
  const literal = extractObjectLiteralText(fileContent, anchor);
  const keys = [];
  const keyRegex = /^ {2}([A-Za-z0-9_]+)\s*:/gm;
  let match;
  while ((match = keyRegex.exec(literal))) keys.push(match[1]);
  return keys;
};

const flattenObjectPaths = (obj, prefix) => {
  const paths = [];
  for (const [key, value] of Object.entries(obj)) {
    const needsBracket = /^\d|[^A-Za-z0-9_$]/.test(key);
    const current = needsBracket ? `${prefix}["${key}"]` : `${prefix}.${key}`;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      const nested = flattenObjectPaths(value, current);
      if (nested.length === 0) paths.push(current);
      else paths.push(...nested);
    } else {
      paths.push(current);
    }
  }
  return paths;
};

const buildValidThemePaths = () => {
  const primitivesFile = readText(path.join(root, "packages/tokens/src/primitives.ts"));
  const semanticsFile = readText(path.join(root, "packages/tokens/src/semantics.ts"));
  const spacingFile = readText(path.join(root, "packages/tokens/src/spacing.ts"));
  const radiusFile = readText(path.join(root, "packages/tokens/src/radius.ts"));
  const typographyFile = readText(path.join(root, "packages/tokens/src/typography.ts"));
  const elevationFile = readText(path.join(root, "packages/tokens/src/elevation.ts"));
  const motionFile = readText(path.join(root, "packages/tokens/src/motion.ts"));
  const zIndexFile = readText(path.join(root, "packages/tokens/src/zIndex.ts"));

  const lightPrimitives = extractObjectLiteral(primitivesFile, "export const lightPrimitives =");
  const darkPrimitives = extractObjectLiteral(primitivesFile, "export const darkPrimitives =");
  const fullSemantics = extractObjectLiteral(semanticsFile, "export const semanticColorTokens =", { lightPrimitives, darkPrimitives });
  const semanticLight = fullSemantics.pf.light;
  const spacingKeys = extractTopLevelKeys(spacingFile, "export const spacing =");
  const radiusKeys = extractTopLevelKeys(radiusFile, "export const radius =");
  const typographyKeys = extractTopLevelKeys(typographyFile, "export const typography =");
  const elevationKeys = extractTopLevelKeys(elevationFile, "export const elevation =");
  const motionKeys = extractTopLevelKeys(motionFile, "export const motion =");
  const zIndexKeys = extractTopLevelKeys(zIndexFile, "export const zIndex =");

  const valid = new Set();
  flattenObjectPaths(semanticLight, "theme.color").forEach((p) => valid.add(p));
  spacingKeys.forEach((k) => valid.add(`theme.spacing[${k}]`));
  radiusKeys.forEach((k) => valid.add(`theme.radius.${k}`));
  typographyKeys.forEach((k) => valid.add(`theme.typography.${k}`));
  elevationKeys.forEach((k) => valid.add(`theme.elevation.${k}`));
  motionKeys.forEach((k) => valid.add(`theme.motion.${k}`));
  zIndexKeys.forEach((k) => valid.add(`theme.zIndex.${k}`));

  return valid;
};

const fail = (message, details = []) => {
  console.error(message);
  for (const line of details) console.error(`- ${line}`);
  process.exitCode = 1;
};

const componentMap = readJson(componentMapPath);
const tokenMap = readJson(tokenMapPath);

const walkIndexFiles = (dirPath) => {
  const out = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkIndexFiles(fullPath));
      continue;
    }
    if (entry.name === "index.ts") out.push(fullPath);
  }
  return out;
};

// 1) Validate component export coverage (primitives/components/patterns only)
const exportNames = new Set();
for (const scope of ["primitives", "components", "patterns"]) {
  const scopeRoot = path.join(rnRoot, scope);
  const indexes = walkIndexFiles(scopeRoot);
  for (const indexPath of indexes) {
    for (const name of collectFromIndex(indexPath)) exportNames.add(name);
  }
}

const mappedNames = new Set(componentMap.entries.map((e) => e.nudsExport));
const requiredExports = [...exportNames].filter((name) => !name.endsWith("Props") && !name.endsWith("Variant") && !name.endsWith("Position") && !name.endsWith("Size"));
const missingInMap = requiredExports.filter((name) => !mappedNames.has(name));

if (missingInMap.length > 0) fail("Component mapping is missing exported symbols:", missingInMap.sort());

// 2) Validate usage metadata exists for every entry
const missingUsage = componentMap.entries
  .filter((entry) => !entry.usage || !Array.isArray(entry.usage.requiredProps) || !Array.isArray(entry.usage.fallbackRules))
  .map((entry) => entry.nudsExport);
if (missingUsage.length > 0) fail("Component mapping entries missing required usage metadata:", missingUsage.sort());

// 3) Validate partials have rationale
const partialWithoutReason = componentMap.entries
  .filter((entry) => entry.status === "partial" && !entry.statusReason)
  .map((entry) => entry.nudsExport);
if (partialWithoutReason.length > 0) fail("Partial entries must include statusReason:", partialWithoutReason.sort());

// 4) Validate token theme paths
const validThemePaths = buildValidThemePaths();
const invalidTokenPaths = [];
for (const entry of tokenMap.entries ?? []) {
  for (const themePath of entry.preferredThemePaths ?? []) {
    if (!validThemePaths.has(themePath)) {
      invalidTokenPaths.push(`${entry.figmaVariable} -> ${themePath}`);
    }
  }
}
if (invalidTokenPaths.length > 0) fail("Invalid theme paths found in token mapping:", invalidTokenPaths.sort());

if (process.exitCode && process.exitCode !== 0) process.exit(process.exitCode);

console.log("Figma mapping validation passed.");
