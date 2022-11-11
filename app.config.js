const packageJson = require("./package.json");

module.exports = {
  expo: {
    name: packageJson.name,
    slug: packageJson.name,
    version: packageJson.version,
    owner: "luminet",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: packageJson.bundleIdentifier,
      buildNumber: packageJson.buildNumber,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      package: packageJson.bundleIdentifier,
    },
    extra: {
      eas: {
        projectId: "f8e39713-b552-46bc-bc31-34ceba9bf6e0",
      },
    },
  },
};
