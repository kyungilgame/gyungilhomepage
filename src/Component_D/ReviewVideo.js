import React from "react";
import styled from "styled-components";

import FaceImage from "../Image/face/Anonymous.png";
import rightArrow from "../Image/rightArrow.png";

const ItemWrapper = styled.div`
  width: 4.5%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
  margin-left: 2vw;
  box-shadow: 0.2vw 0.2vw 0.2vw 0.2vw lightgray;
  border-radius: 1.5vw;
`;

const TextOne = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 1.5vw;
  color: #101010;
  margin-top: 3vw;
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
  font-size: 1.1vw;
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
  justify-content: center;
  align-items: center;
  border-radius: 0.5vw;
  margin-top: 9vw;
  cursor: pointer;
`;

export default function ReviewVideo({ name, course, text, url }) {
  return (
    <>
      <ItemWrapper>
        <TextOne>{name}</TextOne>
        <TextTwo>{course}</TextTwo>
        <div
          style={{
            width: "90%",
            height: "0.2vw",
            backgroundColor: "lightgray",
            marginTop: "0.5vw",
          }}
        ></div>
        <TextBox>{text}</TextBox>
        <Button as={"a"} href={url} target={"_blank"}>
          <text
            style={{
              color: "#101010",
              fontSize: "1.2vw",
              fontFamily: "SEBANG-Gothic-Bold",
            }}
          >
            인터뷰 보러가기
          </text>
          {/* <img src={rightArrow} style={{ width: "1vw", height: "1vw" }}></img> */}
        </Button>
      </ItemWrapper>
    </>
  );
}
