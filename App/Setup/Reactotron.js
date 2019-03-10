/* eslint no-console: "off" */
/* eslint no-undef: "off" */
/* eslint prefer-destructuring: "off" */

import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  asyncStorage,
  networking,
} from 'reactotron-react-native';
import { IS_DEV } from '../Constants/Env';

// https://github.com/infinitered/reactotron for more options!
if (IS_DEV) {
  Reactotron.configure({ name: 'Curly' })
    .useReactNative()
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(asyncStorage())
    .use(networking())
    .connect();

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear();

  log = Reactotron.log;
}
