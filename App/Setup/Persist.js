import createRematchPersist from '@rematch/persist';

const persistPlugin = createRematchPersist({
  whitelist: [],
  version: 1,
});

export default persistPlugin;
