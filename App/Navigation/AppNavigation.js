import { Navigation } from 'react-native-navigation';
import { USER_SCREEN } from './Constants';
import RegisterScreen from './RegisterScreen';

RegisterScreen();

export function exampleCurlyScreen() {
  return Navigation.setRoot({
    root: {
      component: {
        name: USER_SCREEN,
      },
    },
  });
}
