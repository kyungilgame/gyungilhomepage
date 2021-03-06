import styled from "styled-components";
import "../Styles/css/App.css";

import MainCarousel from "../Function/MainCarousel";
import MainReviewCarousel from "../Function/MainReviewCarousel";

import RecrutingLabel from "../Image/RecrutingLabel.png";
import GreenArrow from "../Image/GreenArrow.png";

import MapImage from "../Function/Map";

import ReactPlayer from "react-player/youtube";
import BackVideo from "../Function/BackVideo";
import Header from "../Component_D/Header";
import Footer from "../Component_D/Footer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

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
`;

const ContentsBoxTwoContainer = styled.div`
  width: 100%;
  height: 62vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
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
  height: 50vw;
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
  margin-top: 33vw;
`;

const TextSizeThree = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 2.7vw;
  color: #101010;
`;

const TextSizeFour = styled.div`
  margin-top: 5px;
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1.7vw;
  color: #101010;
`;
const TextSizeFive = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 2.5vw;
  color: #101010;
`;

const TextSizeSix = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 4vw;
  color: #101010;
`;

const TextSizeSeven = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 2vw;
  color: #101010;
`;

const TextSizeEight = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1vw;
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
  margin-top: 1vw;
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
  position: relative;
  width: 20vw;
  height: 15vw;
  background-color: #101010;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ApplyButton = styled.button`
  width: 18vw;
  height: 2.5vw;
  background-color: #101010;
  border: 2px solid #00ffd6;
  border-radius: 1vw;
  border-color: #00ffd6;
  margin-top: 1.5vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ApplyBlackButton = styled.button`
  all: unset;
  width: 20vw;
  height: 4vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #101010;
  margin-top: 1vw;
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
  width: 62.7vw;
  height: 41vw;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #101010;
  margin: 4vw 0;
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
  width: 50%;
  height: 40vw;
  background-color: gray;
  margin: 1.5vw;
`;

const ImageWrapper = styled.img`
  width: 8vw;
  height: 2vw;
  position: absolute;
  top: -0.8vw;
  right: -0.65vw;
`;

