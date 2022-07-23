import React, { useState, useCallback } from "react";
import {
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import PokemonList from "../Components/PokemonList";
import NotLoged from "../Components/NotLoged";
import useAuth from "../hooks/useAuth";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getPokemonFavoritesApi } from "../Api/FavoriteApi";
import { getPokemon } from "../Api/Pokemon";

const Favorites = () => {
  const [likePokemons, setLikePokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const { auth } = useAuth();
  const navigation = useNavigation();

  const goToPokedex = () => {
    navigation.navigate("Pokedex");
  };

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
          setLoading(true);
        })();
      }
    }, [auth])
  );

  if (!loading && likePokemons.length > 0) {
    return (
      <ActivityIndicator
        size={70}
        color="#FFC300"
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      />
    );
  }
  if (!auth) {
    return <NotLoged />;
  }
  if (likePokemons.length === 0) {
    return (
      <View style={styles.NotLikes__content}>
        <Text style={styles.NotLikes_Message}>
          Let's capture some pokemons!!!
        </Text>
        <TouchableOpacity onPress={goToPokedex}>
          <Image
            source={require("../assets/te-tengo.png")}
            style={styles.NotLikes__image}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <PokemonList pokemons={likePokemons} />
    </>
  );
};

const styles = StyleSheet.create({
  NotLikes__content: {
    flexDirection: "column",
    marginTop: 200,
    alignItems: "center",
  },
  NotLikes_Message: {
    fontSize: 20,
    fontWeight: "bold",
  },
  NotLikes__image: {
    width: 100,
    height: 100,
  },
});

export default Favorites;
