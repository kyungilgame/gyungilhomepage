import styled from "styled-components";
import "../Styles/css/App.css";
import React, { useState } from "react";

import ReactPlayer from "react-player/youtube";

import VideoCarousel from "../Function/VideoCarousel";
import ReviewCarousel from "../Function/ReviewCarousel";

import CompanysLogos from "../Image/CompanysLogos.png";
import Header from "../Component_D/Header";
import Footer from "../Component_D/Footer";

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
  height: 70vw;
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

const TextSizeSix = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 4vw;
  color: #101010;
`;

const CompanyImage = styled.div`
  width: 80vw;
  height: 80vw;
  margin-top: 3vw;
  background-size: 100% 100%;
  background-position: center top;
  background-repeat: no-repeat;
  background-image: url(${CompanysLogos});
`;

const CourseReview = () => {
  const [ReviewSelect, setReviewSelect] = useState(0);

  return (
    <>
      <Header />
      <ContentsBoxOneContainer></ContentsBoxOneContainer>
      <ContentsBoxTwoContainer>
        <VideoPlayWrapper>
          <ReactPlayer
            url="https://youtu.be/n0KEoy53BRw"
            width="50vw"
            height="30vw"
          />
        </VideoPlayWrapper>
      </ContentsBoxTwoContainer>
      <ContentsBoxThreeContainer></ContentsBoxThreeContainer>
      <ContentsBoxFourContainer>
        <TextSizeThree>KGA ???????????? ????????? ??????</TextSizeThree>
        <CompanyImage></CompanyImage>
      </ContentsBoxFourContainer>
      <ContentsBoxFiveContainer>
        <TextSizeFour>????????? ?????? ?????????</TextSizeFour>
        <VideoCarousel></VideoCarousel>
      </ContentsBoxFiveContainer>
      <ContentsBoxSixContainer>
        <TextSizeSix>?????? ?????? ??????</TextSizeSix>
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
              #????????????
            </SelectionButtonSelected>
          ) : (
            <SelectionButtonNotSelected onClick={() => setReviewSelect(1)}>
              #????????????
            </SelectionButtonNotSelected>
          )}
          {ReviewSelect === 2 ? (
            <SelectionButtonSelected onClick={() => setReviewSelect(2)}>
              #???????????????
            </SelectionButtonSelected>
          ) : (
            <SelectionButtonNotSelected onClick={() => setReviewSelect(2)}>
              #???????????????
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
              #????????????
            </SelectionButtonSelected>
          ) : (
            <SelectionButtonNotSelected onClick={() => setReviewSelect(4)}>
              #????????????
            </SelectionButtonNotSelected>
          )}
          {ReviewSelect === 5 ? (
            <SelectionButtonSelected onClick={() => setReviewSelect(5)}>
              #????????????
            </SelectionButtonSelected>
          ) : (
            <SelectionButtonNotSelected onClick={() => setReviewSelect(5)}>
              #????????????
            </SelectionButtonNotSelected>
          )}
          {ReviewSelect === 6 ? (
            <SelectionButtonSelected onClick={() => setReviewSelect(6)}>
              #?????????
            </SelectionButtonSelected>
          ) : (
            <SelectionButtonNotSelected onClick={() => setReviewSelect(6)}>
              #?????????
            </SelectionButtonNotSelected>
          )}
        </div>
        <ReviewCarousel ReviewSelect={ReviewSelect}></ReviewCarousel>
      </ContentsBoxSixContainer>
      <Footer />
    </>
  );
};

export default CourseReview;
