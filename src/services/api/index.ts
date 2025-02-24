import { Recipe, RecipeList } from "@/models/recipe";
import { setRecipes } from "@/redux/reducers/recipes";
import { store } from "@/redux/store";
import { AxiosResponse } from "axios";
import { apiCall } from "..";

export const apiGetRecipes = async () => {
  const response: AxiosResponse<RecipeList> = await apiCall("bodyData", "get", "");
  store.dispatch(setRecipes.recipes(response.data));
  return response;
};

export const apiGetRecipe = async (id: number) => {
  const response: AxiosResponse<Recipe> = await apiCall("bodyData", "get", `/${id}`);
  store.dispatch(setRecipes.recipe(response.data));
  return response;
};
