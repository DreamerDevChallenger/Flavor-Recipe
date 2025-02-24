import { RootState } from "./store";

export const selectTheme = (state: RootState) => state.localStorage.themeSlice;
export const selectRecipes = (state: RootState) =>
  state.localStorage.recipesSlice;
