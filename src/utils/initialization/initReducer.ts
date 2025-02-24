import { PayloadAction } from "@reduxjs/toolkit";

export const utilInitReducer = <T extends object, P extends object>(
  initialState: T
) => {
  const reducers: {
    [K in keyof T]: (
      state: T,
      action: PayloadAction<Exclude<T[K], null>>
    ) => void;
  } = {} as any;

  for (const key in initialState) {
    reducers[key] = (state, action: PayloadAction<T[typeof key]>) => {
      state[key] = action.payload;
    };
  }

  return reducers;
};
