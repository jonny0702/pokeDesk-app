import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { map, capitalize } from "lodash";
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
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginHorizontal: 15,
    borderRadius: 30,
  },
  textType: {
    color: "#ffff",
    fontWeight: "bold",
  },
});

export default Types;
