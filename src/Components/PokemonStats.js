import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { capitalize } from "lodash";

const PokemonStats = ({ stats }) => {
  const barStyles = (statBase) => {
    let color = "";
    if (statBase <= 30) {
      color = "#D31800";
    } else if (statBase > 30 && statBase <= 60) {
      color = "#FFAE15";
    } else if (statBase > 60) {
      color = "#00DD73";
    }
    return {
      backgroundColor: color,
      width: `${statBase}%`,
    };
  };

  return (
    <View style={styles.contentStats}>
      <View style={styles.statsTitle__container}>
        <Text style={styles.statsTitle}>Base Stats</Text>
        <Image
          source={require("../assets/pikachu.png")}
          style={styles.stats__image}
        />
      </View>
      {stats &&
        stats.map((item, index) => (
          <View key={index} style={styles.statContainer__card}>
            <View style={styles.containerTitle}>
              <Text style={styles.statTitle}>{capitalize(item.stat.name)}</Text>
            </View>
            <View style={styles.containerInfo}>
              <Text style={styles.baseStat}>{item.base_stat}</Text>
              <View style={styles.statBar}>
                <View
                  style={[styles.statValueBar, barStyles(item.base_stat)]}
                ></View>
              </View>
            </View>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  contentStats: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 30,
  },
  statsTitle__container: {
    flexDirection: "row",
  },
  statsTitle: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  stats__image: {
    marginLeft: 5,
    width: 30,
    height: 30,
  },
  statContainer__card: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  containerTitle: {
    width: "30%",
  },
  statTitle: {
    fontSize: 12,
    color: "#424242",
  },
  containerInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  baseStat: {
    width: "12%",
    fontSize: 12,
  },
  statBar: {
    backgroundColor: "#dededede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  statValueBar: {
    // width: "100%",
    height: 5,
    borderRadius: 20,
    // backgroundColor: "red",
  },
});

export default PokemonStats;
