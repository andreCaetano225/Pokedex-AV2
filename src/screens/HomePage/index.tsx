import { Button, Image, ImageBackground } from 'react-native';
import { ButtonLink, Container, InputUser, TitleLink } from './styles';


export function HomePage() {
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

                    <InputUser placeholder='Nome de invocador' />

                    <ButtonLink>
                        <TitleLink>
                            Entrar pokédex
                        </TitleLink>
                    </ButtonLink>

                </Container>
            </ImageBackground>
        </>
    );
}
