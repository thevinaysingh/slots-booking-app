import {Alert} from 'react-native';

export const showErrorAlert = (title: string, message: string) => {
  Alert.alert(title ?? 'Error', message);
};
