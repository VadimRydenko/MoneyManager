import './gesture-handler';
import React from 'react';
import {Provider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import 'firebase/auth';
import {theme} from './src/core/theme';
import {
  AuthLoadingScreen,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  Dashboard,
  AddNewExpense,
} from './src/screens';

import {StateProvider} from './src/state';
import {ScreenNames} from './src/constants';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <StateProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={ScreenNames.AuthLoadingScreen}
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name={ScreenNames.AuthLoadingScreen}
              component={AuthLoadingScreen}
            />
            <Stack.Screen
              name={ScreenNames.StartScreen}
              component={StartScreen}
            />
            <Stack.Screen
              name={ScreenNames.LoginScreen}
              component={LoginScreen}
            />
            <Stack.Screen
              name={ScreenNames.RegisterScreen}
              component={RegisterScreen}
            />
            <Stack.Screen name={ScreenNames.Dashboard} component={Dashboard} />
            <Stack.Screen
              name={ScreenNames.AddNewExpense}
              component={AddNewExpense}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </StateProvider>
    </Provider>
  );
}
