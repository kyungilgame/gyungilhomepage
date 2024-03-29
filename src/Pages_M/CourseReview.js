import styled from "styled-components";
import "../Styles/css/App.css";
import React, { useState } from "react";

import ReactPlayer from "react-player/youtube";

import VideoCarousel from "../Function/VideoCarousel_M";
import ReviewCarousel from "../Function/ReviewCarousel_M";

import ArrowDown from "../Image/ArrowDown.png";
import ArrowUp from "../Image/ArrowUp.png";

import CompanysLogos from "../Image/CompanysLogos.png";
import Footer from "../Component_M/Footer";
import Header from "../Component_M/Header";

const ContentsBoxOneContainer = styled.div`
  width: 100%;
  height: 15vw;
  display: flex;
  position: absolute;
  top: 0;
  z-index: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxTwoContainer = styled.div`
  width: 100%;
  height: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentsBoxThreeContainer = styled.div`
  width: 100%;
  height: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00ffd6;
`;

const ContentsBoxFourContainer = styled.div`
  width: 100%;
  min-height: 12vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxFiveContainer = styled.div`
  width: 100%;
  height: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxSixContainer = styled.div`
  width: 100%;
  height: 110vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const SelectionButtonSelected = styled.button`
  all: unset;
  cursor: pointer;
  width: 15vw;
  height: 5vw;
  background-color: #00887c;
  border-radius: 2vw;
  font-family: "Pretendard-regular";
  font-size: 3vw;
  color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  border-color: #00887c;
  margin-left: 5vw;
`;

const SelectionButtonNotSelected = styled.button`
  all: unset;
  cursor: pointer;
  width: 15vw;
  height: 5vw;
  background-color: #f6f6f6;
  border-radius: 2vw;
  border-color: #00887c;
  border-width: 0.1vw;
  border: solid;
  font-family: "Pretendard-regular";
  font-size: 3vw;
  color: #00887c;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5vw;
`;

const TextSizeOne = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 4vw;
  color: #101010;
`;

const TextSizeTwo = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 5vw;
  color: #101010;
`;

const TextSizeThree = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 4.5vw;
  color: #101010;
  margin-top: 3vw;
`;

const TextSizeFour = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 4vw;
  color: #101010;
  margin-top: 5vw;
`;

const TextSizeFive = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 3vw;
  color: #101010;
  margin-top: 5vw;
`;

const TextSizeSix = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 6vw;
  color: #101010;
  margin-top: 10vw;
`;

const ArrowButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 6vw;
  height: 5vw;
  margin-top: 3.5vw;
  position: absolute;
  right: 10vw;
  background-size: contain;
  background-position: center top;
  background-repeat: no-repeat;
  margin-left: 5vw;
  ${({ Image }) => {
    return Image ? `background-image: url(${Image})` : null;
  }}
`;

const CampanyWrapper = styled.div`
  width: 100%;
  height: 70vw;
  background-color: #f6f6f6;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${CompanysLogos});
`;

const VideoPlayWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  /* background-color: #101010; */
  margin-top: 8vw;
