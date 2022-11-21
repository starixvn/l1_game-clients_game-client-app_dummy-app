import { Component } from "react";
import { WebView } from "react-native-webview";

const DUMMY_URI =
  "https://download.cocos.com/DemoTeam/fruit/web-mobile/index.html";

export default class DummyGame extends Component {
  constructor() {
    super();
    this.state = { uri: DUMMY_URI };
  }

  render() {
    return (
      <WebView
        source={{ uri: this.state.uri }}
        setSupportMultipleWindows={false}
      />
    );
  }
}
