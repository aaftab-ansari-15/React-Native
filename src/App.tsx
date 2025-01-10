import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from './screens/AboutScreen';
import {RootStackParamList} from './type';
import {
  Alert,
  Pressable,
  StatusBar,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      {/* <StatusBar hidden={true} /> */}
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {backgroundColor: 'red'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
          headerRight: () => (
            <Pressable
              onPress={() => {
                Alert.alert('Menu pressed');
                console.log('Menu pressed');
              }}
              disabled={false}>
              <Text style={{color: 'white', fontSize: 16}}>Menu</Text>
            </Pressable>
          ),
          contentStyle: {backgroundColor: '#ffa28a'},
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome Home',
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          // options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          // initialParams={{name: 'guest'}}
          // options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
