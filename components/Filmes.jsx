import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

export default function Filmes({ movies }) {

  return (

    <FlatList
      data={movies}

      keyExtractor={(item) => item.id.toString()}

      renderItem={({ item }) => (

        <View style={styles.card}>

          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`
            }}

            style={styles.image}
          />

          <Text style={styles.title}>
            {item.title}
          </Text>

          <Text>
            {item.vote_average}
          </Text>

          <Text>
            {item.release_date}
          </Text>

        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({

  card: {
    alignItems: 'center',
    marginBottom: 30,
  },

  image: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },

  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});