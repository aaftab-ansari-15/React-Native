import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import PokemonFlatList from './components/PokemonFlatList';
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonFlatList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
