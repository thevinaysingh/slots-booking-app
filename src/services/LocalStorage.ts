import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalStorageKeys = {
  AccessToken: 'AccessToken',
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

  static setUserSlots = async (userId: string, slotsIds: string[]) => {
    await this.storeData(userId, slotsIds);
  };

  static getUserSlots = (userId: string) => {
    return this.retrieveData(userId, []);
  };
}
