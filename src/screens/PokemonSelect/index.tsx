import { useEffect, useState, useCallback } from 'react';
import { useRoute } from '@react-navigation/native'
import { Image, ImageBackground, Keyboard, KeyboardAvoidingView, Text, TouchableOpacity } from 'react-native';
import { ButtonSubmit, Container, ContainerFlexSearch, ContainerImg, InputSearch, TextPokemon, TextWelcome } from './styles';
import Icon from 'react-native-vector-icons/AntDesign'
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native'
import { api } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface RouteParams {
    user: string;
}

interface ApiResults {
    name: string;
    sprites: {
        other: {
            home: {
                front_default: string;
            }
        }
    }
}

interface ItensPokemon {
    namePokemon: string;
    imgPokemon: string;

}


export function PokemonSelect() {
    const [apiResults, setApiResults] = useState<ApiResults>();
    const [valueInputPoke, setvalueInputPoke] = useState('');
    const [userName, setUserName] = useState('');

    const [pokemonSaveName, setPokemonSaveName] = useState<string>('');
    const [pokemonSaveImg, setPokemonSaveImg] = useState<string>('');

    const [pressInput, setPressInput] = useState(false)
    const [buttonSave, setButtonSave] = useState(false)


    const navigation = useNavigation();

    // const route = useRoute();
    // const { user } = route.params as RouteParams;


    async function fetchPokemons() {
        try {

            const dataName = await AsyncStorage.getItem('@user');

            const name = dataName ? JSON.parse(dataName) : ''
            setUserName(name)



        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        if (valueInputPoke == '') {

        } else[
            api.get(`/${valueInputPoke.toLowerCase()}`).then((res) => setApiResults(res.data)).catch(e => console.log(e))
        ]

        setPokemonSaveName(`${apiResults?.name?.toUpperCase()}`)
        setPokemonSaveImg(`${apiResults?.sprites?.other?.home?.front_default}`)

        fetchPokemons();
    }, [apiResults, pressInput, valueInputPoke, userName])



    const handleSearchPokemon = useCallback(() => {

        setPressInput(false)
        if (valueInputPoke == '') {
            alert('Digite um número ou nome por favor!!')
            Keyboard.dismiss()
        } else {
            Keyboard.dismiss()
            setButtonSave(true)

        }


    }, [valueInputPoke, apiResults, buttonSave])

    async function handleNewPokedex() {

        try {
            await AsyncStorage.setItem('pokemon-name', JSON.stringify(pokemonSaveName))
            await AsyncStorage.setItem('pokemon-img', JSON.stringify(pokemonSaveImg))

        } catch (error) {
            console.log(error)
        }

        navigation.navigate('ListPokemon')

        setvalueInputPoke('')
        setButtonSave(false)
    }

    // async function handleLogOut() {
    //     await AsyncStorage.removeItem('@user');
    //     await AsyncStorage.removeItem('pokemon-name');
    //     await AsyncStorage.removeItem('pokemon-img');
    // }

    function handleLinkPokeBola() {
        navigation.navigate('ListPokemon')
    }

    const resetInput = useCallback(() => {
        setPressInput(true)
    }, [pressInput])


    return (
        <>

            <ImageBackground
                source={require("../../assets/pokebola.png")}
                style={{ flex: 1, alignItems: 'center' }}
                resizeMode="stretch"
            >
                <Image
                    source={require("../../assets/logo.png")}
                    style={{ marginTop: 82 }}
                />
                <TextWelcome>
                    {pressInput ?
                        (null) :
                        (
                            <TextWelcome>
                                Seja bem vindo {userName}
                            </TextWelcome>
                        )}
                </TextWelcome>
                <ContainerImg>
                    {pressInput ? (null) : (
                        <Image
                            source={{ uri: valueInputPoke == '' ? undefined : `${apiResults?.sprites?.other?.home?.front_default}` }}
                            style={{ width: 120, height: 120 }}
                        />)}

                </ContainerImg>

                <Container>
                    <TextPokemon>
                        {pressInput ? (null) : valueInputPoke == '' ? ('') : apiResults?.name.toUpperCase()}
                    </TextPokemon>
                    <ContainerFlexSearch>
                        <InputSearch placeholder='Digite um número ou nome' onChangeText={setvalueInputPoke} onPressIn={resetInput} value={valueInputPoke} />
                        <ButtonSubmit>
                            <Icon name='search1' size={20} onPress={handleSearchPokemon} />
                        </ButtonSubmit>
                    </ContainerFlexSearch>


                    {buttonSave ?
                        (
                            <Button
                                backGroundColor='#4052D9'
                                marginTop={30}
                                textColor='#FFF'
                                titleButton='Capturar Pokemon'
                                onPress={handleNewPokedex}
                            />
                        )
                        :
                        (<Button
                            backGroundColor='#4052D9'
                            marginTop={30}
                            textColor='#FFF'
                            titleButton='Visitar PokeBola'
                            onPress={handleLinkPokeBola}
                        />)}


                </Container>


            </ImageBackground>

        </>
    );
}
