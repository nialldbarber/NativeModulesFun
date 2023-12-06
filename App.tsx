import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { BottomTabs } from "./src/navigation/bottom-tabs";

function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}

export default App;
