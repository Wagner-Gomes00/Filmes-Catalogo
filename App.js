import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import MoviesScreen from './src/screens/MoviesScreen';
import GenreDetailScreen from './src/screens/GenreDetailScreen'; // Importa a nova tela

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Movies"
          component={MoviesScreen}
          options={{ title: 'Tipos de Filmes' }}
        />
        <Stack.Screen
          name="GenreDetail"
          component={GenreDetailScreen}
          options={{ title: 'Detalhes do Gênero' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
