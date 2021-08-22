import {CommonActions} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text} from 'react-native';
import {AuthScreen} from '../../../app/navigation/enums/AuthScreen';
import {DashboardScreen} from '../../../app/navigation/enums/DashboardScreen';
import {Navigator} from '../../../app/navigation/enums/Navigator';
import {AuthNavigatorParamsList} from '../../../app/navigation/params/AuthNavigatorParamsList';
import DependencyContext from '../../../services/di/DependencyContext';
import {localServerInjectionKey} from '../../../services/server/injectionKey';
import {authRepositoryInjectionKey} from '../injection-keys';

const SPLASH_TIMEOUT = 3000;

export const Splash: React.FC<{
  navigation: NativeStackNavigationProp<
    AuthNavigatorParamsList,
    AuthScreen.Splash
  >;
}> = ({navigation}) => {
  const dependencies = React.useContext(DependencyContext);
  const localServer = dependencies.provide(localServerInjectionKey);
  const authRepository = dependencies.provide(authRepositoryInjectionKey);

  const navigateToLogin = React.useCallback(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: Navigator.AuthNavigator,
            params: {screen: AuthScreen.Login},
          },
        ],
      }),
    );
  }, [navigation]);

  const navigateToDashboard = React.useCallback(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: Navigator.DashboardNavigator,
            params: {screen: DashboardScreen.Dashboard},
          },
        ],
      }),
    );
  }, [navigation]);

  const validateNavigationFlow = React.useCallback(async () => {
    try {
      const isLoggedIn = await authRepository.isLoggedIn();
      if (isLoggedIn) {
        await authRepository.me();
        // TODO: Handle user id in better way
        navigateToDashboard();
        return;
      }

      navigateToLogin();
    } catch (_error) {
      await authRepository.clear();
      navigateToLogin();
    }
  }, [authRepository, navigateToDashboard, navigateToLogin]);

  const loadApp = React.useCallback(async () => {
    await localServer.start();
    setTimeout(validateNavigationFlow, SPLASH_TIMEOUT);
  }, [validateNavigationFlow, localServer]);

  React.useEffect(() => {
    loadApp();
  }, [loadApp, localServer]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Slots Booking App</Text>
      <ActivityIndicator size="small" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: '500',
    color: 'black',
  },
});

export default Splash;
