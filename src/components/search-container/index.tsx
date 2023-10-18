"use client";

import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchContainer() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const searchParams = params.get("search");

  const [search, setSearch] = useState(searchParams ? searchParams : "");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);

      const query = e.target.value ? `?search=${e.target.value}` : "";
      router.push(`${pathname}${query}`);
    },
    [pathname, router]
  );

  return (
    <StyledSearchContainer>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        className="search-bar"
        placeholder="Search Your Recipe"
      />
    </StyledSearchContainer>
  );
}

const StyledSearchContainer = styled.section`
  width: 100%;

  .search-bar {
    width: 100%;
    background-color: ${({ theme }) => theme.second_background};
    border: 0;
    padding: 12px 12px;
    box-shadow: 0 0 2px ${({ theme }) => `rgba(${theme.border}, .2)`};
  }
`;
