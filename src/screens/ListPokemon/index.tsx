import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react'
import { Image } from 'react-native';
import { pokemonGetAll } from "../../storage/pokemon/pokemonGetAll";
import { Container, ItensList, TextName } from "./styles";


interface ItensPokemon {
    namePokemon: string;
    imgPokemon: string;

}


export function ListPokemon() {

    const [pokemonNome, setPokemonNome] = useState()
    const [pokemonImg, setPokemonImg] = useState()




    async function fetchPokemons() {
        try {

            const dataName = await AsyncStorage.getItem('pokemon-name');

            const name = dataName ? JSON.parse(dataName) : []
            setPokemonNome(name)

            const dataImg = await AsyncStorage.getItem('pokemon-img');

            const img = dataImg ? JSON.parse(dataImg) : []
            setPokemonImg(img)


        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPokemons()

    }, [pokemonNome, pokemonImg])

    return (
        <>
            <Container>

                <ItensList>
                    <Image
                        source={{ uri: `${pokemonImg}` }}
                        style={{ width: 120, height: 120 }}
                    />
                    <TextName>
                        {pokemonNome}
                    </TextName>
                </ItensList>
            </Container>
        </>
    )
}