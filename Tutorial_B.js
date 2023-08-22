import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  // console.log(Dimensions.get("screen"));
  // console.log(useDimensions());

  const orientation = useDeviceOrientation();
  console.log(orientation);

  return (
    <SafeAreaView style={styles.container}>
      <View
        // style={{ backgroundColor: "dodgerblue", width: "50%", height: 70 }}
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: orientation === "portrait" ? "30%" : "100%",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
