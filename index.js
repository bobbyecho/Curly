import { Navigation } from 'react-native-navigation';
import { exampleCurlyScreen as App } from './App/Navigation/AppNavigation';
import './App/Setup/Reactotron';

Navigation.events().registerAppLaunchedListener(() => App());
