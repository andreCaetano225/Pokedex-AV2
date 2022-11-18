import { ContainerButton, TitleButton } from "./styles";

interface ButtonPokedex {
    onPress: () => void;
}

export function Button(props: ButtonPokedex) {
    return (
        <ContainerButton onPress={props.onPress}>
            <TitleButton>
                Entrar pokédex
            </TitleButton>
        </ContainerButton>
    )
}