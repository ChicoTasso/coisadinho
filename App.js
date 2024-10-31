import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import UsersScreen from './screens/UserScreen';
import UserDetail from './screens/UserDetail';
import CreateUser from './screens/UserCreate';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserScreen" component={UsersScreen} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
        <Stack.Screen name='UserCreate' component={CreateUser}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}