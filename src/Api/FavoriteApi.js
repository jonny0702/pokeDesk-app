import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITES_STORAGE } from "../utils/constants";

export const addPokemonToFavoritesApi = async (id) => {
  try {
    const favorites = await getPokemonFavoritesApi();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITES_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error.message;
  }
};

export const getPokemonFavoritesApi = async () => {
  try {
    const response = await AsyncStorage.getItem(FAVORITES_STORAGE);
    return JSON.parse(response || []);
  } catch (error) {
    throw error.message;
  }
};
