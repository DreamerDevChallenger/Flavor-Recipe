"use client";

import { RecipeList } from "@/models/recipe";
import { Box, keyframes, styled } from "@mui/material";
import { useSearchParams } from "next/navigation";
import Card from "../card";

interface ListItemsProps extends RecipeList {}

const ListItems: React.FC<ListItemsProps> = (props) => {
  const searchParams = useSearchParams().get("search");
  const filterData = props.recipes.filter((result) => result.name.toLowerCase().includes(searchParams ? searchParams.toLowerCase() : ""));

  return (
    <StyledListItems>
      {filterData.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </StyledListItems>
  );
};

export default ListItems;

const appear = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity:1;
  }
`;

const StyledListItems = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
  place-items: center;

  .card {
    animation: ${appear} 1s forwards;
  }
`;
