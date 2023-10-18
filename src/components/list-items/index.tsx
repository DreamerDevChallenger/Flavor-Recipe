import { recipeData } from "@/__data__";
import styled, { keyframes } from "styled-components";
import Card from "../card";
import { useSearchParams } from "next/navigation";

export default function ListItems() {
  const searchParams = useSearchParams().get("search");

  const filterData = recipeData.filter((result) =>
    result.name
      .toLowerCase()
      .includes(searchParams ? searchParams.toLowerCase() : "")
  );

  return (
    <StyledListItems>
      {filterData.map((item, index) => (
        <Card key={item.name} data={item} />
      ))}
    </StyledListItems>
  );
}
const appear = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity:1;
  }
`;

const StyledListItems = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  gap: 24px;
  place-items: center;

  .card {
    animation: ${appear} 1s forwards;
  }
`;
