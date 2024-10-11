import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'; 
import MoviesScreen from './src/screens/MoviesScreen'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true }} // Esconde o cabeçalho
        />
        <Stack.Screen
          name="Movies"
          component={MoviesScreen}
          options={{ title: 'Tipos de Filmes' }} // Título da tela de filmes
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