const Main = ({ menuState, SetMenuState }) => {
  // ????????? ?????? ????????? ??????????????? ?????????
  let params = useParams();
  useEffect(() => {
    if (params.scroll === "course-intro") {
      document
        .getElementById(`${params.scroll}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const currentPage = "main";
  const textOne =
    "????????? ???????????? ?????? ??????, ???????????????, ???????????? ????????? ???????????? ?????? ???????????????.";
  const textTwo = "??? ?????? ????????? ???????????????.";

  return (
    <>
      <Header currentPage={currentPage} />
      <BackVideo />
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
            <TextSizeThree>4???????????? ???????????? ????????????</TextSizeThree>
          </div>
        </div>
      </ContentsBoxOneContainer>
      <ContentsBoxTwoContainer>
        <div
          style={{
            width: "100%",
            height: "8vw",
            backgroundColor: "#00ffd6",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextSizeFive>{textTwo}</TextSizeFive>
          <TextSizeFour>{textOne}</TextSizeFour>
        </div>
      </ContentsBoxTwoContainer>
      <div
        style={{
          width: "100%",
          height: "3vw",
          backgroundColor: "#f6f6f6",
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
        <TextSizeSix id="course-intro">KGA ????????????</TextSizeSix>
        <div
          style={{
            width: "40vw",
            height: "3vw",
            backgroundColor: "#00ffd6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextSizeSeven>???????????? ???????????? ????????? ????????????</TextSizeSeven>
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
              width: "80%",
              height: "50%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <BlackBoxWrapper>
              <ImageWrapper src={RecrutingLabel}></ImageWrapper>
              <TextSizeEight>????????????????????????</TextSizeEight>
              <TextSizeNine>???????????????</TextSizeNine>
              <TextSizeTen>??? ????????? ???????????? Unity 3D ??????</TextSizeTen>
              <ApplyButton as={"a"} href={"https://kgaprogramming.oopy.io"}>
                <TextSizeEleven>????????? ??????</TextSizeEleven>
                <img
                  src={GreenArrow}
                  style={{ width: "4vw", marginLeft: "1vw" }}
                  alt="greenarrow"
                ></img>
              </ApplyButton>
            </BlackBoxWrapper>
            <BlackBoxWrapper>
              <ImageWrapper src={RecrutingLabel}></ImageWrapper>
              <TextSizeEight>????????????????????????</TextSizeEight>
              <TextSizeNine>?????? ??????</TextSizeNine>
              <TextSizeTen>?????? ?????????????????? ???????????????</TextSizeTen>
              <ApplyButton as={"a"} href={"https://kgadesign.oopy.io"}>
                <TextSizeEleven>????????? ??????</TextSizeEleven>
                <img
                  src={GreenArrow}
                  style={{ width: "4vw", marginLeft: "1vw" }}
                  alt="greenarrow"
                ></img>
              </ApplyButton>
            </BlackBoxWrapper>
            <BlackBoxWrapper>
              <TextSizeEight>????????????????????????</TextSizeEight>
              <TextSizeNine>AR / VR</TextSizeNine>
              <TextSizeTen>????????? ????????? ?????? ??????</TextSizeTen>
              <ApplyButton as={"a"} href={"https://kgavr.oopy.io"}>
                <TextSizeEleven>????????? ??????</TextSizeEleven>
                <img
                  src={GreenArrow}
                  style={{ width: "4vw", marginLeft: "1vw" }}
                  alt="greenarrow"
                ></img>
              </ApplyButton>
            </BlackBoxWrapper>
          </div>
          <div
            style={{
              width: "80%",
              height: "50%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <BlackBoxWrapper>
              <ImageWrapper src={RecrutingLabel}></ImageWrapper>
              <TextSizeEight style={{}}>K-????????? ????????????</TextSizeEight>
              <TextSizeNine>????????????</TextSizeNine>
              <TextSizeTen>????????? ??? ????????? ????????? ??????</TextSizeTen>
              <ApplyButton as={"a"} href={"https://kgablockchain.oopy.io/"}>
                <TextSizeEleven>????????? ??????</TextSizeEleven>
                <img
                  src={GreenArrow}
                  style={{ width: "4vw", marginLeft: "1vw" }}
                  alt="greenarrow"
                ></img>
              </ApplyButton>
            </BlackBoxWrapper>
            <BlackBoxWrapper>
              <ImageWrapper src={RecrutingLabel}></ImageWrapper>
              <TextSizeEight>K-????????? ????????????</TextSizeEight>
              <TextSizeNine>????????????</TextSizeNine>
              <TextSizeTen>?????? ????????? ????????? ????????????</TextSizeTen>
              <ApplyButton as={"a"} href={"https://kgaplan.oopy.io"}>
                <TextSizeEleven>????????? ??????</TextSizeEleven>
                <img
                  src={GreenArrow}
                  style={{ width: "4vw", marginLeft: "1vw" }}
                  alt="greenarrow"
                ></img>
              </ApplyButton>
            </BlackBoxWrapper>
            <BlackBoxWrapper>
              <ImageWrapper src={RecrutingLabel}></ImageWrapper>
              <TextSizeEight style={{}}>????????????????????????</TextSizeEight>
              <TextSizeNine>?????????</TextSizeNine>
              <TextSizeTen>??????????????? ????????? ??????</TextSizeTen>
              <ApplyButton as={"a"} href={"https://kgaweb.oopy.io"}>
                <TextSizeEleven>????????? ??????</TextSizeEleven>
                <img
                  src={GreenArrow}
                  style={{ width: "4vw", marginLeft: "1vw" }}
                  alt="greenarrow"
                ></img>
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
            <TextSizeTwelve>?????? ?????????</TextSizeTwelve>
            <TextSizeThirteen>2,100???</TextSizeThirteen>
          </MiddleTextBox>
          <MiddleTextBox>
            <TextSizeTwelve>?????? ?????? ?????????</TextSizeTwelve>
            <TextSizeThirteen>91%</TextSizeThirteen>
          </MiddleTextBox>
          <MiddleTextBox>
            <TextSizeTwelve>????????? ?????? ?????? ??????</TextSizeTwelve>
            <TextSizeThirteen>3,500??????</TextSizeThirteen>
          </MiddleTextBox>
          <MiddleTextBox>
            <TextSizeTwelve>?????? ?????? ??????</TextSizeTwelve>
            <TextSizeThirteen>1??????</TextSizeThirteen>
          </MiddleTextBox>
        </div>
      </ContentsBoxFiveContainer>
      <ContentsBoxSixContainer>
        <VideoPlayWrapper>
          <ReactPlayer
            url="https://youtu.be/ZIAuAWALOKc"
            width="100%"
            height="100%"
          />
        </VideoPlayWrapper>
        <TextSizeSix>?????? ?????????</TextSizeSix>
        <div
          style={{
            width: "40vw",
            height: "3vw",
            backgroundColor: "#00ffd6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextSizeSeven>KGA??? ???????????? ?????? ??????</TextSizeSeven>
        </div>
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
            <TextSizeSixteen>???????????? ????????? ????????????</TextSizeSixteen>
            <TextSizeSeventeen>????????? ?????? ????????????</TextSizeSeventeen>
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
              ?????? ?????? ????????? ???????????? ?????????.
            </TextSizeEightteen>
            <TextSizeEightteen>
              KGA ???????????? 60%??? ?????????????????????.
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
            <TextSizeSixteen>????????? ?????? ??????</TextSizeSixteen>
            <TextSizeSeventeen>????????? ????????????</TextSizeSeventeen>
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
              ????????? ?????? ???????????? ????????????.
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
            <TextSizeSixteen>????????? ?????????</TextSizeSixteen>
            <TextSizeSeventeen>???????????????</TextSizeSeventeen>
            <div
              style={{
                width: "2vw",
                height: "0.2vw",
                backgroundColor: "#101010",
                marginTop: "1vw",
                marginBottom: "1vw",
              }}
            ></div>
            <TextSizeEightteen>????????? ?????? ???????????????</TextSizeEightteen>
            <TextSizeEightteen>
              ???????????? ???????????? ????????? ????????????.
            </TextSizeEightteen>
          </ColorBoxWrapper>
        </div>
        <ApplyBlackButton as={"a"} href={"/#/apply"}>
          <text
            style={{
              color: "#f6f6f6",
              fontFamily: "SEBANG-Gothic-Bold",
              fontSize: "1.7vw",
            }}
          >
            ?????? ????????????
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
        <MainReviewCarousel
          menuState={menuState}
          SetMenuState={SetMenuState}
        ></MainReviewCarousel>
      </ContentsBoxSevenContainer>
      <ContentsBoxEightContainer>
        <TextSizeFifteen>KGA ????????? ???</TextSizeFifteen>
        <MapWrapper>
          <MapImage></MapImage>
        </MapWrapper>
        <TextSizeNineteen>
          ????????? ????????? ???????????? 651 ???????????? 4??? ????????????????????????
        </TextSizeNineteen>
        <TextSizeNineteen>
          ????????? 2??? ???????????? ?????? 20m | 02-479-4050
        </TextSizeNineteen>
      </ContentsBoxEightContainer>
      <ContentsBoxNineContainer>
        <TextSizeTwenty>IT ????????? ?????????</TextSizeTwenty>
        <TextSizeTwentyOne>KGA??? ???????????? ???????????????</TextSizeTwentyOne>
        <ApplyBlackButton
          as={"a"}
          href={"https://forms.gle/Xj9q3QqjQs1qWy2D7"}
          target={"_blank"}
        >
          <text
            style={{
              color: "#f6f6f6",
              fontFamily: "SEBANG-Gothic-Bold",
              fontSize: "1.7vw",
            }}
          >
            ????????????
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
      <Footer menuState={menuState} SetMenuState={SetMenuState} />
    </>
  );
};

export default Main;
