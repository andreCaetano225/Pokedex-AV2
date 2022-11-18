import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";


export const Container = styled(SafeAreaView)`
    flex: 1;
    color: #fff;
    align-items: center;
    justify-content: center;
`;

export const InputUser = styled.TextInput`
    width: 298px;
    height: 49px;
    background-color: #fff;
    border-radius: 15px;
    padding-left: 10px;
    margin-top: 10px;

`;
