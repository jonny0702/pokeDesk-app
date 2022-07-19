import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";
import { getPokemonFavoritesApi } from "../Api/FavoriteApi";

const Favorites = () => {
  const checkFavorites = async () => {
    const response = await getPokemonFavoritesApi();
    console.log(response);
  };
  return (
    <SafeAreaView>
      <Text>Favorites Screen</Text>
      <Button title="Button" onPress={checkFavorites} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Favorites;
