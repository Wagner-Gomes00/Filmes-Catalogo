import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';

const GenreDetailScreen = ({ route }) => {
    const { genre } = route.params;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
                    params: {
                        api_key: '074fe283b8223b176c01797b23156f64', 
                        language: 'pt-PT',
                        with_genres: getGenreId(genre), 
                    },
                });
                setMovies(response.data.results);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar os filmes:', error);
                setLoading(false);
            }
        };

        fetchMovies();
    }, [genre]);

    
    const getGenreId = (genreName) => {
        const genreMap = {
            Ação: 28,
            Aventura: 12,
            Comédia: 35,
            Terror: 27,
            Drama: 18,
            Romance: 10749,
            Musical: 10402,
        };
        return genreMap[genreName] || '';
    };

    const renderMovieCard = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardYear}>{new Date(item.release_date).getFullYear()}</Text>
            <Text style={styles.cardDescription}>{item.overview}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{genre}</Text>
            {loading ? (
                <ActivityIndicator size="large" color="#007bff" />
            ) : (
                <FlatList
                    data={movies}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderMovieCard}
                    contentContainerStyle={styles.listContainer}
                />
            )}
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
    cardImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 10,
        resizeMode: 'cover',
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
    cardDescription: {
        fontSize: 14,
        color: '#ffffff',
        marginTop: 5,
        textAlign: 'center',
    },
});

export default GenreDetailScreen;
