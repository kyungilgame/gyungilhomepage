import React from "react";
import styled from "styled-components";

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
`;

const SlideColumnWrapper = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;

const ImageContainer = styled.div`
  width: 90%;
  height: 60%;
  background-color: gray;
  border-radius: 1vw;
`;

const ContentContainer = styled.div`
  width: 90%;
  height: 60%;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`;

const TextSizeOne = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 1.5vw;
  color: #101010;
`;

const TextSizeTwo = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1vw;
  color: #101010;
`;

export default function MainSlide() {
  return (
    <SlideWrapper>
      <SlideColumnWrapper>
        <ImageContainer></ImageContainer>
      </SlideColumnWrapper>
      <SlideColumnWrapper>
        <ContentContainer>
          <TextSizeOne>취업률 1위, 상위 0.8%, 89.5%</TextSizeOne>
          <TextSizeOne>8년간 지속해 온 압도적인 교육 성과</TextSizeOne>
          <div style={{ marginTop: "2vw" }}></div>
          <TextSizeTwo>추가 설명</TextSizeTwo>
        </ContentContainer>
      </SlideColumnWrapper>
      <SlideColumnWrapper>
        <ImageContainer></ImageContainer>
      </SlideColumnWrapper>
      <SlideColumnWrapper>
        <ContentContainer>
          <TextSizeOne>취업률 1위, 상위 0.8%, 89.5%</TextSizeOne>
          <TextSizeOne>8년간 지속해 온 압도적인 교육 성과</TextSizeOne>
          <div style={{ marginTop: "2vw" }}></div>
          <TextSizeTwo>추가 설명</TextSizeTwo>
        </ContentContainer>
      </SlideColumnWrapper>
    </SlideWrapper>
  );
}
