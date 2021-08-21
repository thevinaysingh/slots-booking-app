import LocalStorage from '../LocalStorage';
import {LocalDataSource} from './LocalDataSource';

export interface CreateUser {
  name: string;
  password: string;
  username: string;
  email: string;
  phone: string;
}

export interface LoginUser {
  loginId: string;
  password: string;
}

export interface User {
  accessToken: string;
  userId: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  countryCode: string;
}

export interface Slot {
  slotId: string;
  label: string;
  duration: number;
  start: number;
  end: number;
  bookedBy?: string | null;
}

export interface SlotSection {
  id: string;
  title: string;
  data: Slot[];
}

const MockUser = {
  accessToken: 'mock-user-access-token',
  userId: 'mock-user-userId',
  name: 'Vinay Singh',
  username: 'thevinaysin',
  email: 'thevinaysin@gmail.com',
  phone: '7974492780',
  countryCode: '+91',
};

const milliSecondsIn24hour = 86400000;
const milliSecondsInASlot = 7200000;

export class LocalServer {
  private _localDataSource: LocalDataSource;

  constructor(localDataSource: LocalDataSource) {
    this._localDataSource = localDataSource;
  }

  async start(): Promise<void> {
    await this._localDataSource?.open();
  }

  stop() {
    this._localDataSource?.close();
  }

  async login(_loginUser: LoginUser): Promise<User> {
    return Promise.resolve(MockUser);
  }

  async createAccount(user: CreateUser): Promise<void> {
    return this._localDataSource?.createUser(user);
  }

  async isUsernameAvailable(_username: string): Promise<void> {
    // TODO:
  }

  async me(_accessToken?: string | null): Promise<User> {
    return Promise.resolve(MockUser);
  }

  async fetchSlots(userId: string): Promise<Array<SlotSection>> {
    try {
      const slotsIds = await LocalStorage.getUserSlots(userId);
      const startTimeForToday = new Date().setHours(0, 0, 0, 0);
      const sectionsTitle = ['Today', 'Tomorrow', 'Day After Tomorrow'];
      const sectionsLabel = [
        '12:00 AM - 02:00 AM',
        '02:00 AM - 04:00 AM',
        '04:00 AM - 06:00 AM',
        '06:00 AM - 08:00 AM',
        '08:00 AM - 10:00 AM',
        '10:00 AM - 12:00 PM',
        '12:00 PM - 02:00 PM',
        '02:00 PM - 04:00 PM',
        '04:00 PM - 06:00 PM',
        '06:00 PM - 08:00 PM',
        '08:00 PM - 10:00 PM',
        '10:00 PM - 12:00 AM',
      ];
      const totalSlotsPerDay = 12;
      const slotsSection: SlotSection[] = [];

      for (let index = 0; index < sectionsTitle.length; index++) {
        const section: SlotSection = {
          id: `slot-section-${sectionsTitle[index]}`,
          title: sectionsTitle[index],
          data: [],
        };

        const startDayTime = startTimeForToday + index * milliSecondsIn24hour;

        for (let j = 0; j < totalSlotsPerDay; j++) {
          const start = startDayTime + j * milliSecondsInASlot;
          const end = startDayTime + (j + 1) * milliSecondsInASlot;
          const slotId = `day-${index}-slot-${j}-start-${start}-end-${end}`;

          section.data.push({
            slotId,
            label: sectionsLabel[j],
            duration: milliSecondsInASlot,
            start,
            end,
            bookedBy: slotsIds.includes(slotId) ? userId : null,
          });
        }

        slotsSection.push(section);
      }

      return Promise.resolve(slotsSection);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async bookSlots(slotIds: string[], userId: string): Promise<boolean> {
    await LocalStorage.setUserSlots(userId, slotIds);
    return Promise.resolve(true);
  }
}
