import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {AuthScreen} from '../../../app/navigation/enums/AuthScreen';
import {AuthNavigatorParamsList} from '../../../app/navigation/params/AuthNavigatorParamsList';

export const Login: React.FC<{
  navigation: NativeStackNavigationProp<
    AuthNavigatorParamsList,
    AuthScreen.Login
  >;
}> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Login;
