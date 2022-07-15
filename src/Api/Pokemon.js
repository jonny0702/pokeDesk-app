import { API_HOST } from "../utils/constants";

export const getPokemonsApi = async (endPointURl) => {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(endPointURl || url);
    const data = await response.json();
    console.log(endPointURl);
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
