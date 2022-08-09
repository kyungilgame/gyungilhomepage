import React from "react";
import styled from "styled-components";

import MainCarouselImageOne from "../Image/Photo/MainCarouselImageOne.png";
import MainCarouselImageTwo from "../Image/Photo/MainCarouselImageTwo.png";
import MainCarouselImageThree from "../Image/Photo/MainCarouselImageThree.png";

import Draggable from "react-draggable";

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
`;

const SlideRowWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #f6f6f6;
`;

const ImageContainer = styled.div`
  width: 90%;
  height: 55%;
  background-color: gray;
  border-radius: 3vw;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  ${({ Image }) => {
    return Image ? `background-image: url(${Image})` : null;
  }}
`;

const ContentContainer = styled.div`
  width: 90%;
  height: 40%;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TextSizeOne = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 2vw;
  color: #101010;
`;

const TextSizeTwo = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 2vw;
  color: #101010;
`;

export default function MainSlide() {
  return (
    <Draggable axis="none">
      <SlideWrapper>
        <SlideRowWrapper>
          <ImageContainer Image={MainCarouselImageOne}></ImageContainer>
          <ContentContainer>
            <TextSizeOne></TextSizeOne>
            <TextSizeOne>4차 산업 혁명이 불러온 변화 - 블록체인 </TextSizeOne>
            <div style={{ marginTop: "2vw" }}></div>
            <TextSizeTwo>
              블록체인 기술이 현재 IT 업종은 물론 다양한 사업 분야에서 혁신을
              이루고 있습니다. 수많은 대기업이 블록체인 기술을 앞다투어 활용하고
              있으며, 2021년 블록체인 관련 채용 비중이 전년 대비 385% 이상
              증가했습니다. 경일게임아카데미에서는 블록체인 기술 개발 과정을
              통해 국내에 경쟁력 있는 개발자를 양성하고 현업에 가장 많은
              취업률을 기록하고 있습니다.
            </TextSizeTwo>
          </ContentContainer>
        </SlideRowWrapper>
        <SlideRowWrapper>
          <ImageContainer Image={MainCarouselImageTwo}></ImageContainer>
          <ContentContainer>
            <TextSizeOne>변화의 최전선에 서 있는 교육 라인업</TextSizeOne>
            <div style={{ marginTop: "2vw" }}></div>
            <TextSizeTwo>
              KGA에게 직업은 단지 돈의 문제가 아닙니다. 미래가 있는 직업, 창작을
              통한 자아실현과 성취가 가능한 직업, 시대가 필요로 하는 직업. KGA는
              시대의 최전방에서 원하는 직업군의 교육을 항상 날카로운 시각으로
              탐색하고 개발해 최선의 해법을 찾아가고 있습니다.
            </TextSizeTwo>
          </ContentContainer>
        </SlideRowWrapper>
        <SlideRowWrapper>
          <ImageContainer Image={MainCarouselImageThree}></ImageContainer>
          <ContentContainer>
            <TextSizeOne>기초부터 실무까지 완벽 커리큘럼</TextSizeOne>
            <div style={{ marginTop: "2vw" }}></div>
            <TextSizeTwo>
              KGA는 좋은 개발자가 되는 길은 빠르지도, 편하지도 않다고
              생각합니다. 제대로 개발을 배워왔거나 개발의 즐거움을 아는
              전공자들도 많지 않다고 생각합니다. 기초의 기초부터 제대로 가르치고
              훈련시키며 학생과 KGA 멤버가 함께 고생해 가며, 기본기와 경험을
              갖춘, 개발의 즐거움을 아는 이들이 될 수 있도록 만들어 갑니다.
            </TextSizeTwo>
          </ContentContainer>
        </SlideRowWrapper>
      </SlideWrapper>
    </Draggable>
  );
}
