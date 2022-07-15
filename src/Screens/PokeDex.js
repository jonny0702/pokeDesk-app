import React, { useState, useEffect } from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import PokemonList from "../Components/PokemonList";
import { getPokemonsApi, getPokemonDetailApi } from "../Api/Pokemon";

const PokeDex = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState();

  const getPokemons = async () => {
    try {
      const pokemonsDetail = [];
      const pokemons = await getPokemonsApi(nextUrl);
      for await (const pokemon of pokemons.results) {
        const pokemonDetails = await getPokemonDetailApi(pokemon.url);
        pokemonsDetail.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          types: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setNextUrl(pokemons.next);
      setPokemonData([...pokemonsDetail]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await getPokemons();
    })();
  }, []);
  return (
    <SafeAreaView style={Platform.OS === "ios" ? {} : styles.SafeAreaAndroid}>
      <PokemonList
        pokemons={pokemonData}
        loadPokemons={getPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaAndroid: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 25,
  },
});

export default PokeDex;
