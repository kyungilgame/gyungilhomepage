import styled from "styled-components";
import "../Styles/css/App.css";

import React, { useState } from "react";
import Timer from "../Function/Timer";

import CTARedImage from "../Image/CTARedImage.png";
import CTAArrow from "../Image/CTAArrow.png";
import XButton from "../Image/XButton.png";

const ContentsOneContainer = styled.div`
  position: fixed;
  bottom: 5vw;
  width: 80%;
  height: 22vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
  border-radius: 1vw;
  background-size: 17vw 1.3vw;
  background-image: url(${CTAArrow});
  background-position: right 54% bottom 69%;
  background-repeat: no-repeat;
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw #00ffd6;
  z-index: 2;
`;

const FirstLine = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 3.5vw;
  color: #101010;
`;

const SecondLine = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 2.5vw;
  color: #00887c;
`;

const ThirdLine = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 1.8vw;
  color: #101010;
`;

const FourthLine = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 3vw;
  color: #101010;
`;

const ApplyButton = styled.button`
  width: 60%;
  height: 30%;
  background-color: #00ffd6;
  border-color: #00ffd6;
  border-radius: 1vw;
  margin-top: 2vw;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.div`
  width: 7vw;
  height: 7vw;
  cursor: pointer;
  background-size: 3vw 3vw;
  background-image: url(${XButton});
  background-position: right 40% bottom 80%;
  background-repeat: no-repeat;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: 100% 40%;
  background-image: url(${CTARedImage});
  background-position: right 85% bottom 85%;
  background-repeat: no-repeat;
`;

const dday = new Date("2022-06-15, 00:00:00").getTime();

const today = new Date().getTime(); // 밀리 초 단위
const gap = dday - today;
const day = Math.floor(gap / (1000 * 60 * 60 * 24));
const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
const sec = Math.floor((gap % (1000 * 60)) / 1000);

const countDate = { days: day, hours: hour, minutes: min, seconds: sec };

const BottomCTABar = () => {
  const [CTAAtive, setCTAAtive] = useState(true);
  return CTAAtive === true ? (
    <ContentsOneContainer>
      <div
        style={{
          width: "15%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",

          marginLeft: "2vw",
        }}
      >
        <ImageContainer></ImageContainer>
      </div>
      <div
        style={{
          width: "57%",
          height: "95%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <FirstLine style={{ marginTop: "1vw" }}>과정 마감까지</FirstLine>

        {/* <SecondLine>수강료 9,438,000원 {`\u00A0\u00A0`} 0원</SecondLine> */}
        <div
          style={{
            display: "flex",
            width: "75%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <ThirdLine>마감까지</ThirdLine> */}
          <ThirdLine>
            <Timer countDate={countDate}></Timer>
          </ThirdLine>
          <ThirdLine>{`\u00A0\u00A0`}남았어요!</ThirdLine>
        </div>
        <ApplyButton
          as={"a"}
          href={"/#/apply"}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <FourthLine>수강신청하기 {`\u00A0 >`}</FourthLine>
        </ApplyButton>
      </div>
      <div
        style={{
          width: "15%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageContainer></ImageContainer>
      </div>
      <div
        style={{
          width: "6%",
          height: "95%",
          display: "flex",
          justifyContent: "center",
          marginLeft: "2vw",
        }}
      >
        <CloseButton
          onClick={() => {
            setCTAAtive(false);
          }}
        ></CloseButton>
      </div>
    </ContentsOneContainer>
  ) : (
    <></>
  );
};

export default BottomCTABar;
