import {Alert} from 'react-native';

type AlertProps = {
  title: string;
  msg: string;
  cancelText?: string;
  onCancel?: () => void;
  okText?: string;
  onOk?: () => void;
};

export const showAlert = ({
  title,
  msg,
  cancelText,
  onCancel,
  okText,
  onOk,
}: AlertProps) => {
  Alert.alert(title ?? 'Alert', msg, [
    {
      text: cancelText ?? 'Cancel',
      onPress: () => onCancel && onCancel(),
      style: 'cancel',
    },
    {
      text: okText ?? 'Okay',
      onPress: () => {
        onOk && onOk();
      },
    },
  ]);
};
