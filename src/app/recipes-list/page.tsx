"use client";

import styled from "styled-components";

import SearchContainer from "@/components/search-container";
import ListItems from "@/components/list-items";

export default function Search() {
  return (
    <StyledSearch>
      <SearchContainer />
      <ListItems />
    </StyledSearch>
  );
}

const StyledSearch = styled.main`
  gap: 36px;
`;
