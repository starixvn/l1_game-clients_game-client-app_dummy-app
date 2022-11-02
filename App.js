import { StatusBar } from "expo-status-bar";
import { WebView } from "react-native-webview";

const simulatorURL = "https://gamelobby-simulator.lumigame.com/signin";

export default function App() {
  return (
    <>
      <StatusBar style="auto" hidden={true} />
      <WebView
        source={{ uri: simulatorURL }}
        setSupportMultipleWindows={false}
      />
    </>
  );
}
