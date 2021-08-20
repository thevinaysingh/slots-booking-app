import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Dashboard, Profile} from '../../../features/dashboard/screens';
import {DashboardScreen} from '../enums/DashboardScreen';
import {DashboardNavigatorParamsList} from '../params/DashboardNavigatorParamsList';

const Stack = createNativeStackNavigator<DashboardNavigatorParamsList>();

export const DashboardNavigator = () => (
  <Stack.Navigator
    initialRouteName={DashboardScreen.Dashboard}
    mode="modal"
    headerMode="none">
    <Stack.Screen name={DashboardScreen.Dashboard} component={Dashboard} />
    <Stack.Screen name={DashboardScreen.Profile} component={Profile} />
  </Stack.Navigator>
);
