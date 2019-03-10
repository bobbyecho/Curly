import { init } from '@rematch/core';
import * as models from './Models';
import persistor from './Persist';

const store = init({
  models,
  plugins: [persistor],
});

export default store;
