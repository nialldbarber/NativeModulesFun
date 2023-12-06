import React, { useState } from "react";
import {
  NativeModules,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

const { BatteryLevelModule: AndroidBatteryLevelModule } = NativeModules;

function App() {
  const [batteryLevel, setBatteryLevel] = useState(0);

  async function getBatteryLevel() {
    try {
      const getLevel =
        await AndroidBatteryLevelModule.getCurrentBatteryChargeLevel();
      setBatteryLevel(getLevel);
      console.log(`Battery level is: ${batteryLevel}`);
    } catch (error) {
      console.error(`Failed to get battery level: ${error}`);
    }
  }

  return (
    <SafeAreaView>
      <Text>Battery level is {batteryLevel}</Text>
      <Pressable style={styles.button} onPress={getBatteryLevel}>
        <Text style={styles.buttonText}>Get Level</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
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
