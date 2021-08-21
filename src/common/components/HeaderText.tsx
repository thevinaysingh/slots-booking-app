import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

type HeaderTextProps = {
  children: any;
  style?: TextStyle;
};

export const HeaderText: React.FC<HeaderTextProps> = React.memo(
  ({children, style}) => {
    return <Text style={[styles.title, style]}>{children}</Text>;
  },
);

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
});
