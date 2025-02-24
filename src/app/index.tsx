"use client";

import { useAppSelector } from "@/redux/hooks";
import { selectTheme } from "@/redux/selectors";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { Box, createTheme, styled, ThemeProvider } from "@mui/material";

const darkTheme = {
  text: "#F6F6F6",
  background: "#111111",
  second_background: "#191919",
  primary: "#B62E08",
  secondary: "#E2712C",
  accent: "#D32F1D",
  border: "255, 255, 255",
};

const lightTheme = {
  text: "#111111",
  background: "#F6F6F6",
  second_background: "",
  primary: "#B62E08",
  secondary: "#E2A52C",
  accent: "#D32F1D",
  border: "0, 0, 0",
};

/**
 * @param children page elements of the app,
 * @returns
 */

export interface IAppTheme {
  colors: {
    text: string;
    background: string;
    second_background: string;
    primary: string;
    secondary: string;
    accent: string;
    border: string;
  };
}

declare module "@mui/material/styles" {
  interface Theme extends IAppTheme {}
  interface ThemeOptions extends IAppTheme {}
}

export default function App({ children }: { children: React.ReactNode }) {
  const { theme } = useAppSelector(selectTheme);
  const AppTheme = createTheme({
    colors: theme === "light" ? lightTheme : darkTheme,
  });

  return (
    <ThemeProvider theme={AppTheme}>
      <StyledApp id="app">
        <Header />
        <Box className="app-main">{children}</Box>
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

const StyledApp = styled(Box)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .app-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 48px 32px;
  }

  @media (min-width: 425px) {
    .app-main {
      padding: 48px;
    }
  }

  @media (max-width: 424px) {
    .app-main {
      padding: 48px 16px;
    }
  }
`;
