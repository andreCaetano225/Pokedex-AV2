import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomePage } from './src/screens/HomePage';
import { PokemonSelect } from './src/screens/PokemonSelect';

export default function App() {
  return (
    <>
      {/* <HomePage /> */}
      <PokemonSelect />

    </>
  );
}

