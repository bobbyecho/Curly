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
    textInputRadius: 4,
    buttonRadius: 4
  },
  distance: {
    tiny: 4,
    small: 8,
    medium: 16,
    large: 24
  },
  screen: {
    ...getScrenByOrientation()
  }
};
