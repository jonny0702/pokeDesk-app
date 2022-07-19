import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import useAuth from "../../hooks/useAuth";

const UserData = () => {
  const { auth, logout } = useAuth();

  // console.log(auth);

  return (
    <View style={styles.userContent}>
      <View style={styles.Title__container}>
        <Text style={styles.Title__text}>Welcome, {auth.username}</Text>
      </View>
      <View styles={styles.data__container}>
        <ItemMenu title="Name" text={auth.firstName} />
        <ItemMenu title="Username" text={auth.username} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Favorites" text={"0 Pokemons"} />
      </View>
      <TouchableOpacity style={styles.logOut__button} onPress={logout}>
        <Text style={styles.logOut__Text}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const ItemMenu = ({ title, text }) => {
  return (
    <View style={styles.ItemMenu}>
      <Text style={styles.itemMenu__title}>{title}: </Text>
      <Text>{text}</Text>
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
  ItemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#cfcfcf",
  },
  itemMenu__title: {
    width: 120,
    fontWeight: "bold",
    paddingRight: 8,
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
