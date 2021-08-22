import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthScreen} from '../../../app/navigation/enums/AuthScreen';
import {AuthNavigatorParamsList} from '../../../app/navigation/params/AuthNavigatorParamsList';
import {HeaderText} from '../../../common/components/HeaderText';

export const CreateAccount: React.FC<{
  navigation: NativeStackNavigationProp<
    AuthNavigatorParamsList,
    AuthScreen.CreateAccount
  >;
}> = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <HeaderText>Create Account</HeaderText>

        <Text style={styles.instructionText}>
          Note: Create account is in development pipeline.
        </Text>

        <TouchableOpacity onPress={goBack} style={styles.goBackBtn}>
          <Text style={styles.goBackTtnText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    margin: 20,
  },

  goBackBtn: {
    alignSelf: 'center',
    marginTop: 40,
  },
  goBackTtnText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'rgba(10, 132, 255, 1)',
  },
  instructionText: {
    fontSize: 16,
    color: 'grey',
  },
});

export default CreateAccount;
