import {CommonActions} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {AuthScreen} from '../../../app/navigation/enums/AuthScreen';
import {DashboardScreen} from '../../../app/navigation/enums/DashboardScreen';
import {Navigator} from '../../../app/navigation/enums/Navigator';
import {DashboardNavigatorParamsList} from '../../../app/navigation/params/DashboardNavigatorParamsList';
import {ButtonRoundedFilled} from '../../../common/components/Button';
import {NavigationBar} from '../../../common/components/NavigationBar';
import DependencyContext from '../../../services/di/DependencyContext';
import {User} from '../../../services/server/LocalServer';
import {authRepositoryInjectionKey} from '../../auth/injection-keys';

export const Profile: React.FC<{
  navigation: NativeStackNavigationProp<
    DashboardNavigatorParamsList,
    DashboardScreen.Profile
  >;
}> = ({navigation}) => {
  const dependencies = React.useContext(DependencyContext);
  const authRepository = dependencies.provide(authRepositoryInjectionKey);
  const [user, setUser] = React.useState<User | undefined | null>(undefined);

  const onPressBack = () => {
    navigation.goBack();
  };

  const onLogout = () => {
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
  };

  React.useEffect(() => {
    authRepository
      .me()
      .then((userData: User | undefined | null) => {
        setUser(userData);
      })
      .catch(_e => {
        // TODO: Handle error.
      });
  }, [authRepository]);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar title="Profile" showBack onBack={onPressBack} />
      <View style={styles.body}>
        <Text style={styles.text}>Name: {user?.name}</Text>
        <Text style={styles.text}>Email: {user?.email}</Text>
        <Text style={styles.text}>Phone: {user?.phone}</Text>
        <ButtonRoundedFilled onPress={onLogout}>
          <Text style={styles.btnText}>Logout</Text>
        </ButtonRoundedFilled>
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
    marginHorizontal: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: 'black',
    padding: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Profile;
