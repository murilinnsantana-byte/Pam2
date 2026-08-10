import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import TesteScreen from '../screens/TesteScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: '#111111' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: '900', fontStyle: 'italic' },
        contentStyle: { backgroundColor: '#111111' }
      }}
    >
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'NIKE STORE' }} 
      />
      <Stack.Screen 
        name="Teste" 
        component={TesteScreen} 
        options={{ title: 'NIKE FIT' }} 
      />
    </Stack.Navigator>
  );
}