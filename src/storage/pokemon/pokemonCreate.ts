import AsyncStorage from "@react-native-async-storage/async-storage";
import { LISTPOKEMON_COLLECTION } from "../storageConfing";
import { pokemonGetAll } from "./pokemonGetAll";

export async function pokemonCreate(newPokemonSave: string[]) {
    try {

        const storedPokemons = await pokemonGetAll();

        await AsyncStorage.setItem(LISTPOKEMON_COLLECTION, JSON.stringify([...storedPokemons, newPokemonSave]));

    } catch (error) {
        throw error;
    }

}