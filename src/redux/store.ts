import { configureStore, PayloadAction } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import { localReducer } from "./root";

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const localStoragePersistConfig = {
  key: "local",
  storage: storage,
  // other configurations for localStorage if needed
};

const persistedLocalReducer = persistReducer(
  localStoragePersistConfig,
  localReducer
);

export const store = configureStore({
  reducer: {
    localStorage: persistedLocalReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable the warning about non-serializable values
      immutableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppActionRecord<K, T> = (
  state: AppStoreNullable<K>,
  actions: PayloadAction<Exclude<T, null>>
) => void;
export type AppStoreNullable<T> = {
  [P in keyof T]: T[P] | null;
};
export type AppActionRecordNotNull<K, T> = (
  state: AppStoreNonNullable<K>,
  actions: PayloadAction<Exclude<T, null>>
) => void;

export type AppStoreNonNullable<T> = {
  [K in keyof T]: Exclude<T[K], null>;
};

export const persistor = persistStore(store);
