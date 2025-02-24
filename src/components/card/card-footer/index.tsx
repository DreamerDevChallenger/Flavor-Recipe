import { spirax } from "@/utils/font";
import { EmojiObjects, LocalDining, Timer } from "@mui/icons-material";
import { Box, styled } from "@mui/material";

interface Props {
  time: number;
  type: string;
  difficult: string;
}

export default function CardFooter({ time, type, difficult }: Props) {
  return (
    <StyledCardFooter className={spirax.className}>
      <div className="item-card-information time">
        <Timer />
        <span>{time} min</span>
      </div>
      <div className="item-card-information difficult">
        <EmojiObjects />
        <span>{difficult}</span>
      </div>
      <div className="item-card-information difficult">
        <LocalDining />
        <span>{type}</span>
      </div>
    </StyledCardFooter>
  );
}

const StyledCardFooter = styled(Box)`
  display: flex;
  justify-content: space-around;
  padding: 24px;
  margin-top: auto;

  .item-card-information {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      will-change: transform;
    }
    svg {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;
