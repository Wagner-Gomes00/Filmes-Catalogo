import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';


const GenreDetailScreen = ({ route }) => {
    const { genre } = route.params;
    
    const movies = {
        Ação: [
            { id: '1', title: 'Ação Explosiva', year: '2022', description: 'Um filme cheio de ação e aventuras explosivas.' },
            { id: '2', title: 'O Último Guerreiro', year: '2023', description: 'A história do último guerreiro em uma batalha épica.' },
        ],
        Aventura: [
            { id: '3', title: 'A Viagem Infinita', year: '2021', description: 'Uma viagem épica através de mundos desconhecidos.' },
            { id: '4', title: 'Mundo dos Sonhos', year: '2022', description: 'Explorando um mundo onde os sonhos se tornam realidade.' },
        ],
        Comédia: [
            { id: '5', title: 'Rindo à Toa', year: '2020', description: 'Uma comédia que fará você rir sem parar.' },
            { id: '6', title: 'Uma Comédia Romântica', year: '2021', description: 'Romance e risadas garantidas.' },
        ],
        Terror: [
            { id: '7', title: 'Noite do Terror', year: '2022', description: 'Uma noite que ninguém vai esquecer, cheia de sustos.' },
            { id: '8', title: 'A Casa Assombrada', year: '2023', description: 'O mistério de uma casa assombrada e seus segredos.' },
        ],
        Drama: [
            { id: '9', title: 'Caminhos da Vida', year: '2021', description: 'Uma história tocante sobre as escolhas da vida.' },
            { id: '10', title: 'O Último Suspiro', year: '2022', description: 'Um drama emocionante sobre amor e perda.' },
        ],
        Romance: [
            { id: '11', title: 'Amor em Tempos de Guerra', year: '2023', description: 'Um romance que floresce em meio à guerra.' },
            { id: '12', title: 'Corações Entrelaçados', year: '2020', description: 'Uma história de amor que transcende o tempo.' },
        ],
        Musical: [
            { id: '13', title: 'Dança da Vida', year: '2022', description: 'Uma celebração da vida através da música e dança.' },
            { id: '14', title: 'Notas do Coração', year: '2021', description: 'Uma jornada musical que toca a alma.' },
        ],
    };

    const renderMovieCard = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardYear}>{item.year}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
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
