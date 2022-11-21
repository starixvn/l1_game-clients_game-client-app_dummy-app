import * as Linking from "expo-linking";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Game from "./DummyGame";

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
  const { queryParams } = Linking.parse(Linking.useURL() ?? "key");

  return (
    <>
      <SafeAreaView style={stylesheet.statusBar} />
      <SafeAreaView style={stylesheet.navigationBar}>
        <View style={stylesheet.container}>
          <StatusBar />
          <Game params={queryParams} />
        </View>
      </SafeAreaView>
    </>
  );
}
