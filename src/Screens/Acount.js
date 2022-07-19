import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import LoginForm from "../Components/auth/LoginForm";
import UserData from "../Components/auth/UserData";
import useAuth from "../hooks/useAuth";

const Acount = () => {
  const { auth } = useAuth();

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
};

const styles = StyleSheet.create({});

export default Acount;
