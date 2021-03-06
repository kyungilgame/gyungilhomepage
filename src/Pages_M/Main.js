import styled from "styled-components";
import "../Styles/css/App.css";

import MainCarousel_M from "../Function/MainCarousel_M";
import MainReviewCarousel_M from "../Function/MainReviewCarousel_M";

import RecrutingLabel from "../Image/RecrutingLabel.png";

import MapImage from "../Function/Map";

import ReactPlayer from "react-player/youtube";
import Header from "../Component_M/Header";
import Footer from "../Component_M/Footer";
import BackVideo from "../Function/BackVideo";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const ContentsBoxOneContainer = styled.div`
  width: 100%;
  height: 100vw;
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
  height: 54vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ContentsBoxThreeContainer = styled.div`
  width: 100%;
  height: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxFourContainer = styled.div`
  width: 100%;
  height: 100%;
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
  height: 170vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxSevenContainer = styled.div`
  width: 100%;
  // height: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxEightContainer = styled.div`
  width: 100%;
  height: 85vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxNineContainer = styled.div`
  width: 100%;
  height: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #00ffd6;
`;

const TextSizeFour = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 2.7vw;
  color: #101010;
  margin-top: 103vw;
`;
const TextSizeFive = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 4.5vw;
  color: #101010;
  margin-top: 1vw;
`;

const TextSizeSix = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 5.5vw;
  color: #101010;
`;

const TextSizeSeven = styled.div`
  padding: 0 10px;
  font-family: "SEBANG-Gothic-Bold";
  font-size: 4vw;
  color: #101010;
`;

const TextSizeEight = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 4vw;
  color: #00ffd6;
`;

const TextSizeNine = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 7vw;
  color: #f6f6f6;
`;

const TextSizeTen = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 4vw;
  color: #f6f6f6;
`;

const TextSizeEleven = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 3vw;
  color: #00ffd6;
`;

const TextSizeTwelve = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 2vw;
  color: #101010;
`;

const TextSizeThirteen = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 3.5vw;
  color: #00887c;
  margin-top: 1vw;
`;

const TextSizeFourteen = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 3.5vw;
  color: #101010;
  margin-top: 8vw;
`;
const TextSizeFifteen = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 5vw;
  color: #101010;
  margin-top: 2vh;
`;

const TextSizeSixteen = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 3.5vw;
  color: #101010;
  margin-top: 1vw;
`;

const TextSizeEightteen = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 3vw;
  color: #101010;
  margin-top: 1vw;
`;

const TextSizeNineteen = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 2vw;
  color: #101010;
`;

const TextSizeTwenty = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 4vw;
  color: #101010;
  margin-top: 5vw;
`;
const TextSizeTwentyOne = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 6vw;
  color: #101010;
`;

const BlackBoxWrapper = styled.div`
  position: relative;
  padding: 4vw 0;
  width: 100%;
  // height: 40vh;
  gap: 8px;
  background-color: #101010;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3vw;
`;

const ApplyButton = styled.button`
  padding: 5px 10vw;
  background-color: #101010;
  border-radius: 1vw;
  border-color: #00ffd6;
  cursor: pointer;
  margin-top: 1.5vw;
  border: 2px solid #00ffd6;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ApplyBlackButton = styled.button`
  all: unset;
  width: 30vw;
  padding: 0.7vh 1vw;
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
  width: 90%;
  height: 60vw;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #101010;
  margin: 4vw 0;
`;

const ColorBoxWrapper = styled.div`
  width: 85%;
  // height: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-start;
  padding: 2vw;
  ${({ color }) => {
    return color ? `background-color: ${color}` : null;
  }}
`;

const MapWrapper = styled.div`
  width: 65vw;
  height: 65vw;
  margin: 1.5vw;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${MapImage});
`;

const ImageWrapper = styled.img`
  width: 30%;
  position: absolute;
  right: -2.5%;
  top: -1vh;
