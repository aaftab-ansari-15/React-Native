import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation: any = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <Text>Home</Text>
      <Button
        title="Open Profile"
        onPress={() => navigation.jumpTo('Profile')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
