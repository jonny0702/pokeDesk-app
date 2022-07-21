import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { getPokemonFavoritesApi } from "../../Api/FavoriteApi";
import ItemMenu from "../ItemMenu";
import useAuth from "../../hooks/useAuth";

const UserData = () => {
  const [likesLength, setLikesLength] = useState(0);
  const { auth, logout } = useAuth();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const responseLikes = await getPokemonFavoritesApi();
          setLikesLength(responseLikes.length);
        } catch (error) {
          console.error(error.message);
          setTotal(0);
        }
      })();
    }, [])
  );

  return (
    <View style={styles.userContent}>
      <View style={styles.Title__container}>
        <Text style={styles.Title__text}>Welcome, {auth.username}</Text>
      </View>
      <View styles={styles.data__container}>
        <ItemMenu title="Name" text={auth.firstName} />
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Favorites" text={likesLength + " Pokemons"} />
      </View>
      <TouchableOpacity style={styles.logOut__button} onPress={logout}>
        <Text style={styles.logOut__Text}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  userContent: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  Title__container: {
    marginBottom: 30,
  },
  Title__text: {
    fontWeight: "bold",
    fontSize: 22,
  },
  data__container: {
    marginBottom: 20,
  },
  logOut__button: {
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    padding: 20,
    marginLeft: "28%",
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: "#EA1400",
  },
  logOut__Text: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default UserData;
