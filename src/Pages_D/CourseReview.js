import styled from "styled-components";
import "../Styles/css/App.css";
import React, { useState } from "react";

import ReactPlayer from "react-player/youtube";

import VideoCarousel from "../Function/VideoCarousel";
import ReviewCarousel from "../Function/ReviewCarousel";

const ContentsBoxOneContainer = styled.div`
  width: 100%;
  height: 8vw;
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
  height: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxThreeContainer = styled.div`
  width: 100%;
  height: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00ffd6;
`;

const ContentsBoxFourContainer = styled.div`
  width: 100%;
  height: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxFiveContainer = styled.div`
  width: 100%;
  height: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxSixContainer = styled.div`
  width: 100%;
  height: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const VideoPlayWrapper = styled.div`
  width: 50vw;
  height: 30vw;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #101010;
  margin-top: 8vw;
`;

const SelectionButtonSelected = styled.button`
  all: unset;
  cursor: pointer;
  width: 8vw;
  height: 1.8vw;
  background-color: #00887c;
  border-radius: 2vw;
  font-family: "Pretendard-regular";
  font-size: 1.2vw;
  color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  border-color: #00887c;
`;

const SelectionButtonNotSelected = styled.button`
  all: unset;
  cursor: pointer;
  width: 8vw;
  height: 1.8vw;
  background-color: #f6f6f6;
  border-radius: 2vw;
  border-color: #00887c;
  border-width: 0.1vw;
  border: solid;
  font-family: "Pretendard-regular";
  font-size: 1.2vw;
  color: #00887c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextSizeOne = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1.5vw;
  color: #101010;
`;

const TextSizeTwo = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 2vw;
  color: #101010;
`;

const TextSizeThree = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 3vw;
  color: #101010;
  margin-top: 3vw;
`;

const TextSizeFour = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 3vw;
  color: #101010;
  margin-top: 5vw;
`;

const TextSizeFive = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 2vw;
  color: #101010;
  margin-top: 5vw;
`;

const TextSizeSix = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 4vw;
  color: #101010;
`;

const CourseReview = () => {
  const [ReviewSelect, setReviewSelect] = useState(0);
  const [InterviewSelect, setInterviewSelect] = useState(0);
  return (
    <>
      <ContentsBoxOneContainer></ContentsBoxOneContainer>
      <ContentsBoxTwoContainer>
        <VideoPlayWrapper>
          <ReactPlayer
            url="https://youtu.be/dR8YaZLBmTQ"
            width="50vw"
            height="30vw"
          />
        </VideoPlayWrapper>
      </ContentsBoxTwoContainer>
      <ContentsBoxThreeContainer>
        <TextSizeOne>블록체인 코스</TextSizeOne>
        <TextSizeTwo>취업률 90% 달성!</TextSizeTwo>
      </ContentsBoxThreeContainer>
      <ContentsBoxFourContainer>
        <TextSizeThree>KGA 수료생을 선택한 기업</TextSizeThree>
      </ContentsBoxFourContainer>
      <ContentsBoxFiveContainer>
        <TextSizeFour>수강생 후기 인터뷰</TextSizeFour>
        <VideoCarousel></VideoCarousel>
      </ContentsBoxFiveContainer>
      <ContentsBoxSixContainer>
        <TextSizeFive>여러분 또래의 취업 성공담을 확인하세요</TextSizeFive>
        <TextSizeSix>GDB 챌린저 수강후기</TextSizeSix>
        <div
          style={{
            width: "70%",
            height: "5vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
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
            <SelectionButtonSelected onClick={() => setReviewSelect(2)}>
              #프로그래머
            </SelectionButtonSelected>
          ) : (
            <SelectionButtonNotSelected onClick={() => setReviewSelect(2)}>
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
        <ReviewCarousel ReviewSelect={ReviewSelect}></ReviewCarousel>
      </ContentsBoxSixContainer>
    </>
  );
};

export default CourseReview;
