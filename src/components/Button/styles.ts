import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'


export const ContainerButton = styled(TouchableOpacity)`

    width: 198px;
    height: 49px;

    background: #FFE031;

    border-radius: 15px;

    align-items: center;
    justify-content: center;

    margin-top: 20px;
`;


export const TitleButton = styled.Text`
    color: #000;
    font-size: 16px;
`;