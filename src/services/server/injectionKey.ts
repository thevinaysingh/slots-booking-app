import {InjectionKey, InjectionKeyScope} from '../di';
import {LocalDataSource} from './LocalDataSource';
import {LocalServer} from './LocalServer';

export const localServerInjectionKey: InjectionKey<LocalServer> = {
  name: 'localServer',
  scope: InjectionKeyScope.singleton,
  closure: () => {
    return new LocalServer(new LocalDataSource());
  },
};
