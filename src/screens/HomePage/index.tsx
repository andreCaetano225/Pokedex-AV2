import { useState } from 'react'
import { Image, ImageBackground } from 'react-native';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native'
import { Container, InputUser, } from './styles';


export function HomePage() {

    const [user, setUser] = useState('')

    const navigation = useNavigation();

    function handleNewPokedex() {
        navigation.navigate('pokemonSelect', { user })
        setUser('')
    }

    return (
        <>
            <ImageBackground
                source={require("../../assets/backgroundHome.png")}
                style={{ flex: 1 }}>
                <Container>
                    <Image
                        source={require("../../assets/logo.png")}
                        style={{ marginTop: 22 }}
                    />

                    <InputUser
                        placeholder='Nome de treinador'
                        onChangeText={setUser}
                        value={user}
                    />

                    <Button
                        onPress={handleNewPokedex}
                    />

                </Container>
            </ImageBackground>
        </>
    );
}
