import React from "react";
import styled from "styled-components";

// props로 현재 슬라이드 숫자를 받고 return을 각
// 슬라이드 수에 맞게 반환한다.
const ItemWrapper = styled.div`
  width: 56vw;
  height: 25vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
`;

const EachItemWrapper = styled.div`
  width: 17vw;
  height: 25vw;
  background-color: gray;
`;

export default function Slide({ currentSlide }) {
  switch (currentSlide) {
    case 0:
      return (
        <ItemWrapper>
          <EachItemWrapper></EachItemWrapper>
          <EachItemWrapper></EachItemWrapper>
          <EachItemWrapper></EachItemWrapper>
        </ItemWrapper>
      );
      break;
    case 1:
      return (
        <ItemWrapper>
          <EachItemWrapper></EachItemWrapper>
          <EachItemWrapper></EachItemWrapper>
          <EachItemWrapper></EachItemWrapper>
        </ItemWrapper>
      );
      break;
    case 2:
      return (
        <ItemWrapper>
          <EachItemWrapper></EachItemWrapper>
          <EachItemWrapper></EachItemWrapper>
          <EachItemWrapper></EachItemWrapper>
        </ItemWrapper>
      );

      break;
    case 3:
      return (
        <ItemWrapper>
          <EachItemWrapper></EachItemWrapper>
          <EachItemWrapper></EachItemWrapper>
          <EachItemWrapper></EachItemWrapper>
        </ItemWrapper>
      );
      break;
    case 4:
      return (
        <ItemWrapper>
          <EachItemWrapper></EachItemWrapper>
          <EachItemWrapper></EachItemWrapper>
          <EachItemWrapper></EachItemWrapper>
        </ItemWrapper>
      );
      break;
    case 5:
      return (
        <ItemWrapper>
          <EachItemWrapper></EachItemWrapper>
          <EachItemWrapper></EachItemWrapper>
          <EachItemWrapper></EachItemWrapper>
        </ItemWrapper>
      );
      break;
    case 6:
      return (
        <ItemWrapper>
          <EachItemWrapper></EachItemWrapper>
          <EachItemWrapper></EachItemWrapper>
          <EachItemWrapper></EachItemWrapper>
        </ItemWrapper>
      );
      break;
    default:
  }
}
