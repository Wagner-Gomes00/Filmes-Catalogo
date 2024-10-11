import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const MoviesScreen = () => {
    const movieGenres = [
        { id: '1', genre: 'Ação' },
        { id: '2', genre: 'Aventura' },
        { id: '3', genre: 'Comédia' },
        { id: '4', genre: 'Terror' },
        { id: '5', genre: 'Drama' },
        { id: '6', genre: 'Romance' },
        { id: '7', genre: 'Musical' },
    ];

    const handlePress = (genre) => {
        
        alert(`Você selecionou o gênero: ${genre}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tipos de Filmes</Text>
            <FlatList
                data={movieGenres}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item.genre)}>
                        <Text style={styles.genreTitle}>{item.genre}</Text>
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000', 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 20,
    },
    genreTitle: {
        fontSize: 18,
        color: '#ffffff',
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#007bff', 
        borderRadius: 8,
    },
    listContainer: {
        paddingBottom: 20, 
    },
});

export default MoviesScreen;
