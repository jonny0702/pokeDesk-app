import React, { useState, useCallback } from "react";
import { Text, StyleSheet } from "react-native";
import PokemonList from "../Components/PokemonList";
import NotLoged from "../Components/NotLoged";
import useAuth from "../hooks/useAuth";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonFavoritesApi } from "../Api/FavoriteApi";
import { getPokemon } from "../Api/Pokemon";
const Favorites = () => {
  const [likePokemons, setLikePokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonFavoritesApi();
          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetails = await getPokemon(id);
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              types: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }
          setLikePokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return !auth ? <NotLoged /> : <PokemonList pokemons={likePokemons} />;
};

const styles = StyleSheet.create({});

export default Favorites;
