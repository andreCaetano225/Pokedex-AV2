import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PokemonSelect } from '../screens/PokemonSelect';
import { HomePage } from '../screens/HomePage';

const { Navigator, Screen } = createNativeStackNavigator();


export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="homePage"
                component={HomePage}
            />
            <Screen
                name="pokemonSelect"
                component={PokemonSelect}
            />
        </Navigator>
    )
}