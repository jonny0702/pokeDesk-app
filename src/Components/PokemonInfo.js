import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import ItemMenu from "./ItemMenu";

const PokemonInfo = ({ experience, weight, pokemonHeight }) => {
  const hectogramKilogramConverter = (weight) => {
    const kilogram = weight / 10;
    return kilogram;
  };

  const decimeterMetersConverter = (dm) => {
    const meter = dm / 10;
    return meter;
  };

  return (
    <View style={styles.PokemonInfo__container}>
      <View style={styles["PokemonInfo__container--title"]}>
        <Text style={styles.PokemonInfo__title}>Pokemon Info</Text>
        <Image
          source={require("../assets/puntero.png")}
          style={styles.PokemonInfo__image}
        />
      </View>
      <View style={styles["PokemonInfo__info--container"]}>
        <ItemMenu
          isPokemonDetail
          title="Base Experience 📈"
          text={`${experience} xp`}
        />
        <ItemMenu
          isPokemonDetail
          title="Weight ⚖️"
          text={`${hectogramKilogramConverter(weight)} kg`}
        />
        <ItemMenu
          isPokemonDetail
          title="Height 📊"
          text={`${decimeterMetersConverter(pokemonHeight)} m`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  PokemonInfo__container: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  "PokemonInfo__container--title": {
    flexDirection: "row",
  },
  PokemonInfo__title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  PokemonInfo__image: {
    marginLeft: 5,
    width: 30,
    height: 30,
  },
});

export default PokemonInfo;
