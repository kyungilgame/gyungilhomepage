import React, { useState, useEffect, useRef } from "react";

import rightArrow from "../Image/rightArrow.png";
import leftArrow from "../Image/leftArrow.png";
import ReviewSlide from "../Component_M/ReviewSlide";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;
const Button = styled.button`
  all: unset;
  width: 5vw;
  height: 5vw;
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
  width: 45000vw;
  height: 70vw;
  display: flex; //이미지들을 가로로 나열합니다.
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const TOTAL_SLIDES = 140; // 7장 19명

export default function ReviewCarousel({ ReviewSelect }) {
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
    slideRef.current.style.transform = `translateX(-${
      currentSlide * 0.13141
    }%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <div
      style={{
        width: "70%",
        height: "70vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Button
          style={{ marginRight: "1.5vw" }}
          onClick={prevSlide}
          Image={leftArrow}
        ></Button>
        <Container>
          <SliderContainer ref={slideRef}>
            <ReviewSlide ReviewSelect={ReviewSelect}></ReviewSlide>
          </SliderContainer>
        </Container>
        <Button
          style={{ marginLeft: "1.5vw" }}
          onClick={nextSlide}
          Image={rightArrow}
        ></Button>
      </div>
    </div>
  );
}
