import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChargingStationModal } from "../screens/charging-station-modal";
import { MyEvScreen } from "../screens/my-ev-screen";
import { options } from "./constants";
import type { RootStackParamList } from "./types";

const { Group, Navigator, Screen } =
  createNativeStackNavigator<RootStackParamList>();

export function NativeStack() {
  return (
    <Navigator>
      <Group>
        <Screen name="MyEv" component={MyEvScreen} options={options} />
      </Group>
      <Group screenOptions={{ presentation: "modal" }}>
        <Screen
          name="ChargingStation"
          component={ChargingStationModal}
          options={options}
        />
      </Group>
    </Navigator>
  );
}
