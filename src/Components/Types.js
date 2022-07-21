import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { map, capitalize } from "lodash";
import { POKEMON_TYPE_ICONS } from "../utils/constants";
import getColorByPokemonType from "../utils/getColorByPokemonType";

const Types = ({ types }) => {
  return (
    <View style={styles.contentTypes}>
      {map(types, (item, index) => (
        <View
          key={index}
          style={{
            ...styles.pillContainer,
            backgroundColor: getColorByPokemonType(item.type.name),
          }}
        >
          <Text style={styles.textType}>{capitalize(item.type.name)}</Text>
          <Image
            source={POKEMON_TYPE_ICONS[item.type.name].uri}
            style={styles.image__icon}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  contentTypes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  pillContainer: {
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginHorizontal: 15,
    borderRadius: 30,
  },
  textType: {
    color: "#ffff",
    fontWeight: "bold",
  },
  image__icon: {
    marginLeft: 10,
    width: 22,
    height: 22,
  },
});

export default Types;
