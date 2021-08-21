import {InjectionKey, InjectionKeyScope} from '../../../services/di';
import {localServerInjectionKey} from '../../../services/server/injectionKey';
import {AuthRepository} from '../repositories/AuthRepository';

export const authRepositoryInjectionKey: InjectionKey<AuthRepository> = {
  name: 'authRepository',
  scope: InjectionKeyScope.singleton,
  closure: dependencies => {
    const localServer = dependencies.provide(localServerInjectionKey);

    return new AuthRepository(localServer);
  },
};
