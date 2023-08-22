import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Text pressed");
  };

  return (
    <SafeAreaView style={[styles.container]}>
      {/* <SafeAreaView style={[styles.container, containerStyle]}> */}
      {/* <Text
          numberOfLines={1}
          onPress={() => {
            handlePress();
          }}
        >
          Any typical business process involves a series of steps performed by a
          group of stakeholders to achieve a concrete goal. Well defined business
          processes publish tasks, their interactions, actions required in each
          task and automation where possible to ensure optimum use of resources
          and prevent chaos in everyday operations of the firm. A good business
          process is finite, flexible, and repeatable. Business Process Management
          (BPM) is a methodology to improve the business processes through a
          better process design, modeling, analysis, and execution.
        </Text>
        <StatusBar style="auto" /> */}
      <Text>Hi, Hello React Native</Text>
      {/* <Image source={require("./assets/icon.png")} /> */}
      {/* <TouchableWithoutFeedback
          onPress={() => {
            console.log("Image pressed");
          }}
        >
          <TouchableOpacity> */}
      <TouchableHighlight>
        <Image
          // blurRadius={10}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      {/* </TouchableOpacity>
        </TouchableWithoutFeedback> */}
      <Button
        color="orange"
        title="Click Me"
        onPress={() => {
          console.log("Button pressed");
          // Alert.alert("My title", "My mesaage", [
          //   {
          //     text: "Yes",
          //     onPress: () => {
          //       console.log("Yes");
          //     },
          //   },
          //   {
          //     text: "No",
          //     onPress: () => {
          //       console.log("No");
          //     },
          //   },
          // ]);
          Alert.prompt("My title", "My message", (text) => {
            console.log(text);
          }); // Works only in IOS and not in Android
        }}
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "dodgerblue",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
