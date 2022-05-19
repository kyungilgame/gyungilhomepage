import React from "react";
import styled from "styled-components";

import FaceImage from "../Image/face/Anonymous.png";

const ItemWrapper = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
  box-shadow: 0.2vw 0.2vw 0.2vw 0.2vw lightgray;
  border-radius: 1.5vw;
`;

const ImageWrapper = styled.div`
  width: 15vw;
  height: 15vw;
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
  font-size: 3vw;
  color: #101010;
  margin-top: 7vw;
`;

const TextTwo = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 2vw;
  color: #101010;
  margin-top: 0.5vw;
`;

const TextBox = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 2vw;
  color: #101010;
  width: 80%;
  height: 55%;
  margin-top: 0.5vw;
`;

export default function ReviewPlain({ name, course, text }) {
  return (
    <>
      <ItemWrapper>
        {/* <ImageWrapper Image={FaceImage}></ImageWrapper> */}
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
      </ItemWrapper>
    </>
  );
}
