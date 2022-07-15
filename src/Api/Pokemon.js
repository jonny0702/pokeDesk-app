import { API_HOST } from "../utils/constants";

export const getPokemonsApi = async () => {
  try {
    const response = await fetch(`${API_HOST}/pokemon?limit=20&offset=0`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error.message;
  }
};

export const getPokemonDetailApi = async (url) => {
  try {
    const res = await fetch(`${url}`);
    const pokemon = await res.json();
    return pokemon;
  } catch (error) {
    throw error.message;
  }
};
