import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DashboardScreen} from '../enums/DashboardScreen';
import {DashboardNavigatorParamsList} from '../params/DashboardNavigatorParamsList';

const Dashboard = React.lazy(() =>
  import('../../../features/dashboard/screens/Dashboard').then(module => ({
    default: module.Dashboard,
  })),
);
const Profile = React.lazy(() =>
  import('../../../features/dashboard/screens/Profile').then(module => ({
    default: module.Profile,
  })),
);

const Stack = createNativeStackNavigator<DashboardNavigatorParamsList>();

export const DashboardNavigator = () => (
  <Stack.Navigator
    initialRouteName={DashboardScreen.Dashboard}
    screenOptions={{
      headerShown: false,
      presentation: 'modal',
    }}>
    <Stack.Screen name={DashboardScreen.Dashboard} component={Dashboard} />
    <Stack.Screen name={DashboardScreen.Profile} component={Profile} />
  </Stack.Navigator>
);
