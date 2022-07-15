import React from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = (props) => {
  const { pokemons, loadPokemons, isNext } = props;

  const loadMore = () => {
    loadPokemons();
  };
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      key={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.2}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator size="large" style={styles.spiner} color="#AEAE" />
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  spiner: {
    marginTop: 20,
    marginBottom: 60,
  },
});

export default PokemonList;
