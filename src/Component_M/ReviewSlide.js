import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ReviewPlain from "./ReviewPlain";
import ReviewVideo from "./ReviewVideo";

import { reviewData, reviewDataWithURL } from "../Data/ReviewData";

const SlideWrapper = styled.div`
  width: 100%;
  height: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const SlideColumnWrapper = styled.div`
  width: 12%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10vw;
`;

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
          {sectionOne.map((element) => (
            <SlideColumnWrapper>
              <ReviewPlain
                name={element.name}
                course={element.course}
                text={element.text}
              ></ReviewPlain>
            </SlideColumnWrapper>
          ))}
        </SlideWrapper>
      );
      break;
    case 1:
      return (
        <SlideWrapper>
          <SlideColumnWrapper>
            <ReviewVideo></ReviewVideo>
          </SlideColumnWrapper>
        </SlideWrapper>
      );
      break;
    case 2:
      return (
        <SlideWrapper>
          <SlideColumnWrapper>
            <ReviewVideo></ReviewVideo>
          </SlideColumnWrapper>
        </SlideWrapper>
      );
      break;
    case 3:
      return (
        <SlideWrapper>
          <SlideColumnWrapper>
            <ReviewVideo></ReviewVideo>
          </SlideColumnWrapper>
        </SlideWrapper>
      );
      break;
    case 4:
      return (
        <SlideWrapper>
          <SlideColumnWrapper>
            <ReviewVideo></ReviewVideo>
          </SlideColumnWrapper>
        </SlideWrapper>
      );
      break;
    case 5:
      return (
        <SlideWrapper>
          <SlideColumnWrapper>
            <ReviewVideo></ReviewVideo>
          </SlideColumnWrapper>
        </SlideWrapper>
      );
      break;
    case 6:
      return (
        <SlideWrapper>
          <SlideColumnWrapper>
            <ReviewVideo></ReviewVideo>
          </SlideColumnWrapper>
        </SlideWrapper>
      );
      break;
    default:
  }
}
