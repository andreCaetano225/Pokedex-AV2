import { useEffect, useState, useCallback } from 'react';
import { useRoute } from '@react-navigation/native'
import { Image, ImageBackground, Keyboard, KeyboardAvoidingView } from 'react-native';
import { ButtonSubmit, Container, ContainerFlexSearch, ContainerImg, InputSearch, TextPokemon, TextWelcome } from './styles';
import Icon from 'react-native-vector-icons/AntDesign'
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native'
import { api } from '../../services/api';
import { pokemonCreate } from '../../storage/pokemon/pokemonCreate';
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

    const [pokemonSaveName, setPokemonSaveName] = useState<string>('');
    const [pokemonSaveImg, setPokemonSaveImg] = useState<string>('');

    const [pressInput, setPressInput] = useState(false)
    const [buttonSave, setButtonSave] = useState(false)


    const navigation = useNavigation();

    const route = useRoute();
    const { user } = route.params as RouteParams;

    useEffect(() => {

        if (valueInputPoke == '') {

        } else[
            api.get(`/${valueInputPoke.toLowerCase()}`).then((res) => setApiResults(res.data)).catch(e => console.log(e))
        ]

        setPokemonSaveName(`${apiResults?.name?.toUpperCase()}`)
        setPokemonSaveImg(`${apiResults?.sprites?.other?.home?.front_default}`)
    }, [apiResults, pressInput])



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
                                Seja bem vindo {user}
                            </TextWelcome>
                        )}
                </TextWelcome>
                <ContainerImg>
                    {pressInput ? (null) : (
                        <Image
                            source={{ uri: `${apiResults?.sprites?.other?.home?.front_default}` }}
                            style={{ width: 120, height: 120 }}
                        />)}

                </ContainerImg>

                <Container>
                    <TextPokemon>
                        {pressInput ? (null) : apiResults?.name.toUpperCase()}
                    </TextPokemon>
                    <ContainerFlexSearch>
                        <InputSearch placeholder='Digite um número ou nome' onChangeText={setvalueInputPoke} onPressIn={resetInput} />
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
                                titleButton='Salvar Pokemon'
                                onPress={handleNewPokedex}
                            />
                        )
                        :
                        (null)}
                </Container>


            </ImageBackground>

        </>
    );
}
