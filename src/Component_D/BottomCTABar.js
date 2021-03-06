import styled from "styled-components";
import "../Styles/css/App.css";

import React, { useState, useEffect } from "react";
import Timer from "../Function/Timer";

import CTARedImage from "../Image/CTARedImage.png";
import CTAArrow from "../Image/CTAArrow.png";
import XButton from "../Image/XButton.png";

const ContentsOneContainer = styled.div`
  position: fixed;
  bottom: 1vw;
  width: 55%;
  height: 6vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
  border-radius: 1vw;
  /* background-size: 14vw 1.3vw;
  background-image: url(${CTAArrow});
  background-position: right 71% bottom 45%;
  background-repeat: no-repeat; */
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw #00ffd6;
  z-index: 2;
`;

const FirstLine = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 1.5vw;
  color: #101010;
`;

const SecondLine = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 1.2vw;
  color: #00887c;
`;

const ThirdLine = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 1.6vw;
  color: #101010;
`;

const FourthLine = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 1.5vw;
  color: #101010;
`;

const ApplyButton = styled.button`
  width: 100%;
  height: 40%;
  background-color: #00ffd6;
  border-color: #00ffd6;
  border-radius: 1vw;
  margin-top: 0.5vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CloseButton = styled.div`
  width: 5vw;
  height: 5vw;
  cursor: pointer;
  background-size: 2vw 2vw;
  background-image: url(${XButton});
  background-position: right 40% bottom 80%;
  background-repeat: no-repeat;
`;

const ImageContainer = styled.div`
  width: 90%;
  height: 90%;
  background-size: 100% 80%;
  background-image: url(${CTARedImage});
  background-position: right 85% bottom 78%;
  background-repeat: no-repeat;
`;

const BottomCTABar = ({ isApplying }) => {
  const [CTAAtive, setCTAAtive] = useState(true);

  const [closeButtonActive, setCloseButtonActive] = useState(false);

  const [scroll, setScroll] = useState(0);
  const handleFollow = () => {
    setScroll(window.pageYOffset);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });
  useEffect(() => {
    scroll < 250 ? setCTAAtive(false) : setCTAAtive(true);
  }, [scroll]);

  // CTA ?????? ?????? ?????????????????? ?????????
  return !isApplying && CTAAtive === true && closeButtonActive === false ? (
    <ContentsOneContainer>
      <div
        style={{
          width: "15%",
          height: "90%",
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
          width: "55%",
          height: "95%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "start",
        }}
      >
        <FirstLine style={{ marginTop: "1vw" }}>?????? ????????????</FirstLine>
        {/* <SecondLine>????????? 9,438,000??? {`\u00A0\u00A0`} 0???</SecondLine> */}
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {/* <ThirdLine>????????????</ThirdLine> */}
          <ThirdLine>
            <Timer></Timer>
          </ThirdLine>
          <ThirdLine>{`\u00A0\u00A0`}????????????!</ThirdLine>
        </div>
      </div>
      <div
        style={{
          width: "20%",
          height: "95%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ApplyButton
          as={"a"}
          href={"/#/apply"}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <FourthLine>???????????? {`\u00A0 >`}</FourthLine>
        </ApplyButton>
      </div>
      <div style={{ width: "10%", height: "95%" }}>
        <CloseButton
          onClick={() => {
            setCloseButtonActive(true);
          }}
        ></CloseButton>
      </div>
    </ContentsOneContainer>
  ) : (
    <></>
  );
};

export default BottomCTABar;
