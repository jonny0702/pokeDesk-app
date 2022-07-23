import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Model from "./Model";

const NotLoged = () => {
  const navigation = useNavigation();
  const goToLoginScreen = () => {
    navigation.navigate("Acount");
  };

  return (
    <View style={styles.contentNotLoged}>
      <Text style={styles.textMessage}>
        To see this screen you need to Log In
      </Text>
      <TouchableOpacity
        style={styles.goToLoginButton}
        onPress={goToLoginScreen}
        type="button"
      >
        <Text style={styles.goToLoginButton__Text}>Go to Login screen</Text>
      </TouchableOpacity>
      <Model isFavoritesScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  contentNotLoged: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  textMessage: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  goToLoginButton: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#00DD58",
  },
  goToLoginButton__Text: {
    color: "#fff",
    fontSize: 20,
  },
});

export default NotLoged;
