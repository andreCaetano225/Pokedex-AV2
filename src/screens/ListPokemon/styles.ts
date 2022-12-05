import styled from "styled-components/native";

interface PropsTextName {
    color: string;
}

export const IconStyles = styled.View`

    width: 42px;
    height: 42px;

    margin-right: 340px;
    margin-top: 40px;
`;

export const Container = styled.View`

    flex: 1;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 140px;




`;

export const ItensList = styled.View`

    flex: 1;
    justify-content: center;
    align-items: center;

`;


export const TextName = styled.Text<PropsTextName>`

    font-size: 24px;
    font-weight: 500;
    color: ${props => props.color};

    margin-top: 40px;



`;