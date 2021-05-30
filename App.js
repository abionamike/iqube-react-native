import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreenOne from './screens/SplashScreenOne';
import SplashScreenThree from './screens/SplashScreenThree';
import SplashScreenTwo from './screens/SplashScreenTwo';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreenOne" component={SplashScreenOne} />
        <Stack.Screen name="SplashScreenTwo" component={SplashScreenTwo} />
        <Stack.Screen name="SplashScreenThree" component={SplashScreenThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
