import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AcountNavigation from "../Navigation/Acountnavigation";
import PokedexNavigation from "../Navigation/PokedexNavigation";
import FavoritesNavigation from "../Navigation/FavoritesNavigation";
import Icon from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Acount"
        component={AcountNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PokeDex"
        component={PokedexNavigation}
        options={{
          tabBarLaber: "",
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name="favorites"
        component={FavoritesNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const renderPokeball = () => {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{
        top: -15,
        width: 70,
        height: 70,
      }}
    />
  );
};

export default Navigation;
