import React, { useState, useEffect } from "react";
import { Platform, SafeAreaView, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import PokemonList from "../Components/PokemonList";
import SearchBar from "../Components/SearchBar";

import { getPokemonsApi, getPokemonDetailApi } from "../Api/Pokemon";

const PokeDex = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchPokemons, setSearchPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState();
  const [searchValue, setSearchValue] = useState("");

  const handleChanege = (event) => {
    setSearchValue(event);
    const filteredPokemons = pokemonData.filter((pokemon) =>
      pokemon.name.includes(searchValue)
    );
    setSearchPokemons(filteredPokemons);
  };

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
      setPokemonData([...pokemonData, ...pokemonsDetail]);

      setNextUrl(pokemons.next);
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
      <SearchBar>
        <View stuyle={styles.SearchInput__container}>
          <TextInput
            name="search"
            value={searchValue}
            onChangeText={(event) => handleChanege(event)}
            placeholder="Search Pokemon"
            autoCapitalize="none"
            right={<TextInput.Icon name="magnify" color="#48CFB2" />}
            style={styles.Search__input}
            mode="flat"
            underlineColor="#48CFB2"
            activeUnderlineColor="#48CFB2"
          />
        </View>
      </SearchBar>
      {searchValue.length > 1 ? (
        <PokemonList pokemons={searchPokemons} />
      ) : (
        <PokemonList
          pokemons={pokemonData}
          loadPokemons={getPokemons}
          isNext={nextUrl}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaAndroid: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 25,
  },
  SearchInput__container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 40,
  },
  Search__input: {
    width: "100%",
    height: 40,
    backgroundColor: "transparent",
  },
});

export default PokeDex;
