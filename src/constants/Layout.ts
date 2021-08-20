import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Layout = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  drawerWidth: width * 0.7,
};

export const getItemLayout = (
  index: number,
  h: number,
): {length: number; offset: number; index: number} => ({
  length: h,
  offset: h * index,
  index,
});

export default Layout;
