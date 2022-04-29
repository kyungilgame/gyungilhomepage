import React from "react";
import styled from "styled-components";

// import FaceImage from "../Image/face/Anonymous.png";

const ItemWrapper = styled.div`
  width: 80%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
  box-shadow: 0.2vw 0.2vw 0.2vw 0.2vw lightgray;
  border-radius: 0.5vw;
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
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1vw;
  color: #101010;
  margin-top: 0.5vw;
`;

const TextBox = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 0.9vw;
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
  Contents,
}) {
  return (
    <>
      <ItemWrapper>
        <ImageWrapper Image={image}></ImageWrapper>
        <TextOne>{textOne}</TextOne>
        <TextTwo>{textTwo}</TextTwo>
        <TextThree>{texThree}</TextThree>
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
