import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MoviesScreen = () => {
    const navigation = useNavigation();
    const movieGenres = [
        { id: '1', genre: 'Ação', image: require('../../assets/images/acao.jpg') },
        { id: '2', genre: 'Aventura', image: require('../../assets/images/aventura.jpg') },
        { id: '3', genre: 'Comédia', image: require('../../assets/images/comedia.jpg') },
        { id: '4', genre: 'Terror', image: require('../../assets/images/terro.jpg') },
        { id: '5', genre: 'Drama', image: require('../../assets/images/drama.jpg') },
        { id: '6', genre: 'Romance', image: require('../../assets/images/romance.jpg') },
        { id: '7', genre: 'Musical', image: require('../../assets/images/musical.jpg') },
    ];

    const handlePress = (genre) => {
        navigation.navigate('GenreDetail', { genre });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tipos de Filmes</Text>
            <FlatList
                data={movieGenres}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item.genre)} style={styles.genreContainer}>
                        <Image source={item.image} style={styles.genreImage} />
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
    genreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 8,
    },
    genreImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginRight: 10,
    },
    genreTitle: {
        fontSize: 18,
        color: '#ffffff',
    },
    listContainer: {
        paddingBottom: 20,
    },
});

export default MoviesScreen;
