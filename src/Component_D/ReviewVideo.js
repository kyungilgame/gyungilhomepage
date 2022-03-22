import React from "react";
import styled from "styled-components";

import FaceImage from "../Image/face/Anonymous.png";
import rightArrow from "../Image/rightArrow.png";

const ItemWrapper = styled.div`
  width: 5%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
  margin-left: 4vw;
  box-shadow: 0.2vw 0.2vw 0.2vw 0.2vw lightgray;
  border-radius: 1.5vw;
`;

const ImageWrapper = styled.div`
  width: 6vw;
  height: 6vw;
  margin-top: 2vw;
  background-size: contain;
  background-position: center top;
  background-repeat: no-repeat;
  ${({ Image }) => {
    return Image ? `background-image: url(${Image})` : null;
  }}
`;

const TextOne = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 1.5vw;
  color: #101010;
  margin-top: 1vw;
`;

const TextTwo = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1.2vw;
  color: #101010;
  margin-top: 0.5vw;
`;

const TextThree = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 1.4vw;
  color: #101010;
`;

const TextBox = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.3vw;
  color: #101010;
  width: 80%;
  height: 35%;
  margin-top: 0.5vw;
`;

const Button = styled.button`
  all: unset;
  width: 70%;
  height: 7%;
  background-color: #00ffd6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.5vw;
  margin-top: 0.3vw;
  cursor: pointer;
`;

export default function ReviewVideo() {
  return (
    <>
      <ItemWrapper>
        <ImageWrapper Image={FaceImage}></ImageWrapper>
        <TextOne>GDB 김도형 챌린저</TextOne>
        <TextTwo>VR 콘텐츠 개발자 입사</TextTwo>
        <div
          style={{
            width: "90%",
            height: "0.2vw",
            backgroundColor: "#lightgray",
            marginTop: "0.5vw",
          }}
        ></div>
        <TextBox>
          게임프로그래머를 꿈꿔왔지만 독학으로는 취업이 어려워 KGA에 오게
          되었습니다. 저에게는 부족한 실력을 보강하고 협업 프로젝트 경험을 쌓을
          수 있는 좋은 경험이었습니다.
        </TextBox>
        <TextThree>전업 디자이너</TextThree>
        <TextThree>현업 게임 개발자</TextThree>
        <Button>
          <div style={{ width: "1vw" }}></div>
          <text style={{ color: "#101010", fontSize: "1.2vw" }}>
            인터뷰 보러가기
          </text>
          <img src={rightArrow} style={{ width: "1vw", height: "1vw" }}></img>
        </Button>
      </ItemWrapper>
    </>
  );
}
