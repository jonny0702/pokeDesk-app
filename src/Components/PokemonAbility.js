import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PokemonAbility = ({ abilities }) => {
  const colorsAbility = {
    hiddenAbility: "#919191",
    normalAbility: "#FFC300",
  };

  // console.log(abilities?.map((ability) => ability));
  return (
    <View style={styles.AbilitiesSection__container}>
      <Text style={styles.Abilities__title}>Pokemon Abilities</Text>
      <View style={{ flexDirection: "row" }}>
        {abilities?.map((item, index) => (
          <View
            key={index}
            style={{
              ...styles["Ability__card--container"],
              backgroundColor: item.is_hidden
                ? colorsAbility.hiddenAbility
                : colorsAbility.normalAbility,
            }}
          >
            <Text style={styles.Ability__title}>{item.ability.name}</Text>
            <View style={styles.Icon__container}>
              {item.is_hidden ? (
                <Image
                  style={styles.Image__Ability}
                  source={require("../assets/ultra-bola.png")}
                />
              ) : (
                <Image
                  style={styles.Image__Ability}
                  source={require("../assets/insignias.png")}
                />
              )}
            </View>
            <Text style={styles.Ability__slot}>Slot: {item.slot}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AbilitiesSection__container: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  Abilities__title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 20,
  },
  "Ability__card--container": {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: 120,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  Ability__title: {
    fontWeight: "bold",
    color: "#ffff",
  },
  Image__Ability: {
    width: 40,
    height: 40,
  },
  Ability__slot: {
    color: "#ffff",
    fontWeight: "bold",
  },
});

export default PokemonAbility;
