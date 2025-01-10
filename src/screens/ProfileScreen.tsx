import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../type';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
type ProfileScreenParams = {
  Profile: {name: string};
};
const ProfileScreen = () => {
  const route = useRoute<RouteProp<ProfileScreenParams, 'Profile'>>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Profile'>>();

  const {name} = route.params;
  return (
    <View>
      <Text>ProfileScreen {name}</Text>
      <Button
        title="Click me to change name"
        onPress={() => navigation.setParams({name: 'Aaftab'})}
      />
      <Button
        title="Go back with data"
        onPress={() =>
          navigation.navigate('Home', {result: 'Data from profile'})
        }
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
