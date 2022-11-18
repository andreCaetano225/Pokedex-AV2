import { Button, Image, ImageBackground } from 'react-native';
import { ButtonSubmit, Container, ContainerFlexSearch, InputSearch } from './styles';
import Icon from 'react-native-vector-icons/AntDesign'


export function PokemonSelect() {
    return (
        <>
            <ImageBackground
                source={require("../../assets/pokebola.png")}
                style={{ flex: 1, alignItems: 'center' }}>
                <Image
                    source={require("../../assets/logo.png")}
                    style={{ marginTop: 82 }}
                />
                <Container>
                    <ContainerFlexSearch>
                        <InputSearch placeholder='Digite um número ou nome' />
                        <ButtonSubmit>
                            <Icon name='search1' size={20} />
                        </ButtonSubmit>
                    </ContainerFlexSearch>

                </Container>
            </ImageBackground>
        </>
    );
}
