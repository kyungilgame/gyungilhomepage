import styled from "styled-components";
import "../Styles/css/App.css";

import SNSkakao from "../Image/SNSkakao.png";
import SNSfacebook from "../Image/SNSfacebook.png";
import SNSinsta from "../Image/SNSinsta.png";
import SNSnaver from "../Image/SNSnaver.png";
import gyungilWhite from "../Image/gyungilWhite.png";

const FooterContainer = styled.div`
  width: 100%;
  height: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #101010;
`;

const LineSizeOne = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeTwo = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 1.3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LinkText = styled.button`
  all: unset;
  font-family: "SEBANG-Gothic-Bold";
  font-size: 1.3vw;
  cursor: pointer;
  ${({ marginLeft }) => {
    return marginLeft ? `margin-left: ${marginLeft}` : null;
  }}
`;

const ImageContainer = styled.div`
  width: 5vw;
  height: 5vw;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
`;

const ImageContainerTwo = styled.div`
  width: 6vw;
  height: 6vw;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  margin-right: 1vw;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
`;

const Footer = ({ menuState, SetMenuState }) => {
  return (
    <FooterContainer>
      <div
        style={{
          color: "white",
          width: "90%",
          height: "30vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "white",
            width: "60vw",
            height: "25vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <ImageContainerTwo src={gyungilWhite}></ImageContainerTwo>
            <LineSizeTwo>
              <text style={{ color: "white" }}>경일게임아카데미</text>
            </LineSizeTwo>
          </div>

          <LineSizeOne marginTop={"1vw"}>
            <text
              style={{
                color: "#cecece",
              }}
            >
              서울특별시 강동구 올림픽로 651 예경빌딩 4층
            </text>
          </LineSizeOne>
          <LineSizeOne marginTop={"0.5vw"}>
            <text
              style={{
                color: "#cecece",
              }}
            >
              대표자:박병준 | 개인정보관리책임자:서혁준
            </text>
          </LineSizeOne>
          <LineSizeOne marginTop={"0.5vw"}>
            <text
              style={{
                color: "#cecece",
              }}
            >
              사업자번호:212-81-89247
            </text>
          </LineSizeOne>
          <LineSizeOne marginTop={"0.5vw"}>
            <text
              style={{
                color: "#cecece",
              }}
            >
              통신판매허가번호:제 2020-서울강동-1360호
            </text>
          </LineSizeOne>
          <LineSizeOne marginTop={"0.5vw"}>
            <text
              style={{
                color: "#cecece",
              }}
            >
              Tel:02-479-4050 | Fax:02-479-4056
            </text>
          </LineSizeOne>
          <LineSizeOne marginTop={"0.5vw"}>
            <text
              style={{
                color: "#cecece",
              }}
            >
              E-Mail:kigsnet@naver.com
            </text>
          </LineSizeOne>
        </div>
        <div
          style={{
            width: "30vw",
            height: "22vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
          }}
        >
          <div
            style={{
              width: "25vw",
              height: "2.5vw",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "start",
            }}
          >
            <LinkText
              onClick={() => {
                SetMenuState(1);
                window.scrollTo(0, 0);
              }}
            >
              <text style={{ color: "white" }}>About KGA</text>
            </LinkText>
            <LinkText
              as={"a"}
              href={"https://www.kyungilart.com/"}
              marginLeft={"2vw"}
            >
              <text style={{ color: "white" }}>아트클래스</text>
            </LinkText>
          </div>
          <div
            style={{
              width: "25vw",
              height: "2.5vw",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "start",
            }}
          >
            <LinkText as={"a"} href={"https://forms.gle/gWUnjYGM5PXUfudU6"}>
              <text style={{ color: "white" }}>협력문의</text>
            </LinkText>
            <LinkText
              as={"a"}
              href={"https://www.kgaprogamer.com/"}
              marginLeft={"5.3vw"}
            >
              <text style={{ color: "white" }}>프로게이머</text>
            </LinkText>
          </div>
        </div>
        <div
          style={{
            color: "white",
            width: "9vw",
            height: "22vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "9vw",
              height: "5vw",
              justifyContent: "space-between",
              marginTop: "1vw",
            }}
          >
            <ImageContainer
              as={"a"}
              href={"https://pf.kakao.com/_nsNxkM"}
              src={SNSkakao}
              target="_blank"
            ></ImageContainer>
            <ImageContainer
              as={"a"}
              href={"https://www.facebook.com/kyungilgame"}
              src={SNSfacebook}
              target="_blank"
            ></ImageContainer>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "9vw",
              height: "5vw",
              justifyContent: "space-between",
              marginTop: "1vw",
            }}
          >
            <ImageContainer
              as={"a"}
              href={"https://www.instagram.com/kga_gameschool/"}
              src={SNSinsta}
              target="_blank"
            ></ImageContainer>
            <ImageContainer
              as={"a"}
              href={"https://blog.naver.com/kigsnet"}
              src={SNSnaver}
              target="_blank"
            ></ImageContainer>
          </div>
        </div>
      </div>
      <div
        style={{
          color: "white",
          width: "90%",
          height: "0.1vw",
          backgroundColor: "#cecece",
        }}
      ></div>
      <LineSizeOne marginTop={"1vw"}>
        <text
          style={{
            color: "#cecece",
          }}
        >
          COPYRIGHT Ⓒ KYUNGIL GAME ACADEMY. ALL RIGHTS RESERVED.
        </text>
      </LineSizeOne>
    </FooterContainer>
  );
};

export default Footer;
