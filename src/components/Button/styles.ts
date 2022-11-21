import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'

interface ButtonPropsColor {
    backgroundColor: string;
    marginTop: number;

}

interface ColorTextButton {
    textColor: string;
}


export const ContainerButton = styled(TouchableOpacity) <ButtonPropsColor>`

    width: 198px;
    height: 49px;

    background:  ${(props) => props.backgroundColor};

    border-radius: 15px;

    align-items: center;
    justify-content: center;

    margin-top: ${(props) => props.marginTop}px;

`;


export const TitleButton = styled.Text<ColorTextButton>`
    font-size: 16px;
    color: ${(props) => props.textColor};

`;