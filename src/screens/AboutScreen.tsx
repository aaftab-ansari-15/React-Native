import {NativeModules, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useLayoutEffect} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type AboutScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'About'
>;
type AboutScreenParams = {
  About: {name: string};
};
const AboutScreen = () => {
  const route = useRoute<RouteProp<AboutScreenParams, 'About'>>();
  const navigation = useNavigation<AboutScreenNavigationProp>();
  const {name} = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({title: name});
  }, [name, navigation]);
  return (
    <View>
      <Text>AboutScreen</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
