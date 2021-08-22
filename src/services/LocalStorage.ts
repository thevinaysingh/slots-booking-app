import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalStorageKeys = {
  AccessToken: 'AccessToken',
  BookedSlots: 'BookedSlots',
};

export default class LocalStorage {
  static storeData = async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Error saving data
    }
  };

  static retrieveData = async (key: string, defaultValue: any = null) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ?? defaultValue;
    } catch (error) {
      return defaultValue;
    }
  };

  static setAccessToken = async (accessToken: string | null) => {
    await this.storeData(LocalStorageKeys.AccessToken, accessToken);
  };

  static getAccessToken = () => {
    return this.retrieveData(LocalStorageKeys.AccessToken, null);
  };

  static setBookedSlots = async (slotsIds: string[]) => {
    await this.storeData(LocalStorageKeys.BookedSlots, slotsIds);
  };

  static getBookedSlots = () => {
    return this.retrieveData(LocalStorageKeys.BookedSlots, []);
  };
}
