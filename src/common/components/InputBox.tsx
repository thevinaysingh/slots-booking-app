import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

const InputBoxBase: React.FC<TextInputProps> = ({
  style,
  placeholderTextColor,
  ...props
}) => {
  return (
    <TextInput
      {...props}
      style={[styles.textInput, style]}
      placeholderTextColor={placeholderTextColor ?? 'lightgrey'}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    height: 50,
    color: 'black',
    fontSize: 18,
    paddingHorizontal: 10,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
});

export const InputBox = React.memo(InputBoxBase);
