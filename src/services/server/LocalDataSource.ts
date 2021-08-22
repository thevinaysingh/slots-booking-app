/** Deprecated Module */
import {CreateUser, LoginUser} from './LocalServer';

export class LocalDataSource {
  async open() {
    // TODO:
  }

  close() {
    // TODO:
  }

  async createSchema() {
    const UserSchema = {
      name: 'User',
      primaryKey: 'user_id',
      properties: {
        user_id: 'uuid',
        name: 'string',
        password: 'string',
        username: 'string',
        email: 'string',
        phone: 'string',
        country_code: 'string',
      },
    };
    const SlotSchema = {
      name: 'Slot',
      primaryKey: '_id',
      properties: {
        _id: 'uuid',
        duration: 'string',
        start: 'string',
        end: 'string',
        booked_by: 'string?',
      },
    };
  }

  async createUser(_: CreateUser): Promise<void> {
    // TODO:
  }

  async login(_: LoginUser): Promise<void> {
    //TODO:
  }
}
