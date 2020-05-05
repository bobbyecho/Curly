import { init, RematchRootState, RematchDispatch } from '@rematch/core';
import { models, typeRootModel } from '@models';

export const store = init({
  models
});

export type Dispatch = RematchDispatch<typeRootModel>;
export type Store = typeof store;
export type IRootState = RematchRootState<typeRootModel>;
