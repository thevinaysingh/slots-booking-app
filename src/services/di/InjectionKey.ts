import {Dependencies} from './Dependencies';
import {InjectionKeyScope} from './InjectionKeyScope';

export type InjectionKey<T> = {
  name: string;
  scope: InjectionKeyScope;
  closure: (dependencies: Dependencies) => T;
};
