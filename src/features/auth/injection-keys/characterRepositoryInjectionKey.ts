import {InjectionKey, InjectionKeyScope} from '../../../services/di';
import {AuthRepository} from '../repositories/AuthRepository';

export const authRepositoryInjectionKey: InjectionKey<AuthRepository> = {
  name: 'authRepository',
  scope: InjectionKeyScope.singleton,
  closure: () => {
    return new AuthRepository();
  },
};
