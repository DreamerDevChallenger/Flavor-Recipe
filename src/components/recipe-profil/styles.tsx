import { Box, styled } from "@mui/material";

export const StyledRecipeProfile = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 48px;
  .profile-header {
    display: flex;
    justify-content: center;
    .profile-image-container {
      position: relative;
      width: 400px;
      height: 400px;
      border-radius: 12px;
      overflow: hidden;
    }
  }
`;
