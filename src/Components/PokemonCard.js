import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { capitalize } from "lodash";
import getColorByPokemonType from "../utils/getColorByPokemonType";

const PokemonCard = ({ pokemon }) => {
  const navigation = useNavigation();

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
    // console.log(pokemon.id);
  };

  const pokemonColor = getColorByPokemonType(pokemon.types);

  const bgStyles = {
    backgroundColor: pokemonColor,
    ...styles.bgStyles,
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.Spacing}>
          <View style={bgStyles}>
            <Text style={styles.order}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.Image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  Spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
  },
  Image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
  },
  order: {
    position: "absolute",
    right: 10,
    top: 10,
    fontSize: 11,
    color: "#FFF",
  },
});

export default PokemonCard;
