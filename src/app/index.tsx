"use client";

import { useAppSelector } from "@/redux/hooks";
import { selectTheme } from "@/redux/selectors";

import styled, { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "../lib/registry";
import Header from "@/components/header";

const darkTheme = {
  text: "#FFFFFF",
  background: "#000000",
  primary: "#B62E08",
  secondary: "#E2712C",
  accent: "#D32F1D",
  border: "255, 255, 255",
};

const lightTheme = {
  text: "#000000",
  background: "#FFFFFF",
  primary: "#B62E08",
  secondary: "#E2A52C",
  accent: "#D32F1D",
  border: "0, 0, 0",
};

/**
 * @param children page elements of the app,
 * @returns
 */

export default function App({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector(selectTheme);

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme.theme === "light" ? lightTheme : darkTheme}>
        <StyledApp id="app">
          <Header />
          {children}
        </StyledApp>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;

  main {
    flex: 1;
  }
`;
