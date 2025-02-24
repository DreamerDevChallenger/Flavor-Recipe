import { Button, styled } from "@mui/material";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  color: "primary" | "secondary";
  link: string;
}

export default function ButtonComponent({
  children,
  color,
  link,
}: ButtonProps) {
  return (
    <Link href={link}>
      <StyledButton className={`button-item ${color}`}>{children}</StyledButton>
    </Link>
  );
}

const StyledButton = styled(Button)`
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
    background-color: rgba(255, 255, 255, 0.5);
  }

  &.primary {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &.secondary {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
