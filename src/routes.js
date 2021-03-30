import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./pages/LoginScreen";
import Home from "./pages/Home";
import CharacterScreen from "./pages/CharacterScreen";
import ComicsScreen from "./pages/ComicsScreen";
const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2c2c2c",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="CharacterScreen"
        component={CharacterScreen}
      />
      <Stack.Screen
        options={{ title: "" }}
        name="ComicsScreen"
        component={ComicsScreen}
      />
    </Stack.Navigator>
  );
}
export default Routes;
