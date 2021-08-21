import {LocalServer, SlotSection} from '../../../services/server/LocalServer';
import {AuthRepository} from '../../auth/repositories/AuthRepository';

export class DashboardRepository {
  private _authRepository: AuthRepository;
  private _localServer: LocalServer;

  constructor(authRepository: AuthRepository, localServer: LocalServer) {
    this._authRepository = authRepository;
    this._localServer = localServer;
  }

  async fetchSlots(): Promise<Array<SlotSection>> {
    const userId = this._authRepository?.getUserId();

    if (userId === null) {
      return Promise.reject('invalid user id');
    }

    return this._localServer?.fetchSlots(userId);
  }

  async bookAppointments(slotIDs: string[]): Promise<boolean> {
    const userId = this._authRepository?.getUserId();

    if (userId === null) {
      return Promise.reject('invalid user id');
    }

    return this._localServer?.bookSlots(slotIDs, userId);
  }
}
