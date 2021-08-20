export class AuthRepository {
  private _accessToken?: string | null;

  constructor() {}

  async isLoggedIn(): Promise<boolean> {
    return Promise.resolve(false);
  }

  async loadUser(): Promise<void> {
    // TODO:
  }

  async clear(): Promise<void> {
    this._accessToken = null;
    // TODO: Clear from async storage
  }
}
