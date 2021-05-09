import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Navigators
import { TabStackNavigator, AuthStackNavigator } from "./navigators";

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabStackNavigator />
    </NavigationContainer>
  );
}
