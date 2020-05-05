import { Dimensions } from 'react-native';

function getScrenByOrientation() {
  const { width, height } = Dimensions.get('window');

  return {
    fullWidth: width < height ? width : height,
    halfWidth: width < height ? width / 2 : height / 2,
    fullHeight: width < height ? height : width,
    halfHeight: width < height ? height / 2 : width / 2
  };
}

export default {
  radius: {
    commonRadius: 4,
    textInputRadius: 4,
    buttonRadius: 4,
    chip: 6
  },
  distance: {
    xs: 4,
    s: 8,
    m: 12,
    l: 16,
    xl: 20,
    xxl: 24
  },
  screen: {
    ...getScrenByOrientation()
  }
};
