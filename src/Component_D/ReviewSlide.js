import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import ReviewPlain from "./ReviewPlain";
import ReviewVideo from "./ReviewVideo";

import { reviewData, reviewDataWithURL } from "../Data/ReviewData";

import "../Styles/css/App.css";

import Draggable from "react-draggable";

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
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const CaseOneSlideRowWrapper = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const CaseOneSlideRowWrapperTwo = styled.div`
  width: 50.25%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const CaseTwoSlideRowWrapper = styled.div`
  width: 40.5%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const CaseTwoSlideRowWrapperTwo = styled.div`
  width: 40.5%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const CaseThreeSlideRowWrapper = styled.div`
  width: 7.4%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const CaseThreeSlideRowWrapperTwo = styled.div`
  width: 7.4%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const CaseFourSlideRowWrapper = styled.div`
  width: 5.35%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const CaseFourSlideRowWrapperTwo = styled.div`
  width: 5.35%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const CaseFiveSlideRowWrapper = styled.div`
  width: 6%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const CaseFiveSlideRowWrapperTwo = styled.div`
  width: 6%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const CaseSixSlideRowWrapper = styled.div`
  width: 5.8%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const CaseSixSlideRowWrapperTwo = styled.div`
  width: 6.06%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

// Size는 메인 페이지 기준으로 작성해줄 것

export default function ReviewSlide({ ReviewSelect }) {
  const [sectionAll, setSectionAll] = useState([]);
  const [sectionOne, setSectionOne] = useState([]);
  const [sectionTwo, setSectionTwo] = useState([]);
  const [sectionThree, setSectionThree] = useState([]);
  const [sectionFour, setSectionFour] = useState([]);
  const [sectionFive, setSectionFive] = useState([]);
  const [sectionUrl, setSectionUrl] = useState([]);

  const [sectionAllTwo, setSectionAllTwo] = useState([]);
  const [sectionOneTwo, setSectionOneTwo] = useState([]);
  const [sectionTwoTwo, setSectionTwoTwo] = useState([]);
  const [sectionThreeTwo, setSectionThreeTwo] = useState([]);
  const [sectionFourTwo, setSectionFourTwo] = useState([]);
  const [sectionFiveTwo, setSectionFiveTwo] = useState([]);
  const [sectionUrlTwo, setSectionUrlTwo] = useState([]);

  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      container.current.scrollTo(0, Math.random() * 5000);
    }
  }, []);

  useEffect(() => {
    setSectionAll(
      reviewDataWithURL
        .concat(reviewData)
        .slice(0, reviewDataWithURL.concat(reviewData).length / 2)
    );
    setSectionAllTwo(
      reviewDataWithURL
        .concat(reviewData)
        .slice(
          reviewDataWithURL.concat(reviewData).length / 2,
          reviewDataWithURL.concat(reviewData).length
        )
    );
    setSectionOne(
      reviewDataWithURL
        .filter((element) => element.course === "게임기획")
        .concat(reviewData.filter((element) => element.course === "게임기획"))
        .slice(
          0,
          reviewDataWithURL
            .filter((element) => element.course === "게임기획")
            .concat(
              reviewData.filter((element) => element.course === "게임기획")
            ).length / 2
        )
    );
    setSectionOneTwo(
      reviewDataWithURL
        .filter((element) => element.course === "게임기획")
        .concat(reviewData.filter((element) => element.course === "게임기획"))
        .slice(
          reviewDataWithURL
            .filter((element) => element.course === "게임기획")
            .concat(
              reviewData.filter((element) => element.course === "게임기획")
            ).length / 2,
          reviewDataWithURL
            .filter((element) => element.course === "게임기획")
            .concat(
              reviewData.filter((element) => element.course === "게임기획")
            ).length
        )
    );

    setSectionTwo(
      reviewDataWithURL
        .filter((element) => element.course === "게임프로그래밍")
        .concat(
          reviewData.filter((element) => element.course === "게임프로그래밍")
        )
        .slice(
          0,
          reviewDataWithURL
            .filter((element) => element.course === "게임프로그래밍")
            .concat(
              reviewData.filter(
                (element) => element.course === "게임프로그래밍"
              )
            ).length / 2
        )
    );

    setSectionTwoTwo(
      reviewDataWithURL
        .filter((element) => element.course === "게임프로그래밍")
        .concat(
          reviewData.filter((element) => element.course === "게임프로그래밍")
        )
        .slice(
          reviewDataWithURL
            .filter((element) => element.course === "게임프로그래밍")
            .concat(
              reviewData.filter(
                (element) => element.course === "게임프로그래밍"
              )
            ).length / 2,
          reviewDataWithURL
            .filter((element) => element.course === "게임프로그래밍")
            .concat(
              reviewData.filter(
                (element) => element.course === "게임프로그래밍"
              )
            ).length
        )
    );

    setSectionThree(
      reviewDataWithURL
        .filter((element) => element.course === "VRAR")
        .concat(reviewData.filter((element) => element.course === "VRAR"))
        .slice(
          0,
          reviewDataWithURL
            .filter((element) => element.course === "VRAR")
            .concat(reviewData.filter((element) => element.course === "VRAR"))
            .length / 2
        )
    );

    setSectionThreeTwo(
      reviewDataWithURL
        .filter((element) => element.course === "VRAR")
        .concat(reviewData.filter((element) => element.course === "VRAR"))
        .slice(
          reviewDataWithURL
            .filter((element) => element.course === "VRAR")
            .concat(reviewData.filter((element) => element.course === "VRAR"))
            .length / 2,
          reviewDataWithURL
            .filter((element) => element.course === "VRAR")
            .concat(reviewData.filter((element) => element.course === "VRAR"))
            .length
        )
    );

    setSectionFour(
      reviewDataWithURL
        .filter((element) => element.course === "블록체인")
        .concat(reviewData.filter((element) => element.course === "블록체인"))
        .slice(
          0,
          reviewDataWithURL
            .filter((element) => element.course === "블록체인")
            .concat(
              reviewData.filter((element) => element.course === "블록체인")
            ).length / 2
        )
    );

    setSectionFourTwo(
      reviewDataWithURL
        .filter((element) => element.course === "블록체인")
        .concat(reviewData.filter((element) => element.course === "블록체인"))
        .slice(
          reviewDataWithURL
            .filter((element) => element.course === "블록체인")
            .concat(
              reviewData.filter((element) => element.course === "블록체인")
            ).length / 2,
          reviewDataWithURL
            .filter((element) => element.course === "블록체인")
            .concat(
              reviewData.filter((element) => element.course === "블록체인")
            ).length
        )
    );

    setSectionFive(
      reviewDataWithURL
        .filter((element) => element.course === "메타버스")
        .concat(reviewData.filter((element) => element.course === "메타버스"))
        .slice(
          0,
          reviewDataWithURL
            .filter((element) => element.course === "메타버스")
            .concat(
              reviewData.filter((element) => element.course === "메타버스")
            ).length / 2
        )
    );
    setSectionFiveTwo(
      reviewDataWithURL
        .filter((element) => element.course === "메타버스")
        .concat(reviewData.filter((element) => element.course === "메타버스"))
        .slice(
          reviewDataWithURL
            .filter((element) => element.course === "메타버스")
            .concat(
              reviewData.filter((element) => element.course === "메타버스")
            ).length / 2,
          reviewDataWithURL
            .filter((element) => element.course === "메타버스")
            .concat(
              reviewData.filter((element) => element.course === "메타버스")
            ).length
        )
    );

    setSectionUrl(reviewDataWithURL.slice(0, reviewDataWithURL.length / 2));
    setSectionUrlTwo(
      reviewDataWithURL.slice(
        reviewDataWithURL.length / 2,
        reviewDataWithURL.length
      )
    );
  }, []);

  switch (ReviewSelect) {
    case 0:
      return (
        <Draggable axis="x">
          <SlideWrapper>
            <SlideRowWrapper>
              {sectionAll.map((element) =>
                element.url ? (
                  <ReviewVideo
                    name={element.name}
                    course={element.course}
                    text={element.text}
                    url={element.url}
                  ></ReviewVideo>
                ) : (
                  <ReviewPlain
                    name={element.name}
                    course={element.course}
                    text={element.text}
                  ></ReviewPlain>
                )
              )}
            </SlideRowWrapper>

            <SlideRowWrapperTwo>
              {sectionAllTwo.map((element) =>
                element.url ? (
                  <ReviewVideo
                    name={element.name}
                    course={element.course}
                    text={element.text}
                    url={element.url}
                  ></ReviewVideo>
                ) : (
                  <ReviewPlain
                    name={element.name}
                    course={element.course}
                    text={element.text}
                  ></ReviewPlain>
                )
              )}
            </SlideRowWrapperTwo>
          </SlideWrapper>
        </Draggable>
      );
      break;
    case 1:
      return (
        <Draggable axis="x">
          <SlideWrapper>
            <CaseOneSlideRowWrapper>
              {sectionOne.map((element) =>
                element.url ? (
                  <ReviewVideo
                    name={element.name}
                    course={element.course}
                    text={element.text}
                    url={element.url}
                  ></ReviewVideo>
                ) : (
                  <ReviewPlain
                    name={element.name}
                    course={element.course}
                    text={element.text}
                  ></ReviewPlain>
                )
              )}
            </CaseOneSlideRowWrapper>
            <CaseOneSlideRowWrapperTwo>
              {sectionOneTwo.map((element) =>
                element.url ? (
                  <ReviewVideo
                    name={element.name}
                    course={element.course}
                    text={element.text}
                    url={element.url}
                  ></ReviewVideo>
                ) : (
                  <ReviewPlain
                    name={element.name}
                    course={element.course}
                    text={element.text}
                  ></ReviewPlain>
                )
              )}
            </CaseOneSlideRowWrapperTwo>
          </SlideWrapper>
        </Draggable>
      );
      break;
    case 2:
      return (
        <Draggable axis="x">
          <SlideWrapper>
            <CaseTwoSlideRowWrapper>
              {sectionTwo.map((element) =>
                element.url ? (
                  <ReviewVideo
                    name={element.name}
                    course={element.course}
                    text={element.text}
                    url={element.url}
                  ></ReviewVideo>
                ) : (
                  <ReviewPlain
                    name={element.name}
                    course={element.course}
                    text={element.text}
                  ></ReviewPlain>
                )
              )}
            </CaseTwoSlideRowWrapper>
            <CaseTwoSlideRowWrapperTwo>
              {sectionTwoTwo.map((element) =>
                element.url ? (
                  <ReviewVideo
                    name={element.name}
                    course={element.course}
                    text={element.text}
                    url={element.url}
                  ></ReviewVideo>
                ) : (
                  <ReviewPlain
                    name={element.name}
                    course={element.course}
                    text={element.text}
                  ></ReviewPlain>
                )
              )}
            </CaseTwoSlideRowWrapperTwo>
          </SlideWrapper>
        </Draggable>
      );
      break;
    case 3:
      return (
        <Draggable axis="x">
          <SlideWrapper>
            <CaseThreeSlideRowWrapper>
              {sectionThree.map((element) =>
                element.url ? (
                  <ReviewVideo
                    name={element.name}
                    course={element.course}
                    text={element.text}
                    url={element.url}
                  ></ReviewVideo>
                ) : (
                  <ReviewPlain
                    name={element.name}
                    course={element.course}
                    text={element.text}
                  ></ReviewPlain>
                )
              )}
            </CaseThreeSlideRowWrapper>
            <CaseThreeSlideRowWrapperTwo>
              {sectionThreeTwo.map((element) =>
                element.url ? (
                  <ReviewVideo
                    name={element.name}
                    course={element.course}
                    text={element.text}
                    url={element.url}
                  ></ReviewVideo>
                ) : (
                  <ReviewPlain
                    name={element.name}
                    course={element.course}
                    text={element.text}
                  ></ReviewPlain>
                )
              )}
            </CaseThreeSlideRowWrapperTwo>
          </SlideWrapper>
        </Draggable>
      );
      break;
    case 4:
      return (
        <Draggable axis="x">
          <SlideWrapper>
            <CaseFourSlideRowWrapper>
              {sectionFour.map((element) =>
                element.url ? (
                  <ReviewVideo
                    name={element.name}
                    course={element.course}
                    text={element.text}
                    url={element.url}
                  ></ReviewVideo>
                ) : (
                  <ReviewPlain
                    name={element.name}
                    course={element.course}
                    text={element.text}
                  ></ReviewPlain>
                )
              )}
            </CaseFourSlideRowWrapper>
            <CaseFourSlideRowWrapperTwo>
              {sectionFourTwo.map((element) =>
                element.url ? (
                  <ReviewVideo
                    name={element.name}
                    course={element.course}
                    text={element.text}
                    url={element.url}
                  ></ReviewVideo>
                ) : (
                  <ReviewPlain
                    name={element.name}
                    course={element.course}
                    text={element.text}
                  ></ReviewPlain>
                )
              )}
            </CaseFourSlideRowWrapperTwo>
          </SlideWrapper>
        </Draggable>
      );
      break;
    case 5:
      return (
        <Draggable axis="x">
          <SlideWrapper>
            <CaseFiveSlideRowWrapper>
              {sectionFive.map((element) =>
                element.url ? (
                  <ReviewVideo
                    name={element.name}
                    course={element.course}
                    text={element.text}
                    url={element.url}
                  ></ReviewVideo>
                ) : (
                  <ReviewPlain
                    name={element.name}
                    course={element.course}
                    text={element.text}
                  ></ReviewPlain>
                )
              )}
            </CaseFiveSlideRowWrapper>
            <CaseFiveSlideRowWrapperTwo>
              {sectionFiveTwo.map((element) =>
                element.url ? (
                  <ReviewVideo
                    name={element.name}
                    course={element.course}
                    text={element.text}
                    url={element.url}
                  ></ReviewVideo>
                ) : (
                  <ReviewPlain
                    name={element.name}
                    course={element.course}
                    text={element.text}
                  ></ReviewPlain>
                )
              )}
            </CaseFiveSlideRowWrapperTwo>
          </SlideWrapper>
        </Draggable>
      );
      break;
    case 6:
      return (
        <Draggable axis="x">
          <SlideWrapper>
            <CaseSixSlideRowWrapper>
              {sectionUrl.map((element) =>
                element.url ? (
                  <ReviewVideo
                    name={element.name}
                    course={element.course}
                    text={element.text}
                    url={element.url}
                  ></ReviewVideo>
                ) : (
                  <ReviewPlain
                    name={element.name}
                    course={element.course}
                    text={element.text}
                  ></ReviewPlain>
                )
              )}
            </CaseSixSlideRowWrapper>
            <CaseSixSlideRowWrapperTwo>
              {sectionUrlTwo.map((element) =>
                element.url ? (
                  <ReviewVideo
                    name={element.name}
                    course={element.course}
                    text={element.text}
                    url={element.url}
                  ></ReviewVideo>
                ) : (
                  <ReviewPlain
                    name={element.name}
                    course={element.course}
                    text={element.text}
                  ></ReviewPlain>
                )
              )}
            </CaseSixSlideRowWrapperTwo>
          </SlideWrapper>
        </Draggable>
      );
      break;
    default:
  }
}
