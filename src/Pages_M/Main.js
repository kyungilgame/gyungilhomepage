import styled from "styled-components";
import "../Styles/css/App.css";

import MainCarousel from "../Function/MainCarousel";
import MainReviewCarousel from "../Function/MainReviewCarousel";

import ReactPlayer from "react-player/youtube";

const ContentsBoxOneContainer = styled.div`
  width: 100%;
  height: 60vw;
  display: flex;
  position: absolute;
  top: 0;
  z-index: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: gray;
`;

const ContentsBoxTwoContainer = styled.div`
  width: 100%;
  height: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #00ffd6;
`;

const ContentsBoxThreeContainer = styled.div`
  width: 100%;
  height: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxFourContainer = styled.div`
  width: 100%;
  height: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxFiveContainer = styled.div`
  width: 100%;
  height: 15vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const ContentsBoxSixContainer = styled.div`
  width: 100%;
  height: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxSevenContainer = styled.div`
  width: 100%;
  height: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxEightContainer = styled.div`
  width: 100%;
  height: 55vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxNineContainer = styled.div`
  width: 100%;
  height: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #00ffd6;
`;

const TextSizeOne = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 7.5vw;
  color: #f6f6f6;
  margin-top: 12vw;
`;
const TextSizeTwo = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 4vw;
  color: #f6f6f6;
`;

const TextSizeThree = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 2.7vw;
  color: #101010;
`;

const TextSizeFour = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1.7vw;
  color: #101010;
  margin-top: 63vw;
`;
const TextSizeFive = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 2.5vw;
  color: #101010;
`;

const TextSizeSix = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 2.5vw;
  color: #101010;
`;

const TextSizeSeven = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 3.5vw;
  color: #101010;
`;

const TextSizeEight = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1.5vw;
  color: #00ffd6;
`;

const TextSizeNine = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 3.5vw;
  color: #f6f6f6;
`;

const TextSizeTen = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1vw;
  color: #f6f6f6;
`;

const TextSizeEleven = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1.2vw;
  color: #00ffd6;
`;

const TextSizeTwelve = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1.2vw;
  color: #101010;
`;

const TextSizeThirteen = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 3vw;
  color: #00887c;
`;

const TextSizeFourteen = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 2vw;
  color: #101010;
  margin-top: 8vw;
`;
const TextSizeFifteen = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 3.5vw;
  color: #101010;
`;

const TextSizeSixteen = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1.5vw;
  color: #101010;
  margin-top: 1vw;
`;

const TextSizeSeventeen = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1.5vw;
  color: #101010;
`;

const TextSizeEightteen = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1vw;
  color: #101010;
`;

const TextSizeNineteen = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.5vw;
  color: #101010;
`;

const TextSizeTwenty = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 2vw;
  color: #101010;
  margin-top: 2vw;
`;
const TextSizeTwentyOne = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 3.5vw;
  color: #101010;
`;

const BlackBoxWrapper = styled.div`
  width: 25vw;
  height: 15vw;
  background-color: #101010;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ApplyButton = styled.button`
  width: 15vw;
  height: 2.5vw;
  background-color: #101010;
  border-radius: 1vw;
  border-color: #00ffd6;
  cursor: pointer;
  margin-top: 1.5vw;
`;

const ApplyBlackButton = styled.button`
  all: unset;
  width: 20vw;
  height: 4vw;
  background-color: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MiddleTextBox = styled.div`
  display: flex;
  height: 100%;
  width: 20vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VideoPlayWrapper = styled.div`
  width: 40vw;
  height: 25vw;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #101010;
  margin-top: 4vw;
`;

const ColorBoxWrapper = styled.div`
  width: 20vw;
  height: 15vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: start;
  padding: 2vw;
  ${({ color }) => {
    return color ? `background-color: ${color}` : null;
  }}
`;

const MapWrapper = styled.div`
  width: 60vw;
  height: 40vw;
  background-color: gray;
  margin: 1.5vw;
