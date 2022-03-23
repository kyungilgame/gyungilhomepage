import styled from "styled-components";
import "../Styles/css/App.css";

import IntroductionCarousel from "../Function/IntroductionCarousel";

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
  height: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #00ffd6;
`;

const ContentsBoxThreeContainer = styled.div`
  width: 100%;
  height: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxFourContainer = styled.div`
  width: 100%;
  height: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const ContentsBoxFiveContainer = styled.div`
  width: 100%;
  height: 20vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;

const TextSizeOne = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 4vw;
  color: #101010;
  margin-top: 12vw;
`;

const TextSizeTwo = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.1vw;
  color: #101010;
`;

const TextSizeThree = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 4vw;
  color: #00887c;
  margin-top: 5vw;
  margin-bottom: 3vw;
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
  font-size: 4vw;
  color: #101010;
  margin-top: 5vw;
  margin-bottom: 2vw;
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
          우리는 미래의 새로운 길을 열어갈 IT 콘텐츠 분야의 직업교육을 묵묵히
          수행해 오며
        </TextSizeTwo>
        <TextSizeTwo>
          성공과 실패, 시행착오와 좌절, 그리고 도전을 통해 인재들이 가야 할 길을
          닦고 만들어 왔습니다.
        </TextSizeTwo>
        <TextSizeTwo>
          우리는 청년들이 미래의 IT 업계와 콘텐츠 업계를 이끌어가 인정받을 수
          있도록 끊임없이 노력할 것입니다.
        </TextSizeTwo>
      </ContentsBoxTwoContainer>
      <ContentsBoxThreeContainer>
        <TextSizeThree>KGA를 만든 사람들</TextSizeThree>
        <IntroduceBox style={{ justifyContent: "flex-end" }}>
          <IntroduceBoxImage></IntroduceBoxImage>
          <IntroduceBoxInnerWrapper>
            <TextSizeFour>박병준</TextSizeFour>
            <TextSizeFive>대표</TextSizeFive>
            <TextSizeSix style={{ marginTop: "1vw" }}>
              직업 교육에 거대한 변화의 물결이 오고 있습니다. 이 거대한 변화의
              물결에 KGA가 다시 한번 항해의 닻을
            </TextSizeSix>
            <TextSizeSix>
              올렸습니다. 지금까지 이룬 것들이 최선이라 자만하지 않고 늘
              고민하고 연구하며 계속 답을 찾아가려고
            </TextSizeSix>
            <TextSizeSix>
              합니다. 그러나 우리의 목표는 변함없습니다. 이 시대에 선한 영향력을
              흘려 보내는 기업, 이 변화를 이끌어가는
            </TextSizeSix>
            <TextSizeSix>
              기업으로 나아가고자 합니다. 그리고 함께 답을 찾아가는데 늘
              열려있습니다.
            </TextSizeSix>
          </IntroduceBoxInnerWrapper>
        </IntroduceBox>
        <IntroduceBox>
          <IntroduceBoxInnerWrapper style={{ alignItems: "end" }}>
            <TextSizeFour>양현석</TextSizeFour>
            <TextSizeFive>원장</TextSizeFive>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "left",
              }}
            >
              <TextSizeSix style={{ marginTop: "1vw" }}>
                20년이 넘는 기간 동안 현장과 교육계에서 활동했습니다.
                게임/블록체인/메타버스가 사람들의 삶의 경험을
              </TextSizeSix>
              <TextSizeSix>
                바꾸어 나가는 21세기의 예술이자 철학이 될 수 있다고 생각합니다.
                교육자로서의 정체성과 콘텐츠
              </TextSizeSix>
              <TextSizeSix>
                크리에이터로서의 정체성 모두를 유지하고자 날마다 고군분투
                중이며, KGA의 모든 멤버들도 현업에 강한
              </TextSizeSix>
              <TextSizeSix>사명감 있는 교육자로 만들기를 원합니다.</TextSizeSix>
            </div>
          </IntroduceBoxInnerWrapper>
          <IntroduceBoxImage></IntroduceBoxImage>
        </IntroduceBox>
        <IntroduceBox style={{ justifyContent: "flex-end" }}>
          <IntroduceBoxImage></IntroduceBoxImage>
          <IntroduceBoxInnerWrapper>
            <TextSizeFour>김재연</TextSizeFour>
            <TextSizeFive>부원장</TextSizeFive>
            <TextSizeSix style={{ marginTop: "1vw" }}>
              게임 개발과 인연을 맺은 지 어느덧 30년, 우리나라 게임 기획자의
              1%가 저의 제자입니다. 항상 연구하고
            </TextSizeSix>
            <TextSizeSix>
              시행착오를 극복하기 위해 노력했기에 가능했습니다. 인생의 중요한
              시기에 취업을 위해 KGA를 찾아오는
            </TextSizeSix>
            <TextSizeSix>
              학생들의 간절함을 이해 합니다. 그렇기에 "저는 KGA에서 교육을
              받았습니다"라는 취업 만능 열쇠를 만듭니다.
            </TextSizeSix>
          </IntroduceBoxInnerWrapper>
        </IntroduceBox>
        <IntroduceBox>
          <IntroduceBoxInnerWrapper style={{ alignItems: "end" }}>
            <TextSizeFour>서혁준</TextSizeFour>
            <TextSizeFive>부원장</TextSizeFive>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "left",
              }}
            >
              <TextSizeSix style={{ marginTop: "1vw" }}>
                게임 개발과 인연을 맺은 지 어느덧 30년, 우리나라 게임 기획자의
                1%가 저의 제자입니다. 항상 연구하고
              </TextSizeSix>
              <TextSizeSix>
                시행착오를 극복하기 위해 노력했기에 가능했습니다. 인생의 중요한
                시기에 취업을 위해 KGA를 찾아오는
              </TextSizeSix>
              <TextSizeSix>
                학생들의 간절함을 이해 합니다. 그렇기에 "저는 KGA에서 교육을
                받았습니다"라는 취업 만능 열쇠를 만듭니다.
              </TextSizeSix>
            </div>
          </IntroduceBoxInnerWrapper>
          <IntroduceBoxImage></IntroduceBoxImage>
        </IntroduceBox>
      </ContentsBoxThreeContainer>
      <ContentsBoxFourContainer>
        <TextSizeSeven>KGA Teammates</TextSizeSeven>
        <IntroductionCarousel></IntroductionCarousel>
      </ContentsBoxFourContainer>
      <ContentsBoxFiveContainer>
        <div
          style={{ width: "25%", height: "20vw", backgroundColor: "#f6f6f6" }}
        ></div>
        <div
          style={{ width: "25%", height: "20vw", backgroundColor: "#f0f0f0" }}
        ></div>
        <div
          style={{ width: "25%", height: "20vw", backgroundColor: "lightgray" }}
        ></div>
        <div
          style={{ width: "25%", height: "20vw", backgroundColor: "gray" }}
        ></div>
      </ContentsBoxFiveContainer>
    </>
  );
};

export default AboutKGA;
