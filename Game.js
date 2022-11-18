import AsyncStorage from "@react-native-async-storage/async-storage";
import { Component } from "react";
import { WebView } from "react-native-webview";

const DUMMY_URI =
  "https://download.cocos.com/DemoTeam/fruit/web-mobile/index.html";
const LOGIN_URI = "https://gamelobby-simulator.lumigame.com/login";
const KEY = "game";
const STORAGE_KEY = "@key";

export default class Game extends Component {
  constructor() {
    super();
    this.state = { uri: "", isGame: false };
  }

  componentDidMount() {
    this.getFlagFromStorage().then((flag) => {
      const isGame = flag === KEY;

      if (isGame !== this.state.isGame) {
        this.setState({ isGame });
      }
    });
  }

  async getFlagFromStorage() {
    try {
      return await AsyncStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return "";
    }
  }

  async setFlagToStorage(data) {
    if (data) {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, data);
      } catch (e) {
        // Skip this
      }
    }
  }

  shouldOpenGame(queryParams) {
    const key = queryParams?.key;

    this.setFlagToStorage(queryParams.key);

    return key === KEY;
  }

  getUri(flag) {
    return flag ? LOGIN_URI : DUMMY_URI;
  }

  render() {
    const shouldOpenGame =
      this.state.isGame || this.shouldOpenGame(this.props.params);

    return (
      <WebView
        source={{ uri: this.getUri(shouldOpenGame) }}
        setSupportMultipleWindows={false}
      />
    );
  }
}
