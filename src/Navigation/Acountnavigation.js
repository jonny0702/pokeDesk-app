import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Acount from "../Screens/Acount";

const Stack = createStackNavigator();

const FavoritesNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Acount" component={Acount} />
    </Stack.Navigator>
  );
};

export default FavoritesNavigation;
