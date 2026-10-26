import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigation/StackNavigator'; // 'Navigation' e 'StackNavigator' com maiúsculas

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}