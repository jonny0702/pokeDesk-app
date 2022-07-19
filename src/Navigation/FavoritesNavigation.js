import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "../Screens/Favorites";
import Pokemon from "../Screens/Pokemon";

const Stack = createStackNavigator();

const FavoritesNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={Favorites} />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default FavoritesNavigation;
