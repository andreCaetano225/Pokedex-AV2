import AsyncStorage from "@react-native-async-storage/async-storage";
import { LISTPOKEMON_COLLECTION } from "../storageConfing";


export async function pokemonGetAll() {

    try {
        const storage = await AsyncStorage.getItem(LISTPOKEMON_COLLECTION);

        const pokemons: string[] = storage ? JSON.parse(storage) : []

        return pokemons;
    } catch (error) {
        throw error
    }


}