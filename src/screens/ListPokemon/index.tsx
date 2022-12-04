import { useState, useEffect } from 'react'
import { pokemonGetAll } from "../../storage/pokemon/pokemonGetAll";
import { Container, ItensList, TextName } from "./styles";





export function ListPokemon() {

    const [pokemons, setPokemons] = useState<string[]>([])


    async function fetchPokemons() {
        try {

            const data = await pokemonGetAll();
            setPokemons(data)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        fetchPokemons();
    }, [pokemons])

    return (
        <>
            <Container>
                <ItensList>
                    <TextName>
                        Pikachu
                    </TextName>
                </ItensList>
                <ItensList>
                    <TextName>
                        Pikachu
                    </TextName>
                </ItensList>
                <ItensList>
                    <TextName>
                        Pikachu
                    </TextName>
                </ItensList>
                <ItensList>
                    <TextName>
                        Pikachu
                    </TextName>
                </ItensList>
            </Container>
        </>
    )
}