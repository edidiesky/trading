import React, { useState } from "react";
import styled from "styled-components";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReactOwlCarousel from "react-owl-carousel";
interface CarouselProps {
    children: React.ReactNode,
    options?:any
}
const Carousel: React.FC<CarouselProps> = ({ children,options }) => {
    return (
        <ReactOwlCarousel
            className="owl-carousel owl-theme"
            {...options}
        >
            {children}
        </ReactOwlCarousel>
    )
}

const CarouselStyles = styled.div`
  width: 100%;

   .owl-nav {
    position: absolute;
    top: 35%;
    width: 100%;
    z-index: 10;

    &.disabled {
      display: none;
    }
    button.owl-next,
    button.owl-prev {
      width: 50px;
      height: 50px;
      background-color: #333;
      border-radius: 50%;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      font-size: 26px;
      @media (max-width: 780px) {
        width: 34px;
        height: 34px;
        font-size: 16px;
      }
    }
    button.owl-next {
      color: #fff;
      &.disabled {
        display: none;
      }
      &:hover {
       opacity:.5;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
        color: #fff;
      }
    }
    button.owl-prev {
      transition: all 0.4s;
      color: #fff;

      &.disabled {
        display: none;
      }
      &:hover {
       opacity:.5;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
        color: #fff;
      }
    }
    button.owl-prev {
      left: -2%;
    }
    button.owl-next {
      right: -2%;
    }
  }
`

export default Carousel