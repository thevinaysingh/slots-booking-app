import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text} from 'react-native';
import {AuthScreen} from '../../../app/navigation/enums/AuthScreen';
import {AuthNavigatorParamsList} from '../../../app/navigation/params/AuthNavigatorParamsList';

export const CreateAccount: React.FC<{
  navigation: NativeStackNavigationProp<
    AuthNavigatorParamsList,
    AuthScreen.CreateAccount
  >;
}> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Slots Booking App</Text>
      <ActivityIndicator size="small" />
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
