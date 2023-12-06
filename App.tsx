import React, { useState } from "react";
import {
  NativeModules,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

const {
  BatteryLevelModule: androidBatteryLevelModule,
  BatteryLevel: iOSBatteryLevelModule,
} = NativeModules;

function App() {
  const [batteryLevel, setBatteryLevel] = useState(0);

  async function getAndroidBatteryLevel() {
    try {
      const getLevel =
        await androidBatteryLevelModule.getCurrentBatteryChargeLevel();
      setBatteryLevel(getLevel);
      console.log(`Battery level is: ${batteryLevel}`);
    } catch (error) {
      console.error(`Failed to get battery level: ${error}`);
    }
  }

  async function getIosBatteryLevel() {
    try {
      const getLevel =
        await iOSBatteryLevelModule.getCurrentBatteryChargeLevel();
      console.log(getLevel);
      setBatteryLevel(getLevel);
    } catch (error) {
      console.error(`Failed to get battery level: ${error}`);
    }
  }

  return (
    <SafeAreaView>
      {Platform.OS === "android" ? (
        <>
          <Text>Battery level is {batteryLevel}</Text>
          <Pressable style={styles.button} onPress={getAndroidBatteryLevel}>
            <Text style={styles.buttonText}>Get Level</Text>
          </Pressable>
        </>
      ) : (
        <>
          <Text>Battery level is {batteryLevel}</Text>
          <Pressable style={styles.button} onPress={getIosBatteryLevel}>
            <Text style={styles.buttonText}>Get Level</Text>
          </Pressable>
        </>
      )}
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
