"use client";

import { Spirax } from "next/font/google";
import styled from "styled-components";

const inter = Spirax({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <StyledHeader>
      <h1 className={inter.className}>Flavor Recipe</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  border-bottom: 1px solid rgba(${({ theme }) => theme.border}, 0.1);
  background-color: ${({ theme }) => theme.background};
  padding: 16px 24px;
  display: flex;
  justify-content: center;

  h1 {
    font-style: italic;
    font-size: 32px;
  }
`;
