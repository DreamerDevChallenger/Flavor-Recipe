"use client";

import styled from "styled-components";

import Hero from "@/components/hero";

export default function Home() {
  return (
    <StyledHome>
      <Hero />
    </StyledHome>
  );
}

const StyledHome = styled.main`
  padding: 40px 20px;
`;
