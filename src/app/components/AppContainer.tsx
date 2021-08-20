import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import DependencyContext from '../../services/di/DependencyContext';
import {AppNavigator} from '../navigation/navigators/AppNavigator';

const AppContainer: React.FC = () => {
  const dependencies = React.useContext(DependencyContext);

  return (
    <DependencyContext.Provider value={dependencies}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </DependencyContext.Provider>
  );
};

export default AppContainer;
