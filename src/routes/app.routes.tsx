import { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PokemonSelect } from '../screens/PokemonSelect';
import { HomePage } from '../screens/HomePage';
import { ListPokemon } from '../screens/ListPokemon';
import AsyncStorage from '@react-native-async-storage/async-storage';


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    const [userName, setUserName] = useState('');
    const [login, setLogin] = useState(true);



    useEffect(() => {



        async function fetchPokemons() {
            try {

                const dataName = await AsyncStorage.getItem('@user');

                const name = dataName ? JSON.parse(dataName) : ''
                setUserName(name)


            } catch (error) {
                console.log(error);
            }
        }


        fetchPokemons();


    }, [userName, login])
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            {userName == '' ? (
                <>
                    <Screen
                        name="homePage"
                        component={HomePage}
                    />
                    <Screen
                        name="pokemonSelect"
                        component={PokemonSelect}
                    />

                    <Screen
                        name="ListPokemon"
                        component={ListPokemon}
                    />

                </>
            ) : (


                <>
                    <Screen
                        name="pokemonSelect"
                        component={PokemonSelect}
                    />
                    <Screen
                        name="ListPokemon"
                        component={ListPokemon}
                    />

                </>
            )}





        </Navigator>
    )
}