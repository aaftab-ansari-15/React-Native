import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import pokrmonData from '../data/pokemonData.json';
const imageMap: any = {
  Charmander: require('../../assets/charmander.png'),
  Squirtle: require('../../assets/squirtle.png'),
  Bulbasaur: require('../../assets/bulbasaur.png'),
  Pikachu: require('../../assets/pikachu.png'),
};
const getTypeDetails = (type: any) => {
  switch (type.toLowerCase()) {
    case 'electric':
      return {borderColor: '#FFD700', emoji: '⚡️'};
    case 'water':
      return {borderColor: '#6493EA', emoji: '💧'};
    case 'fire':
      return {borderColor: '#FF5733', emoji: '🔥'};
    case 'grass':
      return {borderColor: '#66CC66', emoji: '🌿'};
    default:
      return {borderColor: '#A0A0A0', emoji: '❓'};
  }
};
const PokemonCard = () => {
  return pokrmonData.map((pokemon, index) => {
    const {borderColor, emoji} = getTypeDetails(pokemon.type);

    return (
      <View style={styles.card} key={index}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{pokemon.name}</Text>
          <Text style={styles.hp}>❤️{pokemon.hp}</Text>
        </View>
        <View>
          <Image
            source={imageMap[pokemon.image]}
            accessibilityLabel={`${pokemon.name} pokemon`}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.typeContainer}>
          <View style={[styles.badge, {borderColor}]}>
            <Text style={styles.typeEmoji}>{emoji}</Text>
            <Text style={styles.typeText}>{pokemon.type}</Text>
          </View>
        </View>

        <View style={styles.movesContainer}>
          <Text style={styles.movesText}>
            Moves: {pokemon.moves.join(', ')}
          </Text>
        </View>

        <View style={styles.weaknessContainer}>
          <Text style={styles.weaknessText}>
            Weakness: {pokemon.weaknesses.join(', ')}
          </Text>
        </View>
      </View>
    );
  });
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    elevation: 8,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  name: {
    fontSize: 32,
  },
  hp: {
    fontSize: 22,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  movesContainer: {
    marginBottom: 12,
  },
  movesText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
