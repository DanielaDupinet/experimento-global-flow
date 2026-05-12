const path = require("path");

module.exports = function (api) {
  api.cache(true);

  // Point Babel at this folder's `node_modules` so the worklets plugin always
  // resolves (avoids MODULE_NOT_FOUND when the preset looks from the wrong cwd).
  const workletsPlugin = require.resolve("react-native-worklets/plugin", {
    paths: [path.join(__dirname)],
  });

  return {
    presets: [
      [
        "babel-preset-expo",
        {
          worklets: false,
          reanimated: false,
        },
      ],
    ],
    plugins: [workletsPlugin],
  };
};
