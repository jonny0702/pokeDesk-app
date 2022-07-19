import React, { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet, ActivityIndicator } from "react-native";
import { getPokemon } from "../Api/Pokemon";
import useAuth from "../hooks/useAuth";
import HeaderPokemon from "../Components/HeaderPokemon";
import Types from "../Components/Types";
import PokemonStats from "../Components/PokemonStats";
import Favorite from "../Components/Favorite";
import Icon from "react-native-vector-icons/FontAwesome5";

const Pokemon = ({ navigation, route: { params } }) => {
  const [data, setData] = useState({});
  const [pokemonType, setPokemonType] = useState({});
  const { auth } = useAuth();

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
  // console.log(data.id);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite pokemonId={data?.id} />,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#ffff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, data]);

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
      <PokemonStats stats={data.stats} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Pokemon;
