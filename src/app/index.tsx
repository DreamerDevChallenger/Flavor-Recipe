"use client";

import { useAppSelector } from "@/redux/hooks";
import { selectTheme } from "@/redux/selectors";

import styled, { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "../lib/registry";
import Header from "@/components/header";

const darkTheme = {
  text: "#F6F6F6",
  background: "#111111",
  second_background: "#151515",
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
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 48px 32px;
  }

  @media (min-width: 425px) {
    main {
      padding: 48px;
    }
  }

  @media (max-width: 424px) {
    main {
      padding: 48px 16px;
    }
  }
`;
