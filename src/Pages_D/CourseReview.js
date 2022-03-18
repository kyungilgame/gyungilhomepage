import styled from "styled-components";
import "../Styles/css/App.css";

import ReactPlayer from "react-player/youtube";

import VideoCarousel from "../Function/VideoCarousel";

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
  height: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxSixContainer = styled.div`
  width: 100%;
  height: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #f6f6f6; */
  background-color: yellow;
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
  font-size: 2vw;
  color: #101010;
  margin-top: 3vw;
`;

const TextSizeFour = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 2vw;
  color: #101010;
  margin-top: 5vw;
`;

const CourseReview = () => {
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
      <ContentsBoxSixContainer></ContentsBoxSixContainer>
    </>
  );
};

export default CourseReview;
