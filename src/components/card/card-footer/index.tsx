import { spirax } from "@/utils/font";
import {
  MonetizationOn,
  Timer,
  EmojiObjects,
  LocalDining,
} from "@mui/icons-material";
import styled from "styled-components";

interface Props {
  time: number;
  price: string;
  type: string;
  difficult: string;
}

export default function CardFooter({ time, price, type, difficult }: Props) {
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
      <div className="item-card-information price">
        <MonetizationOn />
        <span>{price}</span>
      </div>
    </StyledCardFooter>
  );
}

const StyledCardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 24px;

  .item-card-information {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    svg {
      color: ${({ theme }) => theme.accent};
    }
  }
`;
