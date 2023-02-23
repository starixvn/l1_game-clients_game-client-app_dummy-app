import { Component } from "react";
import { WebView } from "react-native-webview";
import { readAsStringAsync } from "expo-file-system";
import { useAssets } from "expo-asset";

const DUMMY_URI =
  "https://download.cocos.com/DemoTeam/fruit/web-mobile/index.html";

export default class DummyGame extends Component {
  constructor() {
    super();
    this.state = {
      html: "",
      assets: useAssets(require("assets/game/index.html")),
    };
  }

  componentDidMount() {
    if (this.state.assets) {
      readAsStringAsync(this.state.assets[0].localUri).then((data) => {
        this.state.html = data;
      });
    }
  }

  render() {
    return (
      <WebView
        source={{ html: this.state.html }}
        setSupportMultipleWindows={false}
      />
    );
  }
}
