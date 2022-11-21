import { ContainerButton, TitleButton } from "./styles";

interface ButtonPokedex {
    onPress?: () => void;
    backGroundColor: string;
    marginTop: number;
    textColor: string;
    titleButton: string;

}

export function Button(props: ButtonPokedex) {
    return (
        <ContainerButton
            onPress={props.onPress}
            backgroundColor={props.backGroundColor}
            marginTop={props.marginTop}>
            <TitleButton
                textColor={props.textColor}>
                {props.titleButton}
            </TitleButton>
        </ContainerButton>
    )
}