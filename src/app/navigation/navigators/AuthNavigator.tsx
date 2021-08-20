import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CreateAccount, Login, Splash} from '../../../features/auth/screens';
import {AuthScreen} from '../enums/AuthScreen';
import {AuthNavigatorParamsList} from '../params/AuthNavigatorParamsList';

const Stack = createNativeStackNavigator<AuthNavigatorParamsList>();

export const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName={AuthScreen.Splash}
    screenOptions={{
      headerShown: false,
      presentation: 'modal',
    }}>
    <Stack.Screen name={AuthScreen.Splash} component={Splash} />
    <Stack.Screen name={AuthScreen.Login} component={Login} />
    <Stack.Screen name={AuthScreen.CreateAccount} component={CreateAccount} />
  </Stack.Navigator>
);
