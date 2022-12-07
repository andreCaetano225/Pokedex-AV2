import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context";



export const TextWelcome = styled.Text`

    align-items: center;
    margin-top: 40px;
    font-size: 20px;
    color: #fff;
    font-weight: 500;
`;

export const Container = styled(SafeAreaView)`
    align-items: center;

    margin-top: -150px;

`;


export const ContainerFlexSearch = styled(SafeAreaView)`

    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-top: -50px;




`
export const ContainerImg = styled(SafeAreaView)`

    align-items: center;
    justify-content: center;

`;

export const TextPokemon = styled.Text`

    font-size: 18px;
    color: #000;
    margin-top: 170px;


`;



export const ButtonSubmit = styled.View`

    align-items: center;
    justify-content: center;

    background-color: #FFE031;

    width: 40px;
    height: 44px;

    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;

    border: 1px solid #000;
    border-left: 1px solid #FFE031;

`


export const InputSearch = styled.TextInput`

    width: 248px;
    height: 44px;

    background-color: #fff;

    border: 1px;

    
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;


    padding-left: 20px;

`;

