"use client";

import ListItems from "@/components/list-items";
import SearchContainer from "@/components/search-container";
import { useAppSelector } from "@/redux/hooks";
import { selectRecipes } from "@/redux/selectors";
import { Box, styled } from "@mui/material";

export default function Search() {
  const { recipes } = useAppSelector(selectRecipes);

  return (
    recipes && (
      <StyledSearch>
        <SearchContainer />
        <ListItems {...recipes} />
      </StyledSearch>
    )
  );
}

const StyledSearch = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 36px;
`;
