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
    return response ? JSON.parse(response) : [];
  } catch (error) {
    throw error.message;
  }
};

export const isPokemonFavoriteApi = async (id) => {
  try {
    const responseFavorite = await getPokemonFavoritesApi();
    return includes(responseFavorite, id);
  } catch (error) {
    throw error;
  }
};

export const removePokemonFavoriteApi = async (id) => {
  try {
    const favorite = await getPokemonFavoritesApi();
    const newFavorites = pull(favorite, id);
    await AsyncStorage.setItem(FAVORITES_STORAGE, JSON.stringify(newFavorites));
  } catch (error) {
    throw error;
  }
};
