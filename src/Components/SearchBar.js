import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
const SearchBar = ({ children }) => {
  return <View style={styles.SearchBar__container}>{children}</View>;
};

const styles = StyleSheet.create({
  SearchBar__container: {
    marginVertical: 10,
    marginTop: 25,
    marginHorizontal: 5,
  },
});

export default SearchBar;
