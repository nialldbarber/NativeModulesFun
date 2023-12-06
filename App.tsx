import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useGetBatteryLevel } from "./src/hooks/useGetBatteryLevel";

function App() {
  const { batteryLevel, getBatteryLevel } = useGetBatteryLevel();

  return (
    <View style={styles.container}>
      <Text>Battery level is {batteryLevel}</Text>
      <Pressable style={styles.button} onPress={getBatteryLevel}>
        <Text style={styles.buttonText}>Get Level</Text>
      </Pressable>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#61C15C",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
