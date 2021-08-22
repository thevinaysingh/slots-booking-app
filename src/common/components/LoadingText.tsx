import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

export const LoadingText: React.FC<TextProps> = ({children}) => {
  return <Text style={styles.loadingText}>{children ?? 'Loading...'}</Text>;
};

const styles = StyleSheet.create({
  loadingText: {
    fontSize: 18,
    color: 'black',
    padding: 10,
    alignSelf: 'center',
  },
});
