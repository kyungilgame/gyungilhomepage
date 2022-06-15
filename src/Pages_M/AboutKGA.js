import styled from "styled-components";
import "../Styles/css/App.css";

import AboutKGACarousel_M from "../Function/AboutKGACarousel_M";

import Kimgeon from "../Image/Empoloee/Kimgeon.png";
import KwakIngoo from "../Image/Empoloee/KwakIngoo.png";
import Choiseonmoon from "../Image/Empoloee/Choiseonmoon.png";
import Choisunglak from "../Image/Empoloee/Choisunglak.png";
import Hansoyeon from "../Image/Empoloee/Hansoyeon.png";
import HwangIngyung from "../Image/Empoloee/HwangIngyung.png";
import Jeongjieun from "../Image/Empoloee/Jeongjieun.png";
import Joehanbyul from "../Image/Empoloee/Joehanbyul.png";
import Kangmyunggyu from "../Image/Empoloee/Kangmyunggyu.png";
import Kimjinhwang from "../Image/Empoloee/Kimjinhwang.png";
import Kimjungtaek from "../Image/Empoloee/Kimjungtaek.png";
import Kimkiwon from "../Image/Empoloee/Kimkiwon.png";
import Kimtaewan from "../Image/Empoloee/Kimtaewan.png";
import Leechanghee from "../Image/Empoloee/Leechanghee.png";
import Limyonggyu from "../Image/Empoloee/Limyonggyu.png";
import Ohjunhwan from "../Image/Empoloee/Ohjunhwan.png";
import Songjaeoh from "../Image/Empoloee/Songjaeoh.png";
import Header from "../Component_M/Header";
import Footer from "../Component_M/Footer";

//https://github.com/farbenmeer/react-spring-slider

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
  height: 140vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxFourContainer = styled.div`
  width: 100%;
  height: 140vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
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

const TextSizeSeven = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 6vw;
  color: #101010;
  margin-top: 5vw;
`;

const AboutKGA = () => {
  return (
    <>
      <Header />
      <ContentsBoxOneContainer></ContentsBoxOneContainer>
      <ContentsBoxTwoContainer>
        <TextSizeOne>about KGA</TextSizeOne>
        <TextSizeTwo style={{ marginTop: "3vw" }}>
          경일게임아카데미는 청년들이 자신의 꿈을 이루기 위해
        </TextSizeTwo>
        <TextSizeTwo>
          얼마나 많은 고민 끝에 저희를 찾아오는지 알고 있습니다.
        </TextSizeTwo>
        <TextSizeTwo>
          교육 기간은 반년 남짓이지만 이 시간이 한 청년의 인생에서는
        </TextSizeTwo>
        <TextSizeTwo>
          두 번 내기 힘든 인생의 유일한 기회임을 잘 알고 있습니다.
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
        <AboutKGACarousel_M first={true}></AboutKGACarousel_M>
      </ContentsBoxThreeContainer>
      <ContentsBoxFourContainer>
        <TextSizeSeven>KGA Teammates</TextSizeSeven>
        <AboutKGACarousel_M first={false}></AboutKGACarousel_M>
      </ContentsBoxFourContainer>
      <Footer />
    </>
  );
};

export default AboutKGA;
