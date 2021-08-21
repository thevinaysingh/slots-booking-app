import {InjectionKey, InjectionKeyScope} from '../../../services/di';
import {localServerInjectionKey} from '../../../services/server/injectionKey';
import {authRepositoryInjectionKey} from '../../auth/injection-keys';
import {DashboardRepository} from '../repositories/DashboardRepository';

export const dashboardRepositoryInjectionKey: InjectionKey<DashboardRepository> =
  {
    name: 'dashboardRepository',
    scope: InjectionKeyScope.singleton,
    closure: dependencies => {
      const authRepository = dependencies.provide(authRepositoryInjectionKey);
      const localServer = dependencies.provide(localServerInjectionKey);
      return new DashboardRepository(authRepository, localServer);
    },
  };
