import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

const simulatorURL = "https://gamelobby-simulator.lumigame.com/signin";

const stylesheet = StyleSheet.create({
  statusBar: {
    flex: 0,
    backgroundColor: "#000",
  },
  navigationBar: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <>
      <SafeAreaView style={stylesheet.statusBar} />
      <SafeAreaView style={stylesheet.navigationBar}>
        <View style={stylesheet.container}>
          <StatusBar />
          <WebView
            source={{ uri: simulatorURL }}
            setSupportMultipleWindows={false}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
