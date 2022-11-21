import { useRoute } from '@react-navigation/native'
import { Image, ImageBackground } from 'react-native';
import { ButtonSubmit, Container, ContainerFlexSearch, InputSearch, TextWelcome } from './styles';
import Icon from 'react-native-vector-icons/AntDesign'
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native'


interface RouteParams {
    user: string;
}

export function PokemonSelect() {


    const navigation = useNavigation();

    const route = useRoute();
    const { user } = route.params as RouteParams;

    function handleNewPokedex() {
        navigation.navigate('ListPokemon')
    }

    return (
        <>
            <ImageBackground
                source={require("../../assets/pokebola.png")}
                style={{ flex: 1, alignItems: 'center' }}>
                <Image
                    source={require("../../assets/logo.png")}
                    style={{ marginTop: 82 }}
                />
                <TextWelcome>
                    Seja bem vindo {user}
                </TextWelcome>
                <Container>
                    <ContainerFlexSearch>
                        <InputSearch placeholder='Digite um número ou nome' />
                        <ButtonSubmit>
                            <Icon name='search1' size={20} />
                        </ButtonSubmit>
                    </ContainerFlexSearch>
                    <Button
                        backGroundColor='#4052D9'
                        marginTop={40}
                        textColor='#FFF'
                        titleButton='Salvar Pokemon'
                        onPress={handleNewPokedex}
                    />
                </Container>
            </ImageBackground>
        </>
    );
}
