import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {AuthScreen} from '../../../app/navigation/enums/AuthScreen';
import {AuthNavigatorParamsList} from '../../../app/navigation/params/AuthNavigatorParamsList';

export const CreateAccount: React.FC<{
  navigation: NativeStackNavigationProp<
    AuthNavigatorParamsList,
    AuthScreen.CreateAccount
  >;
}> = _props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Create Account is in progress...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default CreateAccount;
