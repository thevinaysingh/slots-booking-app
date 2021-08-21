// import Realm from 'realm';
import {CreateUser, LoginUser} from './LocalServer';

// const {UUID} = Realm.BSON;

// class User {
//   public static schema: Realm.ObjectSchema = {
//     name: 'User',
//     primaryKey: 'user_id',
//     properties: {
//       user_id: 'string',
//       name: 'string',
//       password: 'string',
//       username: 'string',
//       email: 'string',
//       phone: 'string',
//       country_code: 'string',
//     },
//   };

//   public user_id: string;
//   public name: string;
//   public password: string;
//   public username: string;
//   public email: string;
//   public phone: string;
//   public country_code: string;

//   constructor(
//     user_id: string,
//     name: string,
//     password: string,
//     username: string,
//     email: string,
//     phone: string,
//     country_code: string,
//   ) {
//     this.user_id = user_id;
//     this.name = name;
//     this.password = password;
//     this.username = username;
//     this.email = email;
//     this.phone = phone;
//     this.country_code = country_code;
//   }
// }

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
export class LocalDataSource {
  // private _realm?: Realm;

  async open() {
    // TODO:
  }

  close() {
    // this._realm?.close();
  }

  async createSchema() {
    // const SlotSchema = {
    //   name: 'Slot',
    //   primaryKey: '_id',
    //   properties: {
    //     _id: 'uuid',
    //     duration: 'string',
    //     start: 'string',
    //     end: 'string',
    //     booked_by: 'string?',
    //   },
    // };
    // this._realm = await Realm.open({
    //   path: 'SlotBookingAppRealm',
    //   schema: [UserSchema],
    // });
  }

  async createUser({
    name,
    password,
    email,
    username,
    phone,
  }: CreateUser): Promise<void> {
    // let user: User;
    // this._realm?.write(() => {
    //   user = new User(
    //     '00000009',
    //     name,
    //     password,
    //     username,
    //     email,
    //     phone,
    //     '+91',
    //   );
    //   this._realm?.create(UserSchema.name, user);
    //   Promise.resolve(user);
    // });
  }

  async login({loginId, password}: LoginUser): Promise<void> {
    // const filteredValue = `username = ${loginId}`;
    // const users = this._realm
    //   ?.objects(UserSchema.name.name)
    //   .filtered(filteredValue);
    // console.log('password', password);
    // console.log('users', users);
  }
}
