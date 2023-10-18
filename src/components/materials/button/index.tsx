import RippleEffect from "@/utils/ripple-effect";
import styled, { keyframes } from "styled-components";
import { useRouter } from "next/navigation";

import { useCallback } from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  color: "primary" | "secondary";
  link: string;
}

export default function Button({ children, color, link }: ButtonProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => RippleEffect(e),
    []
  );

  return (
    <Link href={link}>
      <StyledButton onClick={handleClick} className={`button-item ${color}`}>
        {children}
      </StyledButton>
    </Link>
  );
}

const ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

const StyledButton = styled.button`
  padding: 8px 24px;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  color: white;
  overflow: hidden;

  .ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ${ripple} 600ms linear;
    background-color: rgba(255, 255, 255, 0.5);
  }

  &.primary {
    background-color: ${({ theme }) => theme.primary};
  }

  &.secondary {
    background-color: ${({ theme }) => theme.secondary};
  }
`;