`;

const Main = () => {
  return (
    <>
      <ContentsBoxOneContainer>
        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
          }}
        >
          <TextSizeOne>KGA</TextSizeOne>
          <TextSizeTwo>
            Kyungil
            <text style={{ color: "#00ffd6" }}>{` `}Game Academy</text>
          </TextSizeTwo>
          <div
            style={{
              width: "44vw",
              height: "3.5vw",
              backgroundColor: "#00ffd6",
              marginTop: "0.5vw",
              marginLeft: "0.5vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextSizeThree>현업인들이 육성하는 최정예 교육기관</TextSizeThree>
          </div>
        </div>
      </ContentsBoxOneContainer>
      <ContentsBoxTwoContainer>
        <TextSizeFour>처음인 당신도 시작할 수 있게</TextSizeFour>
        <TextSizeFive>최고의 개발자로 만들어 드립니다</TextSizeFive>
      </ContentsBoxTwoContainer>
      <div
        style={{
          width: "100%",
          height: "3vw",
          backgroundColor: "#f4f4f4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "0",
            height: "0",
            borderTop: "3vw solid #00ffd6",
            borderBottom: "3vw solid none",
            borderRight: "2vw solid transparent",
            borderLeft: "2vw solid  transparent",
          }}
        ></div>
      </div>
      <ContentsBoxThreeContainer>
        <MainCarousel></MainCarousel>
      </ContentsBoxThreeContainer>
      <ContentsBoxFourContainer>
        <TextSizeSix>KGA와 함께</TextSizeSix>
        <div
          style={{
            width: "40vw",
            height: "4.5vw",
            backgroundColor: "#00ffd6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextSizeSeven>수요 높은 인재로 성장하기</TextSizeSeven>
        </div>
        <div
          style={{
            width: "80vw",
            height: "35vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "2vw",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "50%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <BlackBoxWrapper>
              <TextSizeEight>국가기간전략훈련</TextSizeEight>
              <TextSizeNine>프로그래밍</TextSizeNine>
              <TextSizeTen>손 끝에서 구현되는 Unity 3D 게임</TextSizeTen>
              <ApplyButton>
                <TextSizeEleven>자세히 보기</TextSizeEleven>
              </ApplyButton>
            </BlackBoxWrapper>
            <BlackBoxWrapper>
              <TextSizeEight>국가기간전략훈련</TextSizeEight>
              <TextSizeNine>게임 기획</TextSizeNine>
              <TextSizeTen>게임 시놉시스부터 상용화까지</TextSizeTen>
              <ApplyButton>
                <TextSizeEleven>자세히 보기</TextSizeEleven>
              </ApplyButton>
            </BlackBoxWrapper>
            <BlackBoxWrapper>
              <TextSizeEight>국가기간전략훈련</TextSizeEight>
              <TextSizeNine>AR / VR</TextSizeNine>
              <TextSizeTen>비대면 시대의 핵심 기술</TextSizeTen>
              <ApplyButton>
                <TextSizeEleven>자세히 보기</TextSizeEleven>
              </ApplyButton>
            </BlackBoxWrapper>
          </div>
          <div
            style={{
              width: "67%",
              height: "50%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <BlackBoxWrapper>
              <TextSizeEight>K-디지털 트레이닝</TextSizeEight>
              <TextSizeNine>블록체인</TextSizeNine>
              <TextSizeTen>차별화 된 핀테크 개발자 되기</TextSizeTen>
              <ApplyButton>
                <TextSizeEleven>자세히 보기</TextSizeEleven>
              </ApplyButton>
            </BlackBoxWrapper>
            <BlackBoxWrapper>
              <TextSizeEight>K-디지털 트레이닝</TextSizeEight>
              <TextSizeNine>메타버스</TextSizeNine>
              <TextSizeTen>미래 사회의 새로운 패러다임</TextSizeTen>
              <ApplyButton>
                <TextSizeEleven>자세히 보기</TextSizeEleven>
              </ApplyButton>
            </BlackBoxWrapper>
          </div>
        </div>
      </ContentsBoxFourContainer>
      <ContentsBoxFiveContainer>
        <div
          style={{
            width: "90%",
            height: "15vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <MiddleTextBox>
            <TextSizeTwelve>누적 수강생 수강생</TextSizeTwelve>
            <TextSizeThirteen>10,000명</TextSizeThirteen>
          </MiddleTextBox>
          <MiddleTextBox>
            <TextSizeTwelve>취업률</TextSizeTwelve>
            <TextSizeThirteen>90%</TextSizeThirteen>
          </MiddleTextBox>
          <MiddleTextBox>
            <TextSizeTwelve>전체 평균 연봉</TextSizeTwelve>
            <TextSizeThirteen>3,500만원</TextSizeThirteen>
          </MiddleTextBox>
          <MiddleTextBox>
            <TextSizeTwelve>평균 구직 기간</TextSizeTwelve>
            <TextSizeThirteen>1개월</TextSizeThirteen>
          </MiddleTextBox>
        </div>
      </ContentsBoxFiveContainer>
      <ContentsBoxSixContainer>
        <VideoPlayWrapper>
          <ReactPlayer
            url="https://youtu.be/dR8YaZLBmTQ"
            width="40vw"
            height="25vw"
          />
        </VideoPlayWrapper>
        <TextSizeFourteen>취업 치트키</TextSizeFourteen>
        <TextSizeFifteen>KGA를 선택해야 하는 이유</TextSizeFifteen>
        <div
          style={{
            width: "70%",
            height: "25vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <ColorBoxWrapper color={"#b5fff3"}>
            <div
              style={{
                width: "1.5vw",
                height: "1.5vw",
                backgroundColor: "#101010",
                borderRadius: "2vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#f6f6f6",
              }}
            >
              1
            </div>
            <TextSizeSixteen>프리부트 과정이 필요없는</TextSizeSixteen>
            <TextSizeSeventeen>완성도 높은 커리큘럼</TextSizeSeventeen>
            <div
              style={{
                width: "2vw",
                height: "0.2vw",
                backgroundColor: "#101010",
                marginTop: "1vw",
                marginBottom: "1vw",
              }}
            ></div>
            <TextSizeEightteen>
              아무 것도 몰라도 걱정하지 마세요.
            </TextSizeEightteen>
            <TextSizeEightteen>
              KGA 수강생의 60%가 비전공자입니다.
            </TextSizeEightteen>
          </ColorBoxWrapper>
          <ColorBoxWrapper color={"#73ffe8"}>
            <div
              style={{
                width: "1.5vw",
                height: "1.5vw",
                backgroundColor: "#101010",
                borderRadius: "2vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#f6f6f6",
              }}
            >
              2
            </div>
            <TextSizeSixteen>수강료 부담 없이</TextSizeSixteen>
            <TextSizeSeventeen>무료로 배우세요</TextSizeSeventeen>
            <div
              style={{
                width: "2vw",
                height: "0.2vw",
                backgroundColor: "#101010",
                marginTop: "1vw",
                marginBottom: "1vw",
              }}
            ></div>
            <TextSizeEightteen>
              당신의 꿈을 비용없이 이루세요.
            </TextSizeEightteen>
          </ColorBoxWrapper>
          <ColorBoxWrapper color={"#00ffd6"}>
            <div
              style={{
                width: "1.5vw",
                height: "1.5vw",
                backgroundColor: "#101010",
                borderRadius: "2vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#f6f6f6",
              }}
            >
              3
            </div>
            <TextSizeSixteen>취업할 때까지</TextSizeSixteen>
            <TextSizeSeventeen>책임집니다</TextSizeSeventeen>
            <div
              style={{
                width: "2vw",
                height: "0.2vw",
                backgroundColor: "#101010",
                marginTop: "1vw",
                marginBottom: "1vw",
              }}
            ></div>
            <TextSizeEightteen>탄탄한 취업 프로젝트로</TextSizeEightteen>
            <TextSizeEightteen>
              어떻게든 개발자로 만들어 드립니다.
            </TextSizeEightteen>
          </ColorBoxWrapper>
        </div>
        <ApplyBlackButton>
          <text
            style={{
              color: "#f6f6f6",
              fontFamily: "SEBANG-Gothic-Bold",
              fontSize: "1.7vw",
            }}
          >
            상담 신청하기
          </text>
          <text
            style={{
              color: "#f6f6f6",
              fontFamily: "SEBANG-Gothic-Bold",
              fontSize: "1.7vw",
              marginLeft: "1.5vw",
            }}
          >{`>`}</text>
        </ApplyBlackButton>
      </ContentsBoxSixContainer>
      <ContentsBoxSevenContainer>
        <MainReviewCarousel></MainReviewCarousel>
      </ContentsBoxSevenContainer>
      <ContentsBoxEightContainer>
        <TextSizeFifteen>KGA 오시는 길</TextSizeFifteen>
        <MapWrapper></MapWrapper>
        <TextSizeNineteen>
          서울시 강동구 올림픽로 651 예경빌딩 4층 경일게임아카데미
        </TextSizeNineteen>
        <TextSizeNineteen>
          천호역 2번 출구에서 도보 20m | 02-479-4050
        </TextSizeNineteen>
      </ContentsBoxEightContainer>
      <ContentsBoxNineContainer>
        <TextSizeTwenty>IT 인재로 급성장</TextSizeTwenty>
        <TextSizeTwentyOne>KGA와 함께라면 가능합니다</TextSizeTwentyOne>
        <ApplyBlackButton>
          <text
            style={{
              color: "#f6f6f6",
              fontFamily: "SEBANG-Gothic-Bold",
              fontSize: "1.7vw",
            }}
          >
            지원하러가기
          </text>
          <text
            style={{
              color: "#f6f6f6",
              fontFamily: "SEBANG-Gothic-Bold",
              fontSize: "1.7vw",
              marginLeft: "1.5vw",
            }}
          >{`>`}</text>
        </ApplyBlackButton>
      </ContentsBoxNineContainer>
    </>
  );
};

export default Main;
