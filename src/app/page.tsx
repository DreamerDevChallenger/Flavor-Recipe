"use client";

import styled from "styled-components";

import Hero from "@/components/hero";
import Preview from "@/components/preview";

export default function Home() {
  return (
    <StyledHome>
      <Hero />
      <Preview />
    </StyledHome>
  );
}

const StyledHome = styled.main`
  gap: 48px;
`;
