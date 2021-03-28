import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./pages/LoginScreen";
import Home from "./pages/Home";

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Character" component={CharacterScreen} /> */}
    </Stack.Navigator>
  );
}
export default Routes;
