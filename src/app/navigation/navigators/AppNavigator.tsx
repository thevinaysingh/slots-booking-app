import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Suspense} from 'react';
import {LoadingText} from '../../../common/components/LoadingText';
import {Navigator} from '../enums/Navigator';
import {AppNavigatorParamsList} from '../params/AppNavigatorParamsList';

const AuthNavigator = React.lazy(() =>
  import('./AuthNavigator').then(module => ({
    default: module.AuthNavigator,
  })),
);
const DashboardNavigator = React.lazy(() =>
  import('./DashboardNavigator').then(module => ({
    default: module.DashboardNavigator,
  })),
);

const Stack = createNativeStackNavigator<AppNavigatorParamsList>();

export const AppNavigator = () => (
  <Suspense fallback={<LoadingText />}>
    <Stack.Navigator
      initialRouteName={Navigator.AuthNavigator}
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}>
      <Stack.Screen name={Navigator.AuthNavigator} component={AuthNavigator} />
      <Stack.Screen
        name={Navigator.DashboardNavigator}
        component={DashboardNavigator}
      />
    </Stack.Navigator>
  </Suspense>
);
