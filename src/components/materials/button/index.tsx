import RippleEffect from "@/utils/ripple-effect";
import styled, { keyframes } from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  color: "primary" | "secondary";
}

export default function Button({ children, color }: ButtonProps) {
  return (
    <StyledButton onClick={RippleEffect} className={`button-item ${color}`}>
      {children}
    </StyledButton>
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
