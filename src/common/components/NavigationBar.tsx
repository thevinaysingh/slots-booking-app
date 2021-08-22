import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {BackArrowBlack} from '../../constants/SvgImageAssets';
import {FlexContainer} from './Container';

const iconSize = 28;

type NavigationBarBaseProps = {
  title: string;
  onBack?: () => void;
  showBack?: boolean;
  children?: any;
} & ViewProps;

const NavigationBarBase: React.FC<NavigationBarBaseProps> = ({
  children,
  title,
  onBack,
  showBack,
}) => {
  return (
    <View style={styles.container}>
      <FlexContainer>
        {showBack && (
          <TouchableOpacity onPress={onBack} style={styles.backIcon}>
            <BackArrowBlack width={iconSize} height={iconSize} />
          </TouchableOpacity>
        )}
      </FlexContainer>
      <Text style={styles.title}>{title}</Text>
      <FlexContainer>{children}</FlexContainer>
    </View>
  );
};

NavigationBarBase.defaultProps = {
  showBack: false,
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'lightgrey',
  },
  backIcon: {
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  title: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export const NavigationBar = React.memo(NavigationBarBase);
