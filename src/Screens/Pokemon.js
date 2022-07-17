import React, { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet, ActivityIndicator } from "react-native";
import { getPokemon } from "../Api/Pokemon";
import HeaderPokemon from "../Components/HeaderPokemon";
import Types from "../Components/Types";

const Pokemon = ({ navigation, route: { params } }) => {
  const [data, setData] = useState({});
  const [pokemonType, setPokemonType] = useState({});
  const hasTypes = Object.keys(pokemonType).length > 0;

  const getPokemonData = async (id) => {
    try {
      const pokemon = await getPokemon(id);
      setData(pokemon);
      setPokemonType(pokemon.types[0]);
    } catch (error) {
      console.error(error.message);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      await getPokemonData(params.id);
    })();
  }, []);

  if (!data) {
    return <ActivityIndicator size="large" color="#AEAEAE" />;
  }
  return (
    <ScrollView>
      <HeaderPokemon
        name={data.name}
        order={data.order}
        image={data.sprites?.other["official-artwork"]?.front_default}
        pokemonType={hasTypes && pokemonType?.type.name}
      />
      <Types types={data.types} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Pokemon;
