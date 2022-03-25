import React, { useState, useEffect, useRef } from "react";

import AboutKGASlideFirst from "../Component_M/AboutKGASlideFirst";
import AboutKGASlideSecond from "../Component_M/AboutKGASlideSecond";

import rightArrow from "../Image/rightArrow.png";
import leftArrow from "../Image/leftArrow.png";

import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;
const Button = styled.button`
  all: unset;
  width: 3vw;
  height: 3vw;
  color: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5vw;
  font-family: "SEBANG-Gothic-Regular";
  cursor: pointer;
  background-size: contain;
  background-position: center top;
  background-repeat: no-repeat;
  ${({ Image }) => {
    return Image ? `background-image: url(${Image})` : null;
  }}
`;
const SliderContainer = styled.div`
  width: 200%;
  height: 80vw;
  display: flex; //이미지들을 가로로 나열합니다.
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const SlideSelectorWrapper = styled.div`
  width: 30vw;
  height: 3vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 3vw;
`;

const TOTAL_SLIDES = 3; // 7장 19명

export default function AboutKGACarousel_M({ first }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide * 50}%`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  const SlideNotSelectedCircle = styled.div`
    width: 1vw;
    height: 1vw;
    border-radius: 1vw;
    cursor: pointer;
    ${({ first }) => {
      return first === true
        ? `background-color: #f0f0f0`
        : `background-color: #f6f6f6`;
    }}
  `;

  const SlideSelectedCircle = styled.div`
    width: 3vw;
    height: 1vw;
    background-color: #00ffd6;
    border-radius: 1vw;
    cursor: pointer;
  `;

  return (
    <div
      style={{
        width: "100%",
        height: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
        }}
      >
        <Button
          style={{ marginRight: "3vw" }}
          onClick={prevSlide}
          Image={leftArrow}
        ></Button>
        <Container>
          <SliderContainer ref={slideRef}>
            {first === true ? <AboutKGASlideFirst /> : <AboutKGASlideSecond />}
          </SliderContainer>
        </Container>
        <Button
          style={{ marginLeft: "3vw" }}
          onClick={nextSlide}
          Image={rightArrow}
        ></Button>
      </div>
      <SlideSelectorWrapper>
        {currentSlide === 0 ? (
          <SlideSelectedCircle
            onClick={() => setCurrentSlide(0)}
            first={first}
          />
        ) : (
          <SlideNotSelectedCircle
            onClick={() => setCurrentSlide(0)}
            first={first}
          />
        )}
        {currentSlide === 1 ? (
          <SlideSelectedCircle
            onClick={() => setCurrentSlide(1)}
            first={first}
          />
        ) : (
          <SlideNotSelectedCircle
            onClick={() => setCurrentSlide(1)}
            first={first}
          />
        )}
        {currentSlide === 2 ? (
          <SlideSelectedCircle
            onClick={() => setCurrentSlide(2)}
            first={first}
          />
        ) : (
          <SlideNotSelectedCircle
            onClick={() => setCurrentSlide(2)}
            first={first}
          />
        )}
        {currentSlide === 3 ? (
          <SlideSelectedCircle
            onClick={() => setCurrentSlide(3)}
            first={first}
          />
        ) : (
          <SlideNotSelectedCircle
            onClick={() => setCurrentSlide(3)}
            first={first}
          />
        )}
      </SlideSelectorWrapper>
    </div>
  );
}
