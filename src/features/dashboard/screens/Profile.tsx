import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text} from 'react-native';
import {DashboardScreen} from '../../../app/navigation/enums/DashboardScreen';
import {DashboardNavigatorParamsList} from '../../../app/navigation/params/DashboardNavigatorParamsList';

export const Profile: React.FC<{
  navigation: NativeStackNavigationProp<
    DashboardNavigatorParamsList,
    DashboardScreen.Profile
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

export default Profile;
