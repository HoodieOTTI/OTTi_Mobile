import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: "https://otti.vercel.app/" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//빌드 명령어
// eas build -p android --profile preview
