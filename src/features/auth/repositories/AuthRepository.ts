import LocalStorage from '../../../services/LocalStorage';
import {
  CreateUser,
  LocalServer,
  LoginUser,
  User,
} from '../../../services/server/LocalServer';

export class AuthRepository {
  private _accessToken?: string | null;
  private _localServer?: LocalServer | null;
  private _user?: User | null;

  constructor(localServer: LocalServer) {
    this._localServer = localServer;
  }

  async isLoggedIn(): Promise<boolean> {
    const token = await LocalStorage.getAccessToken();

    if (token !== null) {
      this._accessToken = token;
      return Promise.resolve(true);
    }

    return Promise.resolve(false);
  }

  async login(loginUser: LoginUser): Promise<User | undefined | null> {
    const user = await this._localServer?.login(loginUser);
    if (user === null) {
      return Promise.reject('Something went wrong');
    }

    await LocalStorage.setAccessToken(user?.accessToken ?? null);
    this._accessToken = user?.accessToken;
    this._user = {...user} as User;

    return Promise.resolve(user);
  }

  async createAccount(createUser: CreateUser): Promise<void> {
    this._localServer?.createAccount(createUser);
  }

  async isUsernameAvailable(username: string): Promise<void> {
    this._localServer?.isUsernameAvailable(username);
  }

  async me(): Promise<User | undefined | null> {
    if (this._accessToken === null) {
      return Promise.reject('Unauthenticated user!');
    }

    const user = await this._localServer?.me();
    if (user === null) {
      return Promise.reject('Something went wrong');
    }
    this._user = {...user} as User;

    return Promise.resolve(user);
  }

  async clear(): Promise<void> {
    this._accessToken = null;
    this._user = null;
  }

  getAccessToken(): string | null {
    return this._accessToken ?? null;
  }

  getUserId(): string | null {
    return this._user?.userId ?? null;
  }
}
