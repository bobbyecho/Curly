import { StyleSheet } from 'react-native';
import colors from './colors';
import metrics from './metrics';

export default {
  TextInput: {
    styles: StyleSheet.create({
      default: {
        marginVertical: metrics.distance.medium,
      },
    }),
    themeOverride: {
      roundness: metrics.radius.textInputRadius,
      colors: {
        primary: colors.primary,
        text: colors.black,
        placeholder: colors.lightGray,
        background: colors.white,
      },
    },
  },
  Button: {
    styles: StyleSheet.create({
      default: {
        marginVertical: metrics.distance.medium,
      },
    }),
    labelStyles: StyleSheet.create({
      primary: {
        color: colors.white,
      },
    }),
    containerStyles: StyleSheet.create({
      primary: {
        backgroundColor: colors.primary,
      },
    }),
    themeOverride: {
      roundness: metrics.radius.buttonRadius,
    },
  },
};
