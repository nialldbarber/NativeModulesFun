import { useState } from "react";
import { NativeModules, Platform } from "react-native";
import DeviceInfo from "react-native-device-info";

const {
  BatteryLevelModule: androidBatteryLevelModule,
  BatteryLevel: iOSBatteryLevelModule,
} = NativeModules;

const FALLBACK_BATTERY_LEVEL = 25;

export function useGetBatteryLevel() {
  const [batteryLevel, setBatteryLevel] = useState<null | number>(null);

  async function getAndroidBatteryLevel() {
    try {
      const getLevel =
        await androidBatteryLevelModule.getCurrentBatteryChargeLevel();
      setBatteryLevel(getLevel);
    } catch (error) {
      console.error(`Failed to get battery level: ${error}`);
    }
  }

  // this _only_ works on a real device
  // if it's a simulator, it craps out
  async function getIosBatteryLevel() {
    const isDeviceEmulator = await DeviceInfo.isEmulator();

    if (isDeviceEmulator) {
      setBatteryLevel(FALLBACK_BATTERY_LEVEL);
      return;
    }

    try {
      const getLevel =
        await iOSBatteryLevelModule.getCurrentBatteryChargeLevel();
      setBatteryLevel(getLevel);
    } catch (error) {
      console.error(`Failed to get battery level: ${error}`);
    }
  }

  return {
    batteryLevel,
    getBatteryLevel:
      Platform.OS === "android" ? getAndroidBatteryLevel : getIosBatteryLevel,
  };
}