`;

const CourseReview = () => {
  const [ReviewSelect, setReviewSelect] = useState(0);
  const [CompanySelect, setCompanySelect] = useState(false);

  return (
    <>
      <Header />
      <ContentsBoxOneContainer></ContentsBoxOneContainer>
      {/* <ContentsBoxTwoContainer>
        <VideoPlayWrapper>
          <ReactPlayer
            url="https://youtu.be/n0KEoy53BRw"
            width="100%"
            height="85%"
          />
        </VideoPlayWrapper>
      </ContentsBoxTwoContainer> */}
      <ContentsBoxFiveContainer>
        <TextSizeFour style={{ marginBottom: "2vw" }}>
          수강생 후기 인터뷰
        </TextSizeFour>
        <VideoCarousel></VideoCarousel>
      </ContentsBoxFiveContainer>
      <ContentsBoxSixContainer>
        <TextSizeSix>생생 수강 후기</TextSizeSix>
        <div
          style={{
            width: "90%",
            height: "15vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2vw",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "50%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {ReviewSelect === 0 ? (
              <SelectionButtonSelected onClick={() => setReviewSelect(0)}>
                #ALL
              </SelectionButtonSelected>
            ) : (
              <SelectionButtonNotSelected onClick={() => setReviewSelect(0)}>
                #ALL
              </SelectionButtonNotSelected>
            )}
            {ReviewSelect === 1 ? (
              <SelectionButtonSelected onClick={() => setReviewSelect(1)}>
                #게임기획
              </SelectionButtonSelected>
            ) : (
              <SelectionButtonNotSelected onClick={() => setReviewSelect(1)}>
                #게임기획
              </SelectionButtonNotSelected>
            )}
            {ReviewSelect === 2 ? (
              <SelectionButtonSelected
                style={{ fontSize: "2.5vw" }}
                onClick={() => setReviewSelect(2)}
              >
                #프로그래머
              </SelectionButtonSelected>
            ) : (
              <SelectionButtonNotSelected
                style={{ fontSize: "2.5vw" }}
                onClick={() => setReviewSelect(2)}
              >
                #프로그래머
              </SelectionButtonNotSelected>
            )}
            {ReviewSelect === 3 ? (
              <SelectionButtonSelected onClick={() => setReviewSelect(3)}>
                #AR/VR
              </SelectionButtonSelected>
            ) : (
              <SelectionButtonNotSelected onClick={() => setReviewSelect(3)}>
                #AR/VR
              </SelectionButtonNotSelected>
            )}
          </div>
          <div
            style={{
              width: "100%",
              height: "50%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {ReviewSelect === 4 ? (
              <SelectionButtonSelected onClick={() => setReviewSelect(4)}>
                #블록체인
              </SelectionButtonSelected>
            ) : (
              <SelectionButtonNotSelected onClick={() => setReviewSelect(4)}>
                #블록체인
              </SelectionButtonNotSelected>
            )}
            {ReviewSelect === 5 ? (
              <SelectionButtonSelected onClick={() => setReviewSelect(5)}>
                #메타버스
              </SelectionButtonSelected>
            ) : (
              <SelectionButtonNotSelected onClick={() => setReviewSelect(5)}>
                #메타버스
              </SelectionButtonNotSelected>
            )}
            {ReviewSelect === 6 ? (
              <SelectionButtonSelected onClick={() => setReviewSelect(6)}>
                #취업자
              </SelectionButtonSelected>
            ) : (
              <SelectionButtonNotSelected onClick={() => setReviewSelect(6)}>
                #취업자
              </SelectionButtonNotSelected>
            )}
          </div>
        </div>
        <ReviewCarousel ReviewSelect={ReviewSelect}></ReviewCarousel>
      </ContentsBoxSixContainer>
      <ContentsBoxThreeContainer>
        <TextSizeOne>블록체인 코스</TextSizeOne>
        <TextSizeTwo>취업률 91% 달성!</TextSizeTwo>
      </ContentsBoxThreeContainer>
      <ContentsBoxFourContainer>
        <TextSizeThree>KGA 수료생을 선택한 기업</TextSizeThree>

        {CompanySelect === false ? (
          <ArrowButton
            onClick={() =>
              CompanySelect === false
                ? setCompanySelect(true)
                : setCompanySelect(false)
            }
            Image={ArrowDown}
          ></ArrowButton>
        ) : (
          <ArrowButton
            onClick={() =>
              CompanySelect === false
                ? setCompanySelect(true)
                : setCompanySelect(false)
            }
            Image={ArrowUp}
          ></ArrowButton>
        )}
        {CompanySelect && <CampanyWrapper />}
      </ContentsBoxFourContainer>
      <Footer />
    </>
  );
};

export default CourseReview;
