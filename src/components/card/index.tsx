import styled from "styled-components";

import { spirax } from "@/utils/font";

import Image from "next/legacy/image";
import Link from "next/link";

import CardFooter from "./card-footer";

interface Props {
  data:
    | {
        id: number;
        alt: string;
        src: any;
        name: string;
        description: string;
        time: number;
        yield: number;
        price: "Cheap" | "Economic" | "Expensive";
        difficult: "Easy" | "Medium" | "Hard";
        type: "Entree" | "Dessert" | "Dinner" | "Breakfast" | "Lunch";
        nutrition: any;
        ingredients: any;
        preparation: any;
      }
    | any;
}

export default function Card({ data }: Props) {
  return (
    <StyledCard className="card">
      <Link href={`/recipe/${data.id}`}>
        <div className="card-header">
          <Image
            src={data.src}
            alt={`This image came from that link ${data.alt}`}
            objectFit="cover"
            objectPosition={"center"}
            layout="fill"
            priority
          />
        </div>
        <div className="card-content">
          <h3 className={spirax.className}>{data.name}</h3>
          <p className="description">{data.description}</p>
        </div>
        <CardFooter
          time={data.time}
          price={data.price}
          difficult={data.difficult}
          type={data.type}
        />
      </Link>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 100%;
  max-width: 350px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ease;
  will-change: transform;
  background-color: ${({ theme }) => theme.second_background};

  &:hover {
    transform: scale(1.05);
  }

  &:hover {
    .card-header {
      .link-card {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .card-header {
    position: relative;
    width: 100%;
    height: 200px;
  }

  .card-content {
    padding: 24px 24px 0px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    h3 {
      text-align: center;
      font-size: 24px;
      background: linear-gradient(
        to right,
        ${({ theme }) => `${theme.secondary}, ${theme.primary}`}
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
      font-weight: bold;
    }
    .description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;
