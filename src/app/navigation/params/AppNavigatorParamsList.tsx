import {Navigator} from '../enums/Navigator';
import {ParamsListOption} from '../types/ParamsListOption';
import {AuthNavigatorParamsList} from './AuthNavigatorParamsList';
import {DashboardNavigatorParamsList} from './DashboardNavigatorParamsList';

export type AppNavigatorParamsList = {
  [Navigator.AuthNavigator]: ParamsListOption<AuthNavigatorParamsList>;
  [Navigator.DashboardNavigator]: ParamsListOption<DashboardNavigatorParamsList>;
};
