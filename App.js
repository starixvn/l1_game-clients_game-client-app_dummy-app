import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const simulatorURL = "https://gamelobby-simulator.lumigame.com/signin";

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <SafeAreaView style={stylesheet.container}>
      <StatusBar />
      <WebView
        source={{ uri: simulatorURL }}
        setSupportMultipleWindows={false}
      />
    </SafeAreaView>
  );
}
