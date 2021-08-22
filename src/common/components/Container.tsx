import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

export const FlexContainer: React.FC<ViewProps> = ({children, style}) => (
  <View style={[styles.flexContainer, style]}>{children}</View>
);

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
});
