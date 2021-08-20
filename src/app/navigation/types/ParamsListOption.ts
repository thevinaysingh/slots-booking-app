import {ValuesType} from 'utility-types';

interface ScreenParams<Params, Key extends keyof Params> {
  screen: Key;
  params: Params[Key];
}

export type ParamsListOption<Params> = ValuesType<
  {[Key in keyof Params]: ScreenParams<Params, Key>}
>;
