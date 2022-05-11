import { configureStore } from '@reduxjs/toolkit';

import todosSlice from '@/stores/todos/todos';

export type Store = ReturnType<typeof createReduxStore>;
export type State = ReturnType<Store['getState']>;
export type Dispatch = Store['dispatch'];
export type Selector<Selected> = (state: State) => Selected;

let reduxStoreMemo: ReturnType<typeof createReduxStore> | undefined;

export const isServer = typeof window === 'undefined';

export const createReduxStore = (preloadedState?: any) => configureStore({
  reducer: {
    [todosSlice.name]: todosSlice.reducer,
  },
  preloadedState,
  devTools: process.env.NODE_ENV === 'development',
});

export const initReduxStore = (initialState?: any) => {
  let reduxStore = reduxStoreMemo ?? createReduxStore(initialState);

  if (initialState && reduxStoreMemo) {
    reduxStore = createReduxStore({
      ...reduxStoreMemo.getState(),
      ...initialState,
    });
    reduxStoreMemo = undefined;
  }

  if (isServer) {
    return reduxStore;
  }

  if (!reduxStoreMemo) {
    reduxStoreMemo = reduxStore;
  }

  return reduxStore;
};

export default initReduxStore;
