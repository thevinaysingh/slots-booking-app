import {DashboardScreen} from '../enums/DashboardScreen';

export type DashboardNavigatorParamsList = {
  [DashboardScreen.Dashboard]: {usedId: string};
  [DashboardScreen.Profile]: {usedId: string};
};
