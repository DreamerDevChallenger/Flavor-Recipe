"use client";

import RecipeProfile from "@/components/recipe-profil";
import { apiGetRecipe } from "@/services/api";
import { use, useCallback, useEffect } from "react";

const RecipePage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  const callBack = useCallback(async () => {
    await apiGetRecipe(Number(id));
  }, []);

  useEffect(() => {
    callBack();
  }, [callBack]);

  return <RecipeProfile />;
};

export default RecipePage;
