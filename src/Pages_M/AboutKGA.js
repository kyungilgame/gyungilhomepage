import styled from "styled-components";
import "../Styles/css/App.css";

import AboutKGACarousel_M from "../Function/AboutKGACarousel_M";

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
  height: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #00ffd6;
`;

const ContentsBoxThreeContainer = styled.div`
  width: 100%;
  height: 120vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxFourContainer = styled.div`
  width: 100%;
  height: 120vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const ContentsBoxFiveContainer = styled.div`
  width: 100%;
  height: 45vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;

const TextSizeOne = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 6vw;
  color: #101010;
  margin-top: 25vw;
`;

const TextSizeTwo = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 2.5vw;
  color: #101010;
`;

const TextSizeThree = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 5.5vw;
  color: #00887c;
  margin-top: 5vw;
`;

const TextSizeFour = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 2vw;
  color: #101010;
`;
const TextSizeFive = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1.5vw;
  color: #101010;
`;

const TextSizeSix = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1vw;
  color: #101010;
`;

const TextSizeSeven = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 6vw;
  color: #101010;
  margin-top: 5vw;
`;

const IntroduceBox = styled.div`
  width: 60vw;
  height: 20vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: right;
`;
const IntroduceBoxInnerWrapper = styled.div`
  width: 50vw;
  height: 12vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  margin-left: 1vw;
  margin-right: 1vw;
`;

const IntroduceBoxImage = styled.div`
  width: 10vw;
  height: 10vw;
  background-color: #f0f0f0;
  border-radius: 5vw;
`;

const AboutKGA = () => {
  return (
    <>
      <ContentsBoxOneContainer></ContentsBoxOneContainer>
      <ContentsBoxTwoContainer>
        <TextSizeOne>ABOUT KGA</TextSizeOne>
        <TextSizeTwo style={{ marginTop: "1vw" }}>
          게임업계를 가면 비전이 없다고 손가락질 받던 시절부터,
        </TextSizeTwo>
        <TextSizeTwo>
          VR/AR이 메타버스라는 새로운 시대의 흐름을 만나기 훨씬 이전부터,
        </TextSizeTwo>
        <TextSizeTwo>
          블록체인은 미래가 없는 기술이라며 외면 받던 시절부터,
        </TextSizeTwo>
        <TextSizeTwo>
          우리는 미래의 새로운 길을 열어갈 IT 콘텐츠 분야의 직업교육을
        </TextSizeTwo>
        <TextSizeTwo>
          묵묵히 수행해 오며성공과 실패, 시행착오와 좌절,
        </TextSizeTwo>
        <TextSizeTwo>
          그리고 도전을 통해 인재들이 가야 할 길을 닦고 만들어 왔습니다.
        </TextSizeTwo>
        <TextSizeTwo style={{ marginTop: "2vw" }}>
          우리는 청년들이 미래의 IT 업계와 콘텐츠 업계를 이끌어가 인정받을 수
          있도록
        </TextSizeTwo>
        <TextSizeTwo>끊임없이 노력할 것입니다.</TextSizeTwo>
      </ContentsBoxTwoContainer>
      <ContentsBoxThreeContainer>
        <TextSizeThree>KGA를 만든 사람들</TextSizeThree>
        <AboutKGACarousel_M first={true}></AboutKGACarousel_M>
      </ContentsBoxThreeContainer>
      <ContentsBoxFourContainer>
        <TextSizeSeven>KGA Teammates</TextSizeSeven>
        <AboutKGACarousel_M first={false}></AboutKGACarousel_M>
      </ContentsBoxFourContainer>
      <ContentsBoxFiveContainer>
        <div
          style={{
            width: "100%",
            height: "45vw",
            backgroundColor: "lightgray",
          }}
        ></div>
      </ContentsBoxFiveContainer>
    </>
  );
};

export default AboutKGA;
