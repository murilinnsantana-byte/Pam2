import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa as telas da pasta screens
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: '#0F172A' },
        headerTintColor: '#F8FAFC',
        headerTitleStyle: { fontWeight: 'bold' },
        headerShadowVisible: false,
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
        options={{ title: 'Urban Vibe - Catálogo' }} 
      />
    </Stack.Navigator>
  );
}