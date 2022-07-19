import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { addPokemonToFavoritesApi } from "../Api/FavoriteApi";

const Favorite = ({ pokemonId }) => {
  const addFavorites = async () => {
    await addPokemonToFavoritesApi(pokemonId);
  };

  return (
    <>
      <Icon
        name="heart"
        color="#ffff"
        size={16}
        onPress={addFavorites}
        style={{ margin: 20 }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default Favorite;
