import { Box, styled } from "@mui/material";

const Footer = () => {
  const date = new Date();
  return <StyledFooter>Copyright © Ilyas Boukhechem {date.getFullYear()} - DreamerDevChallenger</StyledFooter>;
};

export default Footer;

const StyledFooter = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;

  border-top: 1px solid rgba(${({ theme }) => theme.colors.border}, 0.1);
  background-color: ${({ theme }) => theme.colors.second_background};
`;