`;

const ImageWrapperOne = styled.img`
  width: 10vw;
  height: 3vw;
  position: absolute;
  right: 0;
  top: 0;
`;

const ImageWrapperTwo = styled.img`
  width: 10vw;
  height: 3vw;
  position: absolute;
  right: 11.7vw;
  top: 213vw;
`;

const Main = ({ menuState, SetMenuState }) => {
  const currentPage = "main";
  // ????????? ??????????????? ??????????????? ?????????
  let params = useParams();
  useEffect(() => {
    if (params.scroll === "course-intro") {
      document
        .getElementById(`${params.scroll}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Header currentPage={currentPage} />
      <BackVideo />
      <ContentsBoxOneContainer></ContentsBoxOneContainer>
      <ContentsBoxTwoContainer>
        {/* <TextSizeFour>????????? ????????? ????????? ??? ??????</TextSizeFour> */}
        {/* <TextSizeFive>????????? ???????????? ????????? ????????????</TextSizeFive> */}
      </ContentsBoxTwoContainer>
      <div
        style={{
          width: "100%",
          height: "20vw",
          padding: "0 20px",
          backgroundColor: "#00ffd6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <text style={{ fontFamily: "SEBANG-Gothic-Bold", fontSize: "5vw" }}>
          ??? ?????? ????????? ???????????????.
        </text>
        <text style={{ fontFamily: "SEBANG-Gothic-Regular", fontSize: "3vw" }}>
          ????????? ???????????? ?????? ??????, ???????????????, <br />
          ???????????? ????????? ???????????? ?????? ???????????????.
        </text>
      </div>
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
        <MainCarousel_M></MainCarousel_M>
      </ContentsBoxThreeContainer>
      <ContentsBoxFourContainer>
        <TextSizeSix id="course-intro">KGA ????????????</TextSizeSix>
        <div
          style={{
            height: "6vw",
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
            // height: "80vw",
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
              // height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <BlackBoxWrapper>
              <ImageWrapper src={RecrutingLabel}></ImageWrapper>
              <TextSizeEight>????????????????????????</TextSizeEight>
              <TextSizeNine>???????????????</TextSizeNine>
              <TextSizeTen>??? ????????? ???????????? Unity 3D ??????</TextSizeTen>
              <ApplyButton as={"a"} href={"https://kgaprogramming.oopy.io/"}>
                <TextSizeEleven>????????? ??????</TextSizeEleven>
              </ApplyButton>
            </BlackBoxWrapper>
            <BlackBoxWrapper>
              <ImageWrapper src={RecrutingLabel}></ImageWrapper>
              <TextSizeEight>????????????????????????</TextSizeEight>
              <TextSizeNine>?????? ??????</TextSizeNine>
              <TextSizeTen>?????? ?????????????????? ???????????????</TextSizeTen>
              <ApplyButton as={"a"} href={"https://kgadesign.oopy.io/"}>
                <TextSizeEleven>????????? ??????</TextSizeEleven>
              </ApplyButton>
            </BlackBoxWrapper>
            <BlackBoxWrapper>
              <TextSizeEight style={{}}>????????????????????????</TextSizeEight>
              <TextSizeNine>AR / VR</TextSizeNine>
              <TextSizeTen>????????? ????????? ?????? ??????</TextSizeTen>
              <ApplyButton as={"a"} href={"https://kgavr.oopy.io"}>
                <TextSizeEleven>????????? ??????</TextSizeEleven>
              </ApplyButton>
            </BlackBoxWrapper>
            <BlackBoxWrapper>
              <ImageWrapper src={RecrutingLabel}></ImageWrapper>
              <TextSizeEight style={{}}>K-????????? ????????????</TextSizeEight>
              <TextSizeNine>????????????</TextSizeNine>
              <TextSizeTen>????????? ??? ????????? ????????? ??????</TextSizeTen>
              <ApplyButton as={"a"} href={"https://kgablockchain.oopy.io/"}>
                <TextSizeEleven>????????? ??????</TextSizeEleven>
              </ApplyButton>
            </BlackBoxWrapper>
            <BlackBoxWrapper>
              <ImageWrapper src={RecrutingLabel}></ImageWrapper>
              <TextSizeEight style={{}}>K-????????? ????????????</TextSizeEight>
              <TextSizeNine>????????????</TextSizeNine>
              <TextSizeTen>?????? ????????? ????????? ????????????</TextSizeTen>
              <ApplyButton as={"a"} href={"  https://kgaplan.oopy.io"}>
                <TextSizeEleven>????????? ??????</TextSizeEleven>
              </ApplyButton>
            </BlackBoxWrapper>
            <BlackBoxWrapper>
              <ImageWrapper src={RecrutingLabel}></ImageWrapper>
              <TextSizeEight style={{}}>????????????????????????</TextSizeEight>
              <TextSizeNine>?????????</TextSizeNine>
              <TextSizeTen>??????????????? ????????? ??????</TextSizeTen>
              <ApplyButton as={"a"} href={" https://kgaweb.oopy.io"}>
                <TextSizeEleven>????????? ??????</TextSizeEleven>
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
            <TextSizeTwelve>????????? ??????</TextSizeTwelve>
            <TextSizeTwelve>?????? ??????</TextSizeTwelve>
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
            width: "53vw",
            height: "6vw",
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
            margin: "1vh 0",
            width: "85%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "1vh",
          }}
        >
          <ColorBoxWrapper color={"#b5fff3"}>
            <div
              style={{
                width: "3vw",
                backgroundColor: "#101010",
                borderRadius: "2vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#f6f6f6",
                fontSize: "2vw",
              }}
            >
              1
            </div>
            <TextSizeSixteen>
              ???????????? ????????? ???????????? ????????? ?????? ????????????
            </TextSizeSixteen>

            <div
              style={{
                width: "5vw",
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
                width: "3vw",
                height: "3vw",
                backgroundColor: "#101010",
                borderRadius: "2vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#f6f6f6",
                fontSize: "2vw",
              }}
            >
              2
            </div>
            <TextSizeSixteen>????????? ?????? ?????? ????????? ????????????</TextSizeSixteen>
            <div
              style={{
                width: "5vw",
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
                width: "3vw",
                height: "3vw",
                backgroundColor: "#101010",
                borderRadius: "2vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#f6f6f6",
                fontSize: "2vw",
              }}
            >
              3
            </div>
            <TextSizeSixteen>????????? ????????? ???????????????</TextSizeSixteen>
            <div
              style={{
                width: "5vw",
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
              fontSize: "4vw",
            }}
          >
            ?????? ????????????
          </text>
          <text
            style={{
              color: "#f6f6f6",
              fontFamily: "SEBANG-Gothic-Bold",
              fontSize: "1.7vw",
              marginLeft: "2.5vw",
            }}
          >{`>`}</text>
        </ApplyBlackButton>
      </ContentsBoxSixContainer>
      <ContentsBoxSevenContainer>
        <MainReviewCarousel_M
          menuState={menuState}
          SetMenuState={SetMenuState}
        ></MainReviewCarousel_M>
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
          // as={"a"}
          // href={"https://forms.gle/Xj9q3QqjQs1qWy2D7"}
          style={{ marginTop: "4vw" }}
          // target={"_blank"}
        >
          <Link to="/apply">
            <text
              style={{
                color: "#f6f6f6",
                fontFamily: "SEBANG-Gothic-Bold",
                fontSize: "3.5vw",
              }}
            >
              ??????????????????
            </text>
            <text
              style={{
                color: "#f6f6f6",
                fontFamily: "SEBANG-Gothic-Bold",
                fontSize: "1.7vw",
                marginLeft: "2.5vw",
              }}
            >{`>`}</text>
          </Link>
        </ApplyBlackButton>
      </ContentsBoxNineContainer>
      <Footer menuState={menuState} SetMenuState={SetMenuState}></Footer>
    </>
  );
};

export default Main;
