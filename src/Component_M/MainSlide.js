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
  font-family: "SEBANG-Gothic-Regular";
  font-size: 2vw;
  color: #101010;
`;

export default function MainSlide() {
  return (
    <SlideWrapper>
      <SlideRowWrapper>
        <ImageContainer></ImageContainer>
        <ContentContainer>
          <TextSizeOne>① 취업률 1위, 상위 0.8%, 89.5%</TextSizeOne>
          <TextSizeOne>8년간 지속해 온 압도적인 교육 성과</TextSizeOne>

          <div style={{ marginTop: "2vw" }}></div>
          <TextSizeTwo>
            KGA의 수준높은 교육, 압도적인 성과는 하루 아침에 완성되지 않습니다.
            8년간 최고의 자리를 지켜왔던 역량과 경험, 아무도 흉내낼 수 없는
            KGA의 강점입니다. 업계가 KGA의 수료생들을 극찬하고 정부가
            우수훈련기관을 인증했습니다. 검증된 커리큘럼, 검증된 관리 기법,
            검증된 취업 지원 노하우. 우리는 청년의 미래로 실험하지 않습니다.
          </TextSizeTwo>
        </ContentContainer>
      </SlideRowWrapper>
      <SlideRowWrapper>
        <ImageContainer></ImageContainer>
        <ContentContainer>
          <TextSizeOne>
            ② 게임 개발, 디지털 아트, 프로게이머, 블록체인,
          </TextSizeOne>
          <TextSizeOne>
            메타버스 시대의 최전선에 서 있는 날카로운 교육 라인업
          </TextSizeOne>

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
        <ImageContainer></ImageContainer>
        <ContentContainer>
          <TextSizeOne>
            ③ 비전공자와 초보자를 위한 교육으로 시작해 전공자들도
          </TextSizeOne>
          <TextSizeOne>만족하는 심화 수준으로 마무리하는 커리큘럼</TextSizeOne>

          <div style={{ marginTop: "2vw" }}></div>
          <TextSizeTwo>
            KGA는 좋은 개발자가 되는 길은 빠르지도, 편하지도 않다고 새각합니다.
            제대로 개발을 배워왔거나 개발의 즐거움을 아는 전공자들도 많지 않다고
            생각합니다. 기초의 기초부터 제대로 가르치고 훈련시키며 학생과 KGA
            멤버가 함께 고생해 가며, 기본기와 경험을 갖춘, 개발의 즐거움을 아는
            이들이 될 수 있도록 만들어 갑니다.
          </TextSizeTwo>
        </ContentContainer>
      </SlideRowWrapper>
    </SlideWrapper>
  );
}
