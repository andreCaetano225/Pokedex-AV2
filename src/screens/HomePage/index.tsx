import { useState, useEffect } from 'react'
import { Image, ImageBackground } from 'react-native';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native'
import { Container, InputUser, } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';



export function HomePage() {

    const [user, setUser] = useState('')

    const navigation = useNavigation();

    async function handleNewPokedex() {
        if (user == '') {
            alert('Por favor insira o nome de treinador ')
        } else {
            navigation.navigate('pokemonSelect')

            await AsyncStorage.setItem('@user', JSON.stringify(user))
            setUser('')
        }

    }

    useEffect(() => {

    }, [user])


    return (
        <>
            <ImageBackground
                source={require("../../assets/backgroundHome.png")}
                style={{ flex: 1 }}
                resizeMode="stretch"
            >
                <Container>
                    <Image
                        source={require("../../assets/logo.png")}
                        style={{ marginTop: 22 }}
                        resizeMode="stretch"
                    />

                    <InputUser
                        placeholder='Nome de treinador'
                        onChangeText={setUser}
                        value={user}

                    />

                    <Button
                        onPress={handleNewPokedex}
                        backGroundColor='#FFE031'
                        marginTop={20}
                        textColor='#000'
                        titleButton='Entrar na pokédex'
                    />

                </Container>
            </ImageBackground>
        </>
    );
}
