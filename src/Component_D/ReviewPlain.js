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
  margin-top: 5vw;
`;

const TextTwo = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1.2vw;
  color: #101010;
  margin-top: 0.5vw;
`;

const TextBox = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1.3vw;
  color: #101010;
  width: 80%;
  height: 55%;
  margin-top: 0.5vw;
`;

export default function ReviewPlain() {
  return (
    <>
      <ItemWrapper>
        {/* <ImageWrapper Image={FaceImage}></ImageWrapper> */}
        <TextOne>최*령</TextOne>
        <TextTwo>게임프로그래밍</TextTwo>
        <div
          style={{
            width: "90%",
            height: "0.2vw",
            backgroundColor: "#lightgray",
            marginTop: "0.5vw",
          }}
        ></div>
        <TextBox>
          저도 했으니 여러분도 할 수 있습니다. 화이팅 하시고 팁을 드리자면
          학원에서 하는 것이 전부가 아닌 집에서도 투자하셔서 학업성취도를 올리는
          것이 굉장히 중요할 거 같습니다.
        </TextBox>
      </ItemWrapper>
    </>
  );
}
