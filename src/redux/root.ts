import { combineReducers } from "@reduxjs/toolkit";
import recipesSlice from "./reducers/recipes";
import themeSlice from "./reducers/theme";

export const localReducer = combineReducers({ themeSlice, recipesSlice });
