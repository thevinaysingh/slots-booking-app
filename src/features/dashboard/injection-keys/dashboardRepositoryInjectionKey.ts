import {InjectionKey, InjectionKeyScope} from '../../../services/di';
import {DashboardRepository} from '../repositories/DashboardRepository';

export const dashboardRepositoryInjectionKey: InjectionKey<DashboardRepository> =
  {
    name: 'dashboardRepository',
    scope: InjectionKeyScope.singleton,
    closure: () => {
      return new DashboardRepository();
    },
  };
