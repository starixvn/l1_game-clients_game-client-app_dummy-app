import AsyncStorage from "@react-native-async-storage/async-storage";
import DummyGame from "./DummyGame";

const STORAGE_KEY = "@key";

export default class Game extends DummyGame {
  componentDidMount() {
    this.getFlagFromStorage().then((flag) => {
      if (!!flag) {
        this.setState({ uri: flag });
      }
    });
  }

  async getFlagFromStorage() {
    try {
      return await AsyncStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
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

  setUri(queryParams) {
    const key = queryParams?.uri;
    const uri = decodeURI(key);

    if (key && uri && uri != this.state.uri) {
      this.setFlagToStorage(uri);
      this.setState({ uri });
    }
  }

  render() {
    this.setUri(this.props.params);

    return super.render();
  }
}
