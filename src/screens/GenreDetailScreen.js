import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';


const GenreDetailScreen = ({ route }) => {
    const { genre } = route.params;
    
    const movies = {
        Ação: [
            { id: '1', title: 'Ação Explosiva', year: '2022' },
            { id: '2', title: 'O Último Guerreiro', year: '2023' },
        ],
        Aventura: [
            { id: '3', title: 'A Viagem Infinita', year: '2021' },
            { id: '4', title: 'Mundo dos Sonhos', year: '2022' },
        ],
        Comédia: [
            { id: '5', title: 'Rindo à Toa', year: '2020' },
            { id: '6', title: 'Uma Comédia Romântica', year: '2021' },
        ],
        Terror: [
            { id: '7', title: 'Noite do Terror', year: '2022' },
            { id: '8', title: 'A Casa Assombrada', year: '2023' },
        ],
        Drama: [
            { id: '9', title: 'Caminhos da Vida', year: '2021' },
            { id: '10', title: 'O Último Suspiro', year: '2022' },
        ],
        Romance: [
            { id: '11', title: 'Amor em Tempos de Guerra', year: '2023' },
            { id: '12', title: 'Corações Entrelaçados', year: '2020' },
        ],
        Musical: [
            { id: '13', title: 'Dança da Vida', year: '2022' },
            { id: '14', title: 'Notas do Coração', year: '2021' },
        ],
    };

    const renderMovieCard = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardYear}>{item.year}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{genre}</Text>
            <Text style={styles.description}>
                 {genre}.
            </Text>
            <FlatList
                data={movies[genre]}
                keyExtractor={item => item.id}
                renderItem={renderMovieCard}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#2c2c2c',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 20,
    },
    description: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 20,
    },
    listContainer: {
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    cardYear: {
        fontSize: 14,
        color: '#ffffff',
    },
});

export default GenreDetailScreen;
