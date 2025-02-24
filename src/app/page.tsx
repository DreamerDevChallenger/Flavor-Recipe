"use client";

import Hero from "@/components/hero";
import Preview from "@/components/preview";
import { apiGetRecipes } from "@/services/api";
import { Box, styled } from "@mui/material";
import { useCallback, useEffect } from "react";

export default function Home() {
  const callBack = useCallback(async () => {
    await apiGetRecipes();
  }, []);

  useEffect(() => {
    callBack();
  }, []);

  return (
    <StyledHome>
      <Hero />
      <Preview />
    </StyledHome>
  );
}

const StyledHome = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 40px;
  gap: 48px;
`;
