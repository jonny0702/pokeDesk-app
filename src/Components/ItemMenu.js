import { View, Text, StyleSheet } from "react-native";

const ItemMenu = ({ title, text, isPokemonDetail }) => {
  return (
    <View style={styles.ItemMenu}>
      <Text
        style={{
          ...styles.itemMenu__title,
          width: isPokemonDetail ? 140 : 100,
        }}
      >
        {title}:{" "}
      </Text>
      <Text>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  ItemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#cfcfcf",
  },
  itemMenu__title: {
    fontWeight: "bold",
    paddingRight: 8,
  },
});

export default ItemMenu;
