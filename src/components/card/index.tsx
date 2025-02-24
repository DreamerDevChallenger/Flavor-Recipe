"use client";

import { spirax } from "@/utils/font";

import Image from "next/legacy/image";
import Link from "next/link";

import { Recipe } from "@/models/recipe";
import { Box, styled, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CardFooter from "./card-footer";

interface Props {
  data: Recipe;
}

export default function Card({ data }: Props) {
  useEffect(() => {
    AOS.init({ duration: 400, delay: 200, easing: "ease-in-out" });
  }, []);

  return (
    <Box data-aos="fade-in" sx={{ width: "100%", maxWidth: "450px", height: "100%" }}>
      <Link href={`/recipe/${data.id}`} className="link-wrapper">
        <StyledCard className="card">
          <div className="card-header">
            <Image
              src={data.image}
              alt={`This image came from that link ${data.name}`}
              objectFit="cover"
              objectPosition={"center"}
              layout="fill"
              priority
            />
          </div>
          <div className="card-content">
            <h3 className={spirax.className}>{data.name}</h3>
          </div>
          <div className="card-filter">
            {data.tags.map((item, index) => (
              <Box key={index} className="card-filter-item">
                <Typography>{item}</Typography>
              </Box>
            ))}
          </div>
          <CardFooter time={data.prepTimeMinutes} difficult={data.difficulty} type={data.cuisine} />
        </StyledCard>
      </Link>
    </Box>
  );
}

const StyledCard = styled(Box)`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.3s ease-in-out;
  will-change: transform;
  background-color: ${({ theme }) => theme.colors.second_background};
  box-shadow: 0 0 5px -2px;

  &:hover {
    transform: perspective(500px) rotateY(10deg) rotateX(1deg) translateX(10px);
  }

  .card-header {
    position: relative;
    width: 100%;
    height: 200px;
    padding: 4px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    padding: 4px;

    gap: 16px;
    h3 {
      text-align: center;
      font-size: 24px;
      background: linear-gradient(to right, ${({ theme }) => `${theme.colors.secondary}, ${theme.colors.primary}`});
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
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.05);
        will-change: transform;
      }
    }
  }
  .card-filter {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    .card-filter-item {
      background-color: ${({ theme }) => theme.colors.secondary};
      border-radius: 4px;
      padding: 4px 12px;

      &:nth-of-type(even) {
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
