import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import LoginForm from "../Components/auth/LoginForm";

const Acount = () => {
  const auth = null;

  return <View>{auth ? <Text>Panel del usuario</Text> : <LoginForm />}</View>;
};

const styles = StyleSheet.create({});

export default Acount;
