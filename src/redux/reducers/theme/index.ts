import { utilInitReducer } from "@/utils/initialization/initReducer";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: "dark" };

const { actions, reducer } = createSlice({
  name: "theme",
  initialState,
  reducers: {
    ...utilInitReducer(initialState),
  },
});

export const setTheme = actions;

export default reducer;
