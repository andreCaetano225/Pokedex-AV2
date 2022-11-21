import { useEffect, useState, useCallback } from 'react';
import { useRoute } from '@react-navigation/native'
import { Image, ImageBackground, Keyboard } from 'react-native';
import { ButtonSubmit, Container, ContainerFlexSearch, ContainerImg, InputSearch, TextPokemon, TextWelcome } from './styles';
import Icon from 'react-native-vector-icons/AntDesign'
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native'
import { api } from '../../services/api';


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
export function PokemonSelect() {
    const [apiResults, setApiResults] = useState<ApiResults>();
    const [valueInputPoke, setvalueInputPoke] = useState('');

    const navigation = useNavigation();

    const route = useRoute();
    const { user } = route.params as RouteParams;

    useEffect(() => {
    }, [valueInputPoke, apiResults])

    function handleNewPokedex() {
        navigation.navigate('ListPokemon')
    }

    const saveNewPokemon = useCallback(() => {
        api.get(`/${valueInputPoke}`).then((res) => setApiResults(res.data)).catch(e => console.log(e))

        Keyboard.dismiss()

    }, [valueInputPoke, apiResults])

    { console.log(apiResults?.sprites?.other?.home?.front_default) }

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
                    Seja bem vindo {user}
                </TextWelcome>
                <ContainerImg>
                    <Image
                        source={{ uri: `${apiResults?.sprites?.other?.home?.front_default}` }}
                        style={{ width: 120, height: 120 }}
                    />
                </ContainerImg>

                <Container>

                    <ContainerFlexSearch>
                        <InputSearch placeholder='Digite um número ou nome' onChangeText={setvalueInputPoke} />
                        <ButtonSubmit>
                            <Icon name='search1' size={20} onPress={saveNewPokemon} />
                        </ButtonSubmit>
                    </ContainerFlexSearch>

                    {/* <Button
                        backGroundColor='#4052D9'
                        marginTop={40}
                        textColor='#FFF'
                        titleButton='Salvar Pokemon'
                        onPress={saveNewPokemon}
                    /> */}
                </Container>
            </ImageBackground>
        </>
    );
}
