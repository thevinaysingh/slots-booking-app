import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthScreen} from '../enums/AuthScreen';
import {AuthNavigatorParamsList} from '../params/AuthNavigatorParamsList';

const Splash = React.lazy(() =>
  import('../../../features/auth/screens/Splash').then(module => ({
    default: module.Splash,
  })),
);
const Login = React.lazy(() =>
  import('../../../features/auth/screens/Login').then(module => ({
    default: module.Login,
  })),
);
const CreateAccount = React.lazy(() =>
  import('../../../features/auth/screens/CreateAccount').then(module => ({
    default: module.CreateAccount,
  })),
);

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
