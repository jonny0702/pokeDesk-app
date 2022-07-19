import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Like from "react-native-vector-icons/FontAwesome";
import {
  addPokemonToFavoritesApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from "../Api/FavoriteApi";

const Favorite = ({ pokemonId }) => {
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [like, setLike] = useState(false);

  const addFavorites = async () => {
    try {
      await addPokemonToFavoritesApi(pokemonId);
      toogleLikeButton();
    } catch (error) {
      console.error(error);
    }
  };
  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(pokemonId);
      toogleLikeButton();
    } catch (error) {
      console.error(error);
    }
  };

  const toogleLikeButton = () => {
    setLike(!like);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(pokemonId);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
        console.log(error);
      }
    })();
  }, [pokemonId, like]);

  console.log(like);

  return (
    <>
      {!isFavorite ? (
        <Icon
          name="heart"
          color="#ffff"
          size={17}
          onPress={addFavorites}
          style={{ margin: 20 }}
        />
      ) : (
        <Like
          name="heart"
          color="#FFFF"
          size={17}
          onPress={removeFavorite}
          style={{ margin: 20 }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default Favorite;
