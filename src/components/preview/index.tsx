import { useAppSelector } from "@/redux/hooks";
import { selectRecipes } from "@/redux/selectors";
import { spirax } from "@/utils/font";
import { Box, styled } from "@mui/material";
import Card from "../card";

export default function Preview() {
  const { recipes } = useAppSelector(selectRecipes);

  const recipesList = recipes ? [...recipes.recipes].sort((a, b) => b.rating - a.rating).slice(0, 3) : [];

  return (
    recipesList && (
      <StyledPreview>
        <h2 className={spirax.className}>Popular Recipe</h2>
        <Box sx={{ maxWidth: "1300px", width: "100%" }}>
          <div className="preview-card-list">
            {recipesList.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
        </Box>
      </StyledPreview>
    )
  );
}

const StyledPreview = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  h2 {
    text-align: center;
    font-size: 32px;
  }

  .preview-card-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    flex-wrap: wrap;
    gap: 64px;
  }
`;
