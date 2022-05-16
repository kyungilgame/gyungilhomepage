import React from "react";
import styled from "styled-components";

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

const TextBox = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.1vw;
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
