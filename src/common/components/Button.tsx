import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export const ButtonRoundedFilled: React.FC<TouchableOpacityProps> = React.memo(
  ({children, disabled, style, ...props}) => (
    <TouchableOpacity
      disabled={disabled}
      {...props}
      style={[
        styles.buttonRoundedFilled,
        disabled ? styles.opacityHalf : styles.opacity1,
        style,
      ]}>
      {children}
    </TouchableOpacity>
  ),
);

const styles = StyleSheet.create({
  opacity1: {
    opacity: 1,
  },
  opacityHalf: {
    opacity: 0.5,
  },
  buttonRoundedFilled: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    height: 50,
    paddingHorizontal: 5,
    backgroundColor: 'rgba(10, 132, 255, 1)',
    borderRadius: 15,
  },
});
