import {CommonActions} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthScreen} from '../../../app/navigation/enums/AuthScreen';
import {DashboardScreen} from '../../../app/navigation/enums/DashboardScreen';
import {Navigator} from '../../../app/navigation/enums/Navigator';
import {AuthNavigatorParamsList} from '../../../app/navigation/params/AuthNavigatorParamsList';
import {ButtonRoundedFilled} from '../../../common/components/Button';
import {HeaderText} from '../../../common/components/HeaderText';
import {InputBox} from '../../../common/components/InputBox';
import DependencyContext from '../../../services/di/DependencyContext';
import {User} from '../../../services/server/LocalServer';
import {authRepositoryInjectionKey} from '../injection-keys';

export const Login: React.FC<{
  navigation: NativeStackNavigationProp<
    AuthNavigatorParamsList,
    AuthScreen.Login
  >;
}> = ({navigation}) => {
  const [username, setUserName] = React.useState<string>('thevinaysin');
  const [password, setPassword] = React.useState<string>('12345678');

  const dependencies = React.useContext(DependencyContext);
  const authRepository = dependencies.provide(authRepositoryInjectionKey);

  const gotoCreateAccount = () => {
    navigation.navigate(AuthScreen.CreateAccount);
  };

  const onPressLogin = () => {
    authRepository
      .login({loginId: username, password})
      .then((_user: User | undefined | null) => {
        // TODO: Handle user id in better way
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
      })
      .catch(e => {
        Alert.alert('Error', e.message);
      });
  };

  const isLoginEnabled = username.length > 0 && password.length > 5;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <HeaderText>Login</HeaderText>
        <InputBox
          editable={false}
          value={username}
          placeholder="Username"
          onChangeText={setUserName}
        />
        <InputBox
          editable={false}
          value={password}
          secureTextEntry
          placeholder="Password (Min 6 chars)"
          onChangeText={setPassword}
        />
        <Text style={styles.instructionText}>
          Note: Fields are not editable. Above filled fields are used to
          simulate actual login behavior avoiding discrepancies. Press Login to
          go.
        </Text>
        <ButtonRoundedFilled
          disabled={!isLoginEnabled}
          style={styles.btn}
          onPress={onPressLogin}>
          <Text style={styles.btnText}>Login</Text>
        </ButtonRoundedFilled>

        <TouchableOpacity
          onPress={gotoCreateAccount}
          style={styles.createAccBtn}>
          <Text style={styles.createAccTtnText}>Create Account?</Text>
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
  btn: {
    marginTop: 30,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  createAccBtn: {
    alignSelf: 'center',
    marginTop: 40,
  },
  createAccTtnText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'rgba(10, 132, 255, 1)',
  },
  instructionText: {
    fontSize: 16,
    color: 'grey',
  },
});

export default Login;
