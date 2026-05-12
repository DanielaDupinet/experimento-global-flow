const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { withStorybook } = require("@storybook/react-native/metro/withStorybook");

const config = getDefaultConfig(__dirname);
const nudsSourceMode = process.env.EXPO_PUBLIC_NUDS_SOURCE_MODE ?? "local";
const isPackageMode = nudsSourceMode === "package";

// Ensure Metro watches workspace packages for live reload
config.watchFolders = [path.resolve(__dirname, "packages")];

// Prefer react-native / source entry so workspace `exports["."].react-native` resolves to src in local mode
config.resolver.resolverMainFields = isPackageMode
  ? ["main", "module"]
  : ["react-native", "source", "main", "module"];

// Resolve workspace packages from monorepo folders (symlinks already exist; this keeps resolution stable)
config.resolver.extraNodeModules = {
  "@nu-design-org/nuds-vibecode-react-native": path.resolve(__dirname, "packages/react-native"),
  "@nu-design-org/nuds-vibecode-tokens": path.resolve(__dirname, "packages/tokens"),
  "@nu-design-org/nuds-vibecode-theme": path.resolve(__dirname, "packages/theme"),
  "@nu-design-org/nuds-vibecode-react-web": path.resolve(__dirname, "packages/react-web"),
};

// Package mode (storybook:package): use compiled dist so behavior matches published consumers
const nudsPackageDirs = {
  "@nu-design-org/nuds-vibecode-react-native": "react-native",
  "@nu-design-org/nuds-vibecode-tokens": "tokens",
  "@nu-design-org/nuds-vibecode-theme": "theme",
  "@nu-design-org/nuds-vibecode-react-web": "react-web",
};

const originalResolveRequest = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (isPackageMode && nudsPackageDirs[moduleName]) {
    const distPath = path.resolve(
      __dirname,
      "packages",
      nudsPackageDirs[moduleName],
      "dist",
      "index.js",
    );
    return { type: "sourceFile", filePath: distPath };
  }

  if (originalResolveRequest) {
    return originalResolveRequest(context, moduleName, platform);
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = withStorybook(config, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
  configPath: ".rnstorybook"
});
