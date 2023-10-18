"use client";

import { spirax } from "@/utils/font";
import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <Link href="/">
        <h1 className={spirax.className}>Flavor Recipe</h1>
      </Link>
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
    font-size: 40px;
    text-align: center;
  }
`;
