import * as Linking from "expo-linking";
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from "react-native";
import { WebView } from "react-native-webview";

const simulatorURL = "https://gamelobby-simulator.lumigame.com/login";

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
  const url = Linking.useURL();
  let text = "";

  if (url) {
    const data = Linking.parse(url);

    text = JSON.stringify(data);
  }

  return (
    <>
      <SafeAreaView style={stylesheet.statusBar} />
      <SafeAreaView style={stylesheet.navigationBar}>
        <View style={stylesheet.container}>
          <StatusBar />
          <Text>{data}</Text>
          <WebView
            source={{ uri: simulatorURL }}
            setSupportMultipleWindows={false}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
