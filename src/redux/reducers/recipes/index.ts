import { Recipe, RecipeList } from "@/models/recipe";
import { AppStoreNullable } from "@/redux/store";
import { utilInitReducer } from "@/utils/initialization/initReducer";
import { createSlice } from "@reduxjs/toolkit";

interface RecipesStore {
  recipes: RecipeList;
  recipe: Recipe;
}

const initialState: AppStoreNullable<RecipesStore> = { recipes: null, recipe: null };

const { actions, reducer } = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    ...utilInitReducer(initialState),
  },
});

export const setRecipes = actions;

export default reducer;
