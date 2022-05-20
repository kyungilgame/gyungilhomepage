import styled from "styled-components";
import "../Styles/css/App.css";

import IntroductionCarousel from "../Function/IntroductionCarousel";

import NewImage1 from "../Image/NewImage1.png";
import NewImage2 from "../Image/NewImage2.png";
import NewImage3 from "../Image/NewImage3.png";
import NewImage4 from "../Image/NewImage4.png";

import Kimjaeyeon from "../Image/Empoloee/Kimjaeyeon.png";
import Parkbyungjun from "../Image/Empoloee/Parkbyungjun.png";
import Seohyeokjun from "../Image/Empoloee/Seohyeokjun.png";
import YangHyunseok from "../Image/Empoloee/YangHyunseok.png";

//https://github.com/farbenmeer/react-spring-slider

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
  height: 150vw;
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
  background-color: #f0f0f0;
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
  font-size: 1.3vw;
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
  width: 70vw;
  height: 35vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: right;
`;
const IntroduceBoxInnerWrapper = styled.div`
  width: 45vw;
  height: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  margin-left: 1vw;
  margin-right: 1vw;
`;

const IntroduceBoxImage = styled.div`
  width: 20vw;
  height: 25vw;
  background-size: contain;
  background-position: center top;
  background-repeat: no-repeat;
  ${({ Image }) => {
    return Image ? `background-image: url(${Image})` : null;
  }}
