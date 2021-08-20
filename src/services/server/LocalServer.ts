import {LocalDataSource} from './LocalDataSource';

export class LocalServer {
  private _localDataSource: LocalDataSource;

  constructor(localDataSource: LocalDataSource) {
    this._localDataSource = localDataSource;
  }

  async start(): Promise<void> {
    // TODO:
  }

  async login(_loginId: string, _password: string): Promise<void> {
    // TODO:
  }

  async createAccount(_loginId: string, _password: string): Promise<void> {
    // TODO:
  }

  async isUsernameAvailable(_username: string): Promise<void> {
    // TODO:
  }

  async fetchSlots(): Promise<void> {
    // TODO:
  }

  async bookAppointments(): Promise<void> {
    // TODO:
  }
}
