import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { AuthScreen } from '../../../app/navigation/enums/AuthScreen';
import { AuthNavigatorParamsList } from '../../../app/navigation/params/AuthNavigatorParamsList';

const SPLASH_TIMEOUT = 3000;

export const Splash: React.FC<{
  navigation: NativeStackNavigationProp<
    AuthNavigatorParamsList,
    AuthScreen.Splash
  >;
}> = ({navigation}) => {
  const validateNavigationFlow = React.useCallback(() => {
    navigation.navigate(AuthScreen.Login);
  }, [navigation]);

  React.useEffect(() => {
    setTimeout(validateNavigationFlow, SPLASH_TIMEOUT);
  }, [validateNavigationFlow]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Slots Booking App</Text>
      {/* <ActivityIndicator size="small" /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Splash;
