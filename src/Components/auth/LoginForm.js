import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Model from "../Model";
import useAuth from "../../hooks/useAuth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetial } from "../../utils/userDB";

const LoginForm = () => {
  const [error, setError] = useState(false);

  const { login, userAuth } = useAuth();

  const formik = useFormik({
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    initialValues: initialValues(),
    onSubmit: (formvalue) => {
      const { username, password } = formvalue;

      if (username !== user.username || password !== user.password) {
        console.log("Error Login");
        setError(!error);
      } else {
        login(userDetial);
        setError(false);
      }
    },
  });

  return (
    <View style={styles.Login__container}>
      <View style={styles["Login__title--container"]}>
        <Text style={styles.Login__title}>Log In</Text>
      </View>
      <View style={styles.input__container}>
        <TextInput
          placeholder="username"
          name="user"
          style={styles.Login__inputs}
          autoCapitalize="none"
          value={formik.values.username}
          onChangeText={(text) => formik.setFieldValue("username", text)}
        />
        <TextInput
          placeholder="password"
          name="password"
          style={styles.Login__inputs}
          autoCapitalize="none"
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue("password", text)}
        />
        <TouchableOpacity
          onPress={formik.submitForm}
          style={styles.Button__login}
        >
          <Text style={styles.button__text}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.Login__errors}>{formik.errors.username}</Text>
        <Text style={styles.Login__errors}>{formik.errors.password}</Text>
        {error && (
          <Text style={styles.Login__errors}>
            Your password or username dosent exist
          </Text>
        )}
      </View>
      <Model />
    </View>
  );
};
const initialValues = () => {
  return {
    username: "",
    password: "",
  };
};

const validationSchema = () => {
  return {
    username: Yup.string().required("You need to introduce the user"),
    password: Yup.string().required("You need to intorduce the password"),
  };
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
  Login__errors: {
    color: "#EA1400",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "500",
  },
});

export default LoginForm;
