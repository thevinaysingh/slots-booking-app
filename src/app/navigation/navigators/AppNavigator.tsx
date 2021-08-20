import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Navigator} from '../enums/Navigator';
import {AppNavigatorParamsList} from '../params/AppNavigatorParamsList';
import {AuthNavigator} from './AuthNavigator';
import {DashboardNavigator} from './DashboardNavigator';

const Stack = createNativeStackNavigator<AppNavigatorParamsList>();

export const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName={Navigator.AuthNavigator}
    mode="modal"
    headerMode="none">
    <Stack.Screen name={Navigator.AuthNavigator} component={AuthNavigator} />
    <Stack.Screen
      name={Navigator.DashboardNavigator}
      component={DashboardNavigator}
    />
  </Stack.Navigator>
);
