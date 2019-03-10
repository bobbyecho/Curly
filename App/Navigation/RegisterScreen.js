import { Navigation } from 'react-native-navigation';
import WrappedComponent from '../Setup/RootContainer';
import User from '../Domains/User/Screens';
import { USER_SCREEN } from './Constants';

const Screens = new Map();
Screens.set(USER_SCREEN, User);

export default function() {
  return Screens.forEach((ScreenComponent, key) => {
    Navigation.registerComponent(key, () => WrappedComponent(ScreenComponent));
    // Navigation.registerComponent(USER_SCREEN, () => WrappedComponent(User));
  });
}
