import React from "react";
import styled from "styled-components";

import FaceImage from "../Image/face/Anonymous.png";

const ItemWrapper = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
  box-shadow: 0.2vw 0.2vw 0.2vw 0.2vw lightgray;
  border-radius: 0.5vw;
`;

const ImageWrapper = styled.div`
  width: 10vw;
  height: 10vw;
  margin-top: 2vw;
  margin-right: 1.5vw;
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
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1vw;
  color: #101010;
  margin-top: 0.5vw;
`;

const TextFour = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1vw;
  color: #101010;
  margin-top: 0.5vw;
`;

const TextBox = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 2vw;
  color: #101010;
  width: 80%;
  height: 55%;
  margin-top: 0.2vw;
`;

export default function MainReviewPlain({
  image,
  textOne,
  textTwo,
  texThree,
  textFour,
  Contents,
}) {
  return (
    <>
      <ItemWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "30vw",
            height: "15vw",
          }}
        >
          <ImageWrapper Image={image}></ImageWrapper>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextOne>{textOne}</TextOne>
            <TextTwo>{textTwo}</TextTwo>
            <TextThree>{texThree}</TextThree>
            <TextFour>{textFour}</TextFour>
          </div>
        </div>

        <div
          style={{
            width: "90%",
            height: "0.2vw",
            backgroundColor: "#lightgray",
            marginTop: "0.5vw",
          }}
        ></div>
        <TextBox>{Contents}</TextBox>
      </ItemWrapper>
    </>
  );
}
