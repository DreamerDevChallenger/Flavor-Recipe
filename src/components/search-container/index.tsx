"use client";

import { Box, styled } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

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
      <input type="text" value={search} onChange={handleChange} className="search-bar" placeholder="Search Your Recipe" />
    </StyledSearchContainer>
  );
}

const StyledSearchContainer = styled(Box)`
  width: 200px;

  .search-bar {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.second_background};
    border: 0;
    padding: 12px 12px;
    border-radius: 100px;
    overflow: hidden;
    box-shadow: 0 0 2px ${({ theme }) => `rgba(${theme.colors.border}, .2)`};
  }
`;
