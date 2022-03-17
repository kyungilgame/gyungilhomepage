import React, { useState, useEffect, useRef } from "react";

import IntroductionSlide from "../Component_D/IntroductionSlide";

import styled from "styled-components";

const Container = styled.div`
  width: 70%;
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
`;
const SliderContainer = styled.div`
  width: 500vw;
  height: 30vw;
  display: flex; //이미지들을 가로로 나열합니다.
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: pink;
`;

const TOTAL_SLIDES = 6; // 7장 19명

export default function Index() {
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
    slideRef.current.style.transform = `translateX(-${currentSlide * 56}vw)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "85%",
        backgroundColor: "green",
      }}
    >
      <Button style={{ marginRight: "3vw" }} onClick={prevSlide}>
        {"<"}
      </Button>
      <Container>
        <SliderContainer ref={slideRef}>
          <IntroductionSlide currentSlide={currentSlide} />
          <IntroductionSlide currentSlide={currentSlide} />
          <IntroductionSlide currentSlide={currentSlide} />
          <IntroductionSlide currentSlide={currentSlide} />
          <IntroductionSlide currentSlide={currentSlide} />
          <IntroductionSlide currentSlide={currentSlide} />
          <IntroductionSlide currentSlide={currentSlide} />
        </SliderContainer>
      </Container>
      <Button style={{ marginLeft: "3vw" }} onClick={nextSlide}>
        {">"}
      </Button>
    </div>
  );
}
