import { selectRecipes } from "@/redux/selectors";
import { Box } from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";
import { StyledRecipeProfile } from "./styles";

interface RecipeProfileProps {}

const RecipeProfile = (props: RecipeProfileProps) => {
  const { recipe } = useSelector(selectRecipes);

  return (
    recipe && (
      <StyledRecipeProfile>
        <Box className="profile-header">
          <Box className="profile-image-container">
            <Image
              src={recipe.image}
              alt={`This image came from that link ${recipe.name}`}
              objectFit="cover"
              objectPosition={"center"}
              layout="fill"
              priority
            />
          </Box>
        </Box>
        <ul>
          {recipe.instructions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </StyledRecipeProfile>
    )
  );
};

export default RecipeProfile;
