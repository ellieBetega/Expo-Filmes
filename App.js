import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Filmes from './components/Filmes';

import api from './services/api';

export default function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {

    try {

      const response = await api.get('/movie/popular');

      setMovies(response.data.results);

      console.log(response.data.results);

    } catch (error) {

      console.log(error.response?.data);
      console.log(error.message);

    }
  }

  return (

    <View style={styles.container}>

      <Text style={styles.header}>
        Filmes populares
      </Text>

      <Filmes movies={movies} />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },

  header: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },

});