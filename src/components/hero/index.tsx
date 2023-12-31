"use client";

import Image from "next/legacy/image";
import styled, { keyframes } from "styled-components";
import hero_picture from "@/assets/images/hero.jpg";
import Button from "../materials/button";

export default function Hero() {
  return (
    <StyledHero>
      <div className="banner">
        <Image
          src={hero_picture.src}
          objectFit="cover"
          layout="fill"
          alt={`logo`}
          priority
        />
      </div>
      <article className="content">
        <p>
          Share your best meal with your <span>family</span> &{" "}
          <span>friends</span>
        </p>
        <div className="button-container">
          <Button link="recipes-list" color="secondary">
            Recipes
          </Button>
          <Button link="sign-up" color="primary">
            Join us
          </Button>
        </div>
      </article>
    </StyledHero>
  );
}

const banner = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const text = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`;

const button = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  overflow: hidden;

  .content {
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
      animation: ${text} 1.5s 0s ease forwards;
      text-transform: uppercase;
      font-size: 36px;
      text-align: center;

      span {
        background: linear-gradient(
          to left,
          ${({ theme }) => `${theme.secondary}, ${theme.primary}`}
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
      }
    }

    .button-container {
      display: flex;
      justify-content: center;
      gap: 24px;

      .button-item {
        opacity: 0;
        animation: ${button} 1.5s 1.5s ease forwards;
      }
    }
  }

  .banner {
    overflow: hidden;
    border-radius: 2px;
    position: relative;
    opacity: 0;
    height: 200px;
    width: 100%;
    max-width: 300px;
    animation: ${banner} 2.5s 0.5s ease forwards;
  }

  @media (min-width: 425px) {
    .banner {
      height: 250px;
      max-width: 375px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;

    .content {
      max-width: 500px;
    }
    .banner {
      height: 300px;
      max-width: 450px;
      min-width: 350px;
    }
  }
`;
