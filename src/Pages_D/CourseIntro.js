import styled from "styled-components";
import "../Styles/css/App.css";

import backImage_blockchain from "../Image/backImage_blockchain.png";
import backImage_metabus from "../Image/backImage_metabus.png";
import backImage_planing from "../Image/backImage_planing.png";
import backImage_programing from "../Image/backImage_programing.png";
import backImage_VRAR from "../Image/backImage_VRAR.png";

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
  height: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxThreeContainer = styled.div`
  width: 100%;
  height: 65vw;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CourseWrapper = styled.div`
  width: 30vw;
  height: 15vw;
  background-color: #f6f6f6;
  box-shadow: 0.2vw 0.2vw 0.2vw 0.2vw lightgray;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ image }) => {
    return image ? `background-image: url(${image})` : null;
  }}
`;

const CourseWrapperEmpty = styled.div`
  width: 30vw;
  height: 15vw;
  background-color: #f0f0f0;
`;

const CourseLineContainer = styled.div`
  width: 65vw;
  height: 17vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const TextSizeOne = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 4vw;
  color: #00887c;
  margin-top: 12vw;
`;

const TextSizeTwo = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.1vw;
  color: #101010;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const TextSizeThree = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 2.5vw;
  color: #00887c;
`;

const TextSizeFour = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1.5vw;
  color: #101010;
`;

const TextSizeFive = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 0.8vw;
  color: #101010;
`;

const ApplyButton = styled.button`
  all: unset;
  width: 21vw;
  height: 2vw;
  background-color: #00887c;
  border-radius: 1vw;
  color: #f6f6f6;
  font-family: "SEBANG-Gothic-Regular";
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5vw;
  cursor: pointer;
`;

const CourseIntro = () => {
  return (
    <>
      <ContentsBoxOneContainer></ContentsBoxOneContainer>
      <ContentsBoxTwoContainer>
        <TextSizeOne>KGA SYSTEM</TextSizeOne>
        <TextSizeTwo marginTop={"1vw"}>
          KGA 부트캠프는 실력있는 개발자를 양성하는 최고의 부트캠프 코스입니다.
        </TextSizeTwo>
        <TextSizeTwo>
          짧게는 5개월, 길게는 9개월 동안 검증된 퀄리티의 수준 높은 교육이
          진행되며, 교육 이후에는 최대 6개월 동안 취업에 대한 지원을 받을 수
          있습니다.
        </TextSizeTwo>
        <TextSizeTwo marginTop={"2vw"}>
          부트캠프 교육과정은 매주 새롭게 주어지는 학습 컨텐츠와 프로젝트 형식의
          과제를 기반으로 실무적인 기술들을 익히며 업계 최고 수준의 주니어
          개발자로 성장하게 됩니다.
        </TextSizeTwo>
        <TextSizeTwo>
          학습 컨텐츠 및 과제는 현직의 기술 트렌드를 반영하여 매 기수마다 꾸준히
          업데이트 됩니다.
        </TextSizeTwo>
        <TextSizeTwo marginTop={"2vw"}>
          수강생들은 매일 오전 주어진 문제를 해결하며 기초를 다지고, 오후
          시간에는 자습을 진행하는데 대부분의 시간을 투자합니다.
        </TextSizeTwo>
        <TextSizeTwo>
          앞으로의 학습 방향성을 체트하며, 과제 진행 중 문제가 있을 땐 상주하는
          멘토와 함께 문제를 해결합니다.
        </TextSizeTwo>
        <TextSizeTwo>
          1:1 퍼스널 멘토링을 통해 개별적인 학습방향에 대한 조언을 구할 수
          있습니다.
        </TextSizeTwo>
        <TextSizeTwo marginTop={"2vw"}>
          부트캠프 기수당 수강생은 30명 수준으로 진행하고 있습니다.
        </TextSizeTwo>
      </ContentsBoxTwoContainer>
      <ContentsBoxThreeContainer>
        <CourseLineContainer>
          <CourseWrapper image={backImage_programing}>
            <div
              style={{
                width: "20vw",
                height: "2vw",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <TextSizeFour>Course</TextSizeFour>
            </div>
            <div
              style={{
                width: "20vw",
                height: "4vw",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <TextSizeThree>프로그래밍</TextSizeThree>
            </div>
            <div
              style={{
                width: "20vw",
                height: "1.1vw",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <TextSizeFive>
                게임 프로그래머 커리어를 바로 시작할 수 있는 부트캠프
              </TextSizeFive>
            </div>
            <ApplyButton as={"a"} href={"/"}>
              바로가기
            </ApplyButton>
          </CourseWrapper>
          <CourseWrapper image={backImage_planing}>
            <div
              style={{
                width: "20vw",
                height: "2vw",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <TextSizeFour>Course</TextSizeFour>
            </div>
            <div
              style={{
                width: "20vw",
                height: "4vw",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <TextSizeThree>게임기획</TextSizeThree>
            </div>
            <div
              style={{
                width: "20vw",
                height: "1.1vw",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <TextSizeFive>
                게임 기획자 지망생이 반드시 거쳐야 할 코스
              </TextSizeFive>
            </div>
            <ApplyButton as={"a"} href={"/"}>
              바로가기
            </ApplyButton>
          </CourseWrapper>
        </CourseLineContainer>
        <CourseLineContainer>
          <CourseWrapper image={backImage_VRAR}>
            <div
              style={{
                width: "20vw",
                height: "2vw",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <TextSizeFour>Course</TextSizeFour>
            </div>
            <div
              style={{
                width: "20vw",
                height: "4vw",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <TextSizeThree>AR / VR</TextSizeThree>
            </div>
            <div
              style={{
                width: "20vw",
                height: "1.1vw",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <TextSizeFive>
                비대면 시대 가장 채용 수요가 높은 개발자로 성장하기
              </TextSizeFive>
            </div>
            <ApplyButton as={"a"} href={"/"}>
              바로가기
            </ApplyButton>
          </CourseWrapper>
          <CourseWrapper image={backImage_blockchain}>
            <div
              style={{
                width: "20vw",
                height: "2vw",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <TextSizeFour>Course</TextSizeFour>
            </div>
            <div
              style={{
                width: "20vw",
                height: "4vw",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <TextSizeThree>블록체인</TextSizeThree>
            </div>
            <div
              style={{
                width: "20vw",
                height: "1.1vw",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <TextSizeFive>
                기초부터 탄탄한 블록체인 선두주자 되기
              </TextSizeFive>
            </div>
            <ApplyButton as={"a"} href={"/"}>
              바로가기
            </ApplyButton>
          </CourseWrapper>
        </CourseLineContainer>
        <CourseLineContainer>
          <CourseWrapper image={backImage_metabus}>
            <div
              style={{
                width: "20vw",
                height: "2vw",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <TextSizeFour>Course</TextSizeFour>
            </div>
            <div
              style={{
                width: "20vw",
                height: "4vw",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <TextSizeThree>메타버스</TextSizeThree>
            </div>
            <div
              style={{
                width: "20vw",
                height: "1.1vw",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <TextSizeFive>
                4차 산업 기술의 정점에 선 넓고 높은 시야의 파이어니어
              </TextSizeFive>
            </div>
            <ApplyButton as={"a"} href={"/"}>
              바로가기
            </ApplyButton>
          </CourseWrapper>
          <CourseWrapperEmpty></CourseWrapperEmpty>
        </CourseLineContainer>
      </ContentsBoxThreeContainer>
    </>
  );
};

export default CourseIntro;
