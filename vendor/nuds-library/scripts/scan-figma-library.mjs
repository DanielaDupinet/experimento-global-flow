#!/usr/bin/env node

/**
 * Scans a Figma library file and writes a compact JSON summary used by
 * downstream mapping docs/artifacts.
 *
 * Usage:
 *   FIGMA_API_KEY=... npm run figma:scan
 *   FIGMA_API_KEY=... FIGMA_FILE_KEY=... node scripts/scan-figma-library.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";

const FIGMA_API_KEY = process.env.FIGMA_API_KEY;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY ?? "dqfrs37AQmkZcC1LpaGcLf";
const OUTPUT_PATH =
  process.env.FIGMA_SCAN_OUTPUT ??
  "docs/figma/scan/latest-summary.json";

if (!FIGMA_API_KEY) {
  console.error("Missing FIGMA_API_KEY environment variable.");
  process.exit(1);
}

const headers = {
  "X-Figma-Token": FIGMA_API_KEY
};

async function figmaGet(endpoint) {
  const url = `https://api.figma.com/v1${endpoint}`;
  const res = await fetch(url, { headers });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Figma API ${res.status} on ${endpoint}: ${body}`);
  }
  return res.json();
}

function normalizeName(value) {
  return value
    .toLowerCase()
    .replace(/[↪/_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function countByPrefix(names) {
  const bucket = {};
  for (const name of names) {
    const key = name.split(",")[0].trim();
    bucket[key] = (bucket[key] ?? 0) + 1;
  }
  return Object.entries(bucket)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 50)
    .map(([k, v]) => ({ name: k, count: v }));
}

async function run() {
  const [fileData, componentsData, varsData] = await Promise.all([
    figmaGet(`/files/${FIGMA_FILE_KEY}?depth=2`),
    figmaGet(`/files/${FIGMA_FILE_KEY}/components`),
    figmaGet(`/files/${FIGMA_FILE_KEY}/variables/local`)
  ]);

  const pages = (fileData?.document?.children ?? []).map((page) => ({
    id: page.id,
    name: page.name,
    normalizedName: normalizeName(page.name)
  }));

  const components = componentsData?.meta?.components ?? [];
  const variables = Object.values(varsData?.meta?.variables ?? {});

  const summary = {
    scannedAt: new Date().toISOString(),
    file: {
      key: FIGMA_FILE_KEY,
      name: fileData?.name ?? null,
      lastModified: fileData?.lastModified ?? null
    },
    counts: {
      pages: pages.length,
      publishedComponents: components.length,
      variables: variables.length
    },
    pages,
    topComponentFamilies: countByPrefix(
      components.map((component) => component.name ?? "").filter(Boolean)
    ),
    topVariableFamilies: countByPrefix(
      variables.map((variable) => variable.name ?? "").filter(Boolean)
    )
  };

  const absoluteOutputPath = path.resolve(process.cwd(), OUTPUT_PATH);
  await fs.mkdir(path.dirname(absoluteOutputPath), { recursive: true });
  await fs.writeFile(
    absoluteOutputPath,
    `${JSON.stringify(summary, null, 2)}\n`,
    "utf8"
  );

  console.log(`Wrote Figma summary to ${absoluteOutputPath}`);
  console.log(
    `Pages=${summary.counts.pages}, Components=${summary.counts.publishedComponents}, Variables=${summary.counts.variables}`
  );
}

run().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
