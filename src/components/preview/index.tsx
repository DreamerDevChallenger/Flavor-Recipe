import styled from "styled-components";
import { recipeData } from "@/__data__";
import Card from "../card";
import { spirax } from "@/utils/font";

export default function Preview() {
  return (
    <StyledPreview>
      <h2 className={spirax.className}>Popular Recipe</h2>
      <div className="preview-card-list">
        {recipeData.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </StyledPreview>
  );
}

const StyledPreview = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  h2 {
    text-align: center;
    font-size: 32px;
  }

  .preview-card-list {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 64px;
  }
`;
