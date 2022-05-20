import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ReviewPlain from "./ReviewPlain";
import ReviewVideo from "./ReviewVideo";

import { reviewData, reviewDataWithURL } from "../Data/ReviewData";

import Draggable, { DraggableCore } from "react-draggable";

const SlideWrapper = styled.div`
  width: 100%;
  height: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const SlideColumnWrapper = styled.div`
  width: 0.5%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10vw;
`;

const SlideColumnWrapperOne = styled.div`
  width: 0.13%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10vw;
`;

const SlideColumnWrapperTwo = styled.div`
  width: 0.1307%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10vw;
`;

const SlideColumnWrapperThree = styled.div`
  width: 0.1307%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10vw;
`;

const SlideColumnWrapperFour = styled.div`
  width: 0.135%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10vw;
`;

const SlideColumnWrapperFive = styled.div`
  width: 0.1307%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10vw;
`;

const SlideColumnWrapperSix = styled.div`
  width: 0.1307%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10vw;
`;

export default function ReviewSlide({ ReviewSelect }) {
  const [sectionAll, setSectionAll] = useState([]);
  const [sectionOne, setSectionOne] = useState([]);
  const [sectionTwo, setSectionTwo] = useState([]);
  const [sectionThree, setSectionThree] = useState([]);
  const [sectionFour, setSectionFour] = useState([]);
  const [sectionFive, setSectionFive] = useState([]);
  const [sectionUrl, setSectionUrl] = useState([]);

  useEffect(() => {
    setSectionAll(reviewDataWithURL.concat(reviewData));

    setSectionOne(
      reviewDataWithURL
        .filter((element) => element.course === "게임기획")
        .concat(reviewData.filter((element) => element.course === "게임기획"))
    );
    setSectionTwo(
      reviewDataWithURL
        .filter((element) => element.course === "게임프로그래밍")
        .concat(
          reviewData.filter((element) => element.course === "게임프로그래밍")
        )
    );
    setSectionThree(
      reviewDataWithURL
        .filter((element) => element.course === "VRAR")
        .concat(reviewData.filter((element) => element.course === "VRAR"))
    );
    setSectionFour(
      reviewDataWithURL
        .filter((element) => element.course === "블록체인")
        .concat(reviewData.filter((element) => element.course === "블록체인"))
    );
    setSectionFive(
      reviewDataWithURL
        .filter((element) => element.course === "메타버스")
        .concat(reviewData.filter((element) => element.course === "메타버스"))
    );
    setSectionUrl(reviewDataWithURL);
  }, []);

  switch (ReviewSelect) {
    case 0:
      return (
        <Draggable axis="x">
          <SlideWrapper>
            {sectionAll.map((element) =>
              element.url ? (
                <SlideColumnWrapper>
                  <ReviewVideo
                    name={element.name}
                    course={element.course}
                    text={element.text}
                    url={element.url}
                  ></ReviewVideo>
                </SlideColumnWrapper>
              ) : (
                <SlideColumnWrapper>
                  <ReviewPlain
                    name={element.name}
                    course={element.course}
                    text={element.text}
                  ></ReviewPlain>
                </SlideColumnWrapper>
              )
            )}
          </SlideWrapper>
        </Draggable>
      );
      break;
    case 1:
      return (
        <SlideWrapper>
          {sectionOne.map((element) =>
            element.url ? (
              <SlideColumnWrapperOne>
                <ReviewVideo
                  name={element.name}
                  course={element.course}
                  text={element.text}
                  url={element.url}
                ></ReviewVideo>
              </SlideColumnWrapperOne>
            ) : (
              <SlideColumnWrapperOne>
                <ReviewPlain
                  name={element.name}
                  course={element.course}
                  text={element.text}
                ></ReviewPlain>
              </SlideColumnWrapperOne>
            )
          )}
        </SlideWrapper>
      );
      break;
    case 2:
      return (
        <SlideWrapper>
          {sectionTwo.map((element) =>
            element.url ? (
              <SlideColumnWrapperTwo>
                <ReviewVideo
                  name={element.name}
                  course={element.course}
                  text={element.text}
                  url={element.url}
                ></ReviewVideo>
              </SlideColumnWrapperTwo>
            ) : (
              <SlideColumnWrapperTwo>
                <ReviewPlain
                  name={element.name}
                  course={element.course}
                  text={element.text}
                ></ReviewPlain>
              </SlideColumnWrapperTwo>
            )
          )}
        </SlideWrapper>
      );
      break;
    case 3:
      return (
        <SlideWrapper>
          {sectionThree.map((element) =>
            element.url ? (
              <SlideColumnWrapperThree>
                <ReviewVideo
                  name={element.name}
                  course={element.course}
                  text={element.text}
                  url={element.url}
                ></ReviewVideo>
              </SlideColumnWrapperThree>
            ) : (
              <SlideColumnWrapperThree>
                <ReviewPlain
                  name={element.name}
                  course={element.course}
                  text={element.text}
                ></ReviewPlain>
              </SlideColumnWrapperThree>
            )
          )}
        </SlideWrapper>
      );
      break;
    case 4:
      return (
        <SlideWrapper>
          {sectionFour.map((element) =>
            element.url ? (
              <SlideColumnWrapperFour>
                <ReviewVideo
                  name={element.name}
                  course={element.course}
                  text={element.text}
                  url={element.url}
                ></ReviewVideo>
              </SlideColumnWrapperFour>
            ) : (
              <SlideColumnWrapperFour>
                <ReviewPlain
                  name={element.name}
                  course={element.course}
                  text={element.text}
                ></ReviewPlain>
              </SlideColumnWrapperFour>
            )
          )}
        </SlideWrapper>
      );
      break;
    case 5:
      return (
        <SlideWrapper>
          {sectionFive.map((element) =>
            element.url ? (
              <SlideColumnWrapperFive>
                <ReviewVideo
                  name={element.name}
                  course={element.course}
                  text={element.text}
                  url={element.url}
                ></ReviewVideo>
              </SlideColumnWrapperFive>
            ) : (
              <SlideColumnWrapperFive>
                <ReviewPlain
                  name={element.name}
                  course={element.course}
                  text={element.text}
                ></ReviewPlain>
              </SlideColumnWrapperFive>
            )
          )}
        </SlideWrapper>
      );
      break;
    case 6:
      return (
        <SlideWrapper>
          {sectionUrl.map((element) =>
            element.url ? (
              <SlideColumnWrapperSix>
                <ReviewVideo
                  name={element.name}
                  course={element.course}
                  text={element.text}
                  url={element.url}
                ></ReviewVideo>
              </SlideColumnWrapperSix>
            ) : (
              <SlideColumnWrapperSix>
                <ReviewPlain
                  name={element.name}
                  course={element.course}
                  text={element.text}
                ></ReviewPlain>
              </SlideColumnWrapperSix>
            )
          )}
        </SlideWrapper>
      );
      break;
    default:
  }
}
