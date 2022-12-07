import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react'
import { Image, ImageBackground } from 'react-native';
import { Container, IconStyles, ItensList, TextName } from "./styles";
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';


interface ItensPokemon {
    namePokemon: string;
    imgPokemon: string;

}


export function ListPokemon() {

    const [pokemonNome, setPokemonNome] = useState()
    const [pokemonImg, setPokemonImg] = useState()

    const navigation = useNavigation();




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

    function handlePopTop() {
        navigation.navigate('pokemonSelect');
    }

    return (
        <>
            <ImageBackground
                source={require("../../assets/pokebola.png")}
                style={{ flex: 1, alignItems: 'center' }}
                resizeMode="stretch"
            >
                <IconStyles>

                    <Icon name='arrow-left' size={40} onPress={handlePopTop} />
                </IconStyles>
                <Container>

                    <TextName color="#FFF">
                        Sua Poke Bola
                    </TextName>
                    <Image
                        source={{ uri: `${pokemonImg}` }}
                        style={{ width: 220, height: 220 }}
                    />

                    <TextName color="#000">
                        {pokemonNome}
                    </TextName>

                </Container>

            </ImageBackground>

        </>
    )
}