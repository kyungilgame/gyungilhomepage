import React, { useState, useEffect, useRef } from "react";

import MainReviewSlide from "../Component_D/MainReviewSlide";
import rightArrow from "../Image/rightArrow.png";
import leftArrow from "../Image/leftArrow.png";

import styled from "styled-components";
import { Link } from "react-router-dom";

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
  width: 600%;
  height: 30vw;
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
  margin-top: 2vw;
`;

const SlideNotSelectedCircle = styled.div`
  width: 1vw;
  height: 1vw;
  background-color: lightgray;
  border-radius: 1vw;
  cursor: pointer;
`;

const SlideSelectedCircle = styled.div`
  width: 3vw;
  height: 1vw;
  background-color: #00ffd6;
  border-radius: 1vw;
  cursor: pointer;
`;

const ApplyBlackButton = styled.button`
  all: unset;
  width: 20vw;
  height: 4vw;
  background-color: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 2vw;
`;

const TOTAL_SLIDES = 5; // 7장 19명

export default function MainReviewCarousel({ menuState, SetMenuState }) {
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
    slideRef.current.style.transform = `translateX(-${currentSlide * 16.7}%`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <div
      style={{
        width: "100%",
        height: "50vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "3vw",
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
            <MainReviewSlide />
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
          <SlideSelectedCircle onClick={() => setCurrentSlide(0)} />
        ) : (
          <SlideNotSelectedCircle onClick={() => setCurrentSlide(0)} />
        )}
        {currentSlide === 1 ? (
          <SlideSelectedCircle onClick={() => setCurrentSlide(1)} />
        ) : (
          <SlideNotSelectedCircle onClick={() => setCurrentSlide(1)} />
        )}
        {currentSlide === 2 ? (
          <SlideSelectedCircle onClick={() => setCurrentSlide(2)} />
        ) : (
          <SlideNotSelectedCircle onClick={() => setCurrentSlide(2)} />
        )}
        {currentSlide === 3 ? (
          <SlideSelectedCircle onClick={() => setCurrentSlide(3)} />
        ) : (
          <SlideNotSelectedCircle onClick={() => setCurrentSlide(3)} />
        )}
        {currentSlide === 4 ? (
          <SlideSelectedCircle onClick={() => setCurrentSlide(4)} />
        ) : (
          <SlideNotSelectedCircle onClick={() => setCurrentSlide(4)} />
        )}
        {currentSlide === 5 ? (
          <SlideSelectedCircle onClick={() => setCurrentSlide(5)} />
        ) : (
          <SlideNotSelectedCircle onClick={() => setCurrentSlide(5)} />
        )}
      </SlideSelectorWrapper>

      <ApplyBlackButton
        onClick={() => {
          // SetMenuState(2);
          window.scrollTo(0, 0);
        }}
      >
        <Link to="/courseReview">
          <text
            style={{
              color: "#f6f6f6",
              fontFamily: "SEBANG-Gothic-Bold",
              fontSize: "1.7vw",
            }}
          >
            더 많은 후기 보기
          </text>
          <text
            style={{
              color: "#f6f6f6",
              fontFamily: "SEBANG-Gothic-Bold",
              fontSize: "1.7vw",
              marginLeft: "1.5vw",
            }}
          >{`>`}</text>
        </Link>
      </ApplyBlackButton>
    </div>
  );
}
