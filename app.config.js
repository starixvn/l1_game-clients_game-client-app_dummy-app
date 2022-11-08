const packageJson = require("./package.json");

const bundleIdentifier = "com.conall.nguyen.dummyapp88";

module.exports = {
  expo: {
    name: packageJson.name,
    slug: packageJson.name,
    version: packageJson.version,
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
      bundleIdentifier: bundleIdentifier,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      package: bundleIdentifier,
    },
    extra: {
      eas: {
        projectId: "96ed3bff-1e9a-4ad1-9d1e-d7419c0949ef",
      },
    },
  },
};
