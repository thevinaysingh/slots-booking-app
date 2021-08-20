import {InjectionKey} from './InjectionKey';

export interface IDependencies {
  provide<T>(injectionKey: InjectionKey<T>): T;
}
