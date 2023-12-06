import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChargeAwayScreen } from "../screens/charge-away-screen";
import { LocationScreen } from "../screens/location-screen";
import { options } from "./constants";
import { NativeStack } from "./native-stack";
import type { RootBottomTabsParamList } from "./types";

const { Navigator, Screen } =
  createBottomTabNavigator<RootBottomTabsParamList>();

export function BottomTabs() {
  return (
    <Navigator>
      <Screen name="Main" component={NativeStack} options={options} />
      <Screen
        name="ChargeAway"
        component={ChargeAwayScreen}
        options={options}
      />
      <Screen name="MyLocation" component={LocationScreen} options={options} />
    </Navigator>
  );
}
