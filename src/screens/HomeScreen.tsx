import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
type HomeScreenParams = {
  Home: {result: string};
};
const HomeScreen = () => {
  const route = useRoute<RouteProp<HomeScreenParams, 'Home'>>();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View>
      <Text>Home Screen</Text>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile', {})}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Go to About"
            onPress={() =>
              navigation.navigate('About', {name: 'Aaftab Ansari'})
            }
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text>{route.params?.result}</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  buttonContainer: {
    paddingRight: 5,
  },
});
