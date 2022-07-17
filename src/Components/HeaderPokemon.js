import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { capitalize } from "lodash";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import { SafeAreaView } from "react-native-safe-area-context";

const HeaderPokemon = ({ name, order, image, pokemonType }) => {
  const color = getColorByPokemonType(pokemonType);
  const backgroundStyle = [{ backgroundColor: color, ...styles.bgStyles }];

  return (
    <>
      <View style={backgroundStyle && backgroundStyle}></View>
      <SafeAreaView style={styles.contentPokemonHeader}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.nameTitle}>{capitalize(name)}</Text>
          <Text style={styles.numberPokemon}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.ContentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  bgStyles: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  contentPokemonHeader: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  headerTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  nameTitle: {
    color: "#ffff",
    fontSize: 27,
    fontWeight: "bold",
  },
  numberPokemon: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 15,
  },
  ContentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 10,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
});

export default HeaderPokemon;
