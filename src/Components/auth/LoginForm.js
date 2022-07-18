import React from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginForm = () => {
  return (
    <View style={styles.Login__container}>
      <View style={styles["Login__title--container"]}>
        <Text style={styles.Login__title}>Log In</Text>
      </View>
      <View style={styles.input__container}>
        <TextInput
          placeholder="username"
          style={styles.Login__inputs}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="password"
          style={styles.Login__inputs}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => console.log("Hello")}
          style={styles.Button__login}
        >
          <Text style={styles.button__text}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Login__container: {
    flexDirection: "column",
    alignItems: "center",
  },
  "Login__title--container": {
    marginTop: 50,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  Login__title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  Login__inputs: {
    height: 40,
    width: "100%",
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  input__container: {
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    width: "95%",
  },
  Button__login: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#00DD58",
    width: "40%",
    borderRadius: 8,
  },
  button__text: {
    color: "#ffff",
    fontSize: 20,
  },
});

export default LoginForm;
