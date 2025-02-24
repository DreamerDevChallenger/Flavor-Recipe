"use client";

import { useAppDispatch } from "@/redux/hooks";
import { spirax } from "@/utils/font";
import { Box, styled } from "@mui/material";
import Link from "next/link";

export default function Header() {
  const dispatch = useAppDispatch();

  return (
    <StyledHeader>
      <Link href="/">
        <h1 className={spirax.className}>Flavor Recipe</h1>
      </Link>
    </StyledHeader>
  );
}

const StyledHeader = styled(Box)`
  border-bottom: 1px solid rgba(${({ theme }) => theme.colors.border}, 0.1);
  background-color: ${({ theme }) => theme.colors.second_background};
  padding: 16px 24px;
  display: flex;
  justify-content: center;

  h1 {
    font-style: italic;
    font-size: 40px;
    text-align: center;
  }
`;
