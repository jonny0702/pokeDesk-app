import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PokeDex from "../Screens/PokeDex";
import Pokemon from "../Screens/Pokemon";

const Stack = createStackNavigator();

const FavoritesNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokeDex}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
};

export default FavoritesNavigation;
