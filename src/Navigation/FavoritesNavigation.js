import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "../Screens/Favorites";

const Stack = createStackNavigator();

const FavoritesNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={Favorites} />
    </Stack.Navigator>
  );
};

export default FavoritesNavigation;
