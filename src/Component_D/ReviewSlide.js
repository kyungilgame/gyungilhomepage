import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ReviewPlain from "./ReviewPlain";
import ReviewVideo from "./ReviewVideo";

import { reviewData, reviewDataWithURL } from "../Data/ReviewData";

const SlideWrapper = styled.div`
  width: 100%;
  height: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`;

const SlideRowWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const SlideRowWrapperTwo = styled.div`
  width: 5.6%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

// Size는 메인 페이지 기준으로 작성해줄 것

export default function ReviewSlide({ ReviewSelect }) {
  const [sectionAll, setSectionAll] = useState(reviewData);
  const [sectionOne, setSectionOne] = useState([]);
  const [sectionTwo, setSectionTwo] = useState([]);
  const [sectionThree, setSectionThree] = useState([]);
  const [sectionFour, setSectionFour] = useState([]);
  const [sectionFive, setSectionFive] = useState(reviewDataWithURL);

  const [sectionOneUrl, setSectionOneUrl] = useState([]);
  const [sectionTwoUrl, setSectionTwoUrl] = useState([]);
  const [sectionThreeUrl, setSectionThreeUrl] = useState([]);
  const [sectionFourUrl, setSectionFourUrl] = useState([]);
  const [sectionFiveUrl, setSectionFiveUrl] = useState([]);

  useEffect(() => {
    setSectionOne(
      sectionAll.filter((element) => element.course === "게임기획")
    );
    setSectionTwo(
      sectionAll.filter((element) => element.course === "게임프로그래밍")
    );
    setSectionThree(sectionAll.filter((element) => element.course === "VRAR"));
    setSectionFour(
      sectionAll.filter((element) => element.course === "블록체인")
    );
    setSectionFive(
      sectionAll.filter((element) => element.course === "메타버스")
    );
  }, []);
  useEffect(() => {
    setSectionOneUrl(
      sectionFive.filter((element) => element.course === "게임기획")
    );
    setSectionTwoUrl(
      sectionFive.filter((element) => element.course === "게임프로그래밍")
    );
    setSectionThreeUrl(
      sectionFive.filter((element) => element.course === "VRAR")
    );
    setSectionFourUrl(
      sectionFive.filter((element) => element.course === "블록체인")
    );
    setSectionFiveUrl(
      sectionFive.filter((element) => element.course === "메타버스")
    );
  }, []);

  switch (ReviewSelect) {
    case 0:
      return (
        <SlideWrapper>
          <SlideRowWrapper>
            {sectionOne.map((element) => (
              <ReviewPlain
                name={element.name}
                course={element.course}
                text={element.text}
              ></ReviewPlain>
            ))}
          </SlideRowWrapper>
          <SlideRowWrapperTwo>
            {sectionTwoUrl.map((element) => (
              <ReviewVideo
                name={element.name}
                course={element.course}
                text={element.text}
                url={element.url}
              ></ReviewVideo>
            ))}
          </SlideRowWrapperTwo>
        </SlideWrapper>
      );
      break;
    case 1:
      return (
        <SlideWrapper>
          <SlideRowWrapper>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
          </SlideRowWrapper>
          <SlideRowWrapper>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
            <ReviewPlain></ReviewPlain>
          </SlideRowWrapper>
        </SlideWrapper>
      );
      break;
    case 2:
      return (
        <SlideWrapper>
          <SlideRowWrapper>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
          </SlideRowWrapper>
          <SlideRowWrapper>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
            <ReviewPlain></ReviewPlain>
          </SlideRowWrapper>
        </SlideWrapper>
      );
      break;
    case 3:
      return (
        <SlideWrapper>
          <SlideRowWrapper>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
          </SlideRowWrapper>
          <SlideRowWrapper>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
            <ReviewPlain></ReviewPlain>
          </SlideRowWrapper>
        </SlideWrapper>
      );
      break;
    case 4:
      return (
        <SlideWrapper>
          <SlideRowWrapper>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
          </SlideRowWrapper>
          <SlideRowWrapper>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
            <ReviewPlain></ReviewPlain>
          </SlideRowWrapper>
        </SlideWrapper>
      );
      break;
    case 5:
      return (
        <SlideWrapper>
          <SlideRowWrapper>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
          </SlideRowWrapper>
          <SlideRowWrapper>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
            <ReviewPlain></ReviewPlain>
          </SlideRowWrapper>
        </SlideWrapper>
      );
      break;
    case 6:
      return (
        <SlideWrapper>
          <SlideRowWrapper>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
          </SlideRowWrapper>
          <SlideRowWrapper>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
            <ReviewPlain></ReviewPlain>
          </SlideRowWrapper>
        </SlideWrapper>
      );
      break;
    default:
  }
}