`;

const AboutKGA = () => {
  return (
    <>
      <ContentsBoxOneContainer></ContentsBoxOneContainer>
      <ContentsBoxTwoContainer>
        <TextSizeOne>about KGA</TextSizeOne>
        <TextSizeTwo style={{ marginTop: "1vw" }}>
          경일게임아카데미는 청년들이 자신의 꿈을 이루기 위해 얼마나 많은 고민
          끝에 저희를 찾아오는지 알고 있습니다.
        </TextSizeTwo>
        <TextSizeTwo>
          교육 기간은 반년 남짓이지만 이 시간이 한 청년의 인생에서는 두 번 내기
          힘든 인생의 유일한 기회임을 잘 알고 있습니다.
        </TextSizeTwo>
        <TextSizeTwo style={{ marginTop: "1vw" }}>
          게임, VR, 블록체인, 메타버스, 웹개발 분야에 공허한 구호와 허황된
          비전들이 얼마나 많이 난무하는 지,
        </TextSizeTwo>
        <TextSizeTwo>
          그로 인해 많은 청년들이 상처받고 꿈을 접게 되는지도 잘 알고 있습니다.
        </TextSizeTwo>
        <TextSizeTwo>
          그렇기에 KGA는 청년의 시간과 꿈이 가진 무게감을 공감하며 모두가
          목적지에 도달할 수 있도록
        </TextSizeTwo>
        <TextSizeTwo>
          날마다 과거와 현재의 성과에 만족하지 않고 청년들이 가야 할 길을 닦고
          만들어 가고 있습니다.
        </TextSizeTwo>
        <TextSizeTwo style={{ marginTop: "1vw" }}>
          청년의 짐을 함께 지고 험난한 길을 함께 걷겠습니다.
        </TextSizeTwo>
      </ContentsBoxTwoContainer>
      <ContentsBoxThreeContainer>
        <TextSizeThree>KGA를 만든 사람들</TextSizeThree>
        <IntroduceBox
          style={{ justifyContent: "flex-end", alignItems: "center" }}
        >
          <IntroduceBoxImage Image={Parkbyungjun}></IntroduceBoxImage>
          <IntroduceBoxInnerWrapper>
            <TextSizeFour>박병준</TextSizeFour>
            <TextSizeFive>C.E.O</TextSizeFive>
            <TextSizeSix style={{ marginTop: "1vw" }}>
              직업 교육에 거대한 변화의 물결이 오고 있습니다. 이 거대한 변화의
              물결에 KGA가 다시 한번 항해의 닻을 올렸습니다. 지금까지 이룬
              것들이 최선이라 자만하지 않고 늘 고민하고 연구하며 계속 답을
              찾아가려고 합니다. 그러나 우리의 목표는 변함없습니다. 이 시대에
              선한 영향력을 흘려 보내는 기업, 이 변화를 이끌어가는 기업으로
              나아가고자 합니다. 그리고 함께 답을 찾아가는데 늘 열려있습니다.
            </TextSizeSix>
          </IntroduceBoxInnerWrapper>
        </IntroduceBox>
        <IntroduceBox
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <IntroduceBoxInnerWrapper style={{ alignItems: "end" }}>
            <TextSizeFour>양현석</TextSizeFour>
            <TextSizeFive>President</TextSizeFive>
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
                게임/블록체인/메타버스가 사람들의 삶의 경험을 바꾸어 나가는
                21세기의 예술이자 철학이 될 수 있다고 생각합니다. 교육자로서의
                정체성과 콘텐츠 크리에이터로서의 정체성 모두를 유지하고자 날마다
                고군분투 중이며, KGA의 모든 멤버들도 현업에 강한 사명감 있는
                교육자로 만들기를 원합니다.
              </TextSizeSix>
            </div>
          </IntroduceBoxInnerWrapper>
          <IntroduceBoxImage Image={YangHyunseok}></IntroduceBoxImage>
        </IntroduceBox>
        <IntroduceBox
          style={{ justifyContent: "flex-end", alignItems: "center" }}
        >
          <IntroduceBoxImage Image={Kimjaeyeon}></IntroduceBoxImage>
          <IntroduceBoxInnerWrapper>
            <TextSizeFour>김재연</TextSizeFour>
            <TextSizeFive>Vice-President</TextSizeFive>
            <TextSizeSix style={{ marginTop: "1vw" }}>
              게임 개발과 인연을 맺은 지 어느덧 30년, 우리나라 게임 기획자의
              1%가 저의 제자입니다. 항상 연구하고 시행착오를 극복하기 위해
              노력했기에 가능했습니다. 인생의 중요한 시기에 취업을 위해 KGA를
              찾아오는 학생들의 간절함을 이해 합니다. 그렇기에 "저는 KGA에서
              교육을 받았습니다"라는 취업 만능 열쇠를 만듭니다.
            </TextSizeSix>
          </IntroduceBoxInnerWrapper>
        </IntroduceBox>
        <IntroduceBox
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <IntroduceBoxInnerWrapper
            style={{ alignItems: "end", justifyContent: "center" }}
          >
            <TextSizeFour>서혁준</TextSizeFour>
            <TextSizeFive>Vice-President</TextSizeFive>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "left",
              }}
            >
              <TextSizeSix style={{ marginTop: "1vw" }}>
                직업 컨설팅 및 멘토로서 현 KGA Vice-president입니다. 저는
                '막연함'이 아닌 '확실함'으로 여러분들에게 확신을 주고
                싶습니다.미래에 대한 불안감을 가진 청년들에게 응원의 메시지를
                전합니다. 반드시 취업할 수 있는 KGA에서 여러분의 꿈을
                시작하세요!
              </TextSizeSix>
            </div>
          </IntroduceBoxInnerWrapper>
          <IntroduceBoxImage Image={Seohyeokjun}></IntroduceBoxImage>
        </IntroduceBox>
      </ContentsBoxThreeContainer>
      <ContentsBoxFourContainer>
        <TextSizeSeven>KGA Teammates</TextSizeSeven>
        <IntroductionCarousel></IntroductionCarousel>
      </ContentsBoxFourContainer>
      <ContentsBoxFiveContainer>
        <div
          style={{
            width: "25%",
            height: "20vw",
            backgroundSize: "contain",
            backgroundImage: `url(${NewImage1})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          style={{
            width: "25%",
            height: "20vw",
            backgroundSize: "contain",
            backgroundImage: `url(${NewImage2})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          style={{
            width: "25%",
            height: "20vw",
            backgroundSize: "contain",
            backgroundImage: `url(${NewImage3})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          style={{
            width: "25%",
            height: "20vw",
            backgroundSize: "contain",
            backgroundImage: `url(${NewImage4})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </ContentsBoxFiveContainer>
    </>
  );
};

export default AboutKGA;
