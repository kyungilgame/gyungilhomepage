import React from "react";
import styled from "styled-components";

import ReactPlayer from "react-player/youtube";

// props로 현재 슬라이드 숫자를 받고 return을 각
// 슬라이드 수에 맞게 반환한다.
const ItemWrapper = styled.div`
  width: 56vw;
  height: 25vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const EachItemWrapper = styled.div`
  width: 17vw;
  height: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  margin: 1vw;
`;

export default function Slide({ currentSlide }) {
  switch (currentSlide) {
    case 0:
      return (
        <ItemWrapper>
          <EachItemWrapper>
            <ReactPlayer
              url="https://youtu.be/dR8YaZLBmTQ"
              width="15vw"
              height="10vw"
            />
          </EachItemWrapper>
          <EachItemWrapper>
            <ReactPlayer
              url="https://youtu.be/dR8YaZLBmTQ"
              width="15vw"
              height="10vw"
            />
          </EachItemWrapper>
          <EachItemWrapper>
            <ReactPlayer
              url="https://youtu.be/dR8YaZLBmTQ"
              width="15vw"
              height="10vw"
            />
          </EachItemWrapper>
        </ItemWrapper>
      );
      break;
    case 1:
      return (
        <ItemWrapper>
          <EachItemWrapper>
            <ReactPlayer
              url="https://youtu.be/dR8YaZLBmTQ"
              width="15vw"
              height="10vw"
            />
          </EachItemWrapper>
          <EachItemWrapper>
            <ReactPlayer
              url="https://youtu.be/dR8YaZLBmTQ"
              width="15vw"
              height="10vw"
            />
          </EachItemWrapper>
          <EachItemWrapper>
            <ReactPlayer
              url="https://youtu.be/dR8YaZLBmTQ"
              width="15vw"
              height="10vw"
            />
          </EachItemWrapper>
        </ItemWrapper>
      );
      break;
    case 2:
      return (
        <ItemWrapper>
          <EachItemWrapper>
            <ReactPlayer
              url="https://youtu.be/dR8YaZLBmTQ"
              width="15vw"
              height="10vw"
            />
          </EachItemWrapper>
          <EachItemWrapper>
            <ReactPlayer
              url="https://youtu.be/dR8YaZLBmTQ"
              width="15vw"
              height="10vw"
            />
          </EachItemWrapper>
          <EachItemWrapper>
            <ReactPlayer
              url="https://youtu.be/dR8YaZLBmTQ"
              width="15vw"
              height="10vw"
            />
          </EachItemWrapper>
        </ItemWrapper>
      );

      break;
    case 3:
      return (
        <ItemWrapper>
          <EachItemWrapper>
            <ReactPlayer
              url="https://youtu.be/dR8YaZLBmTQ"
              width="15vw"
              height="10vw"
            />
          </EachItemWrapper>
          <EachItemWrapper>
            <ReactPlayer
              url="https://youtu.be/dR8YaZLBmTQ"
              width="15vw"
              height="10vw"
            />
          </EachItemWrapper>
          <EachItemWrapper>
            <ReactPlayer
              url="https://youtu.be/dR8YaZLBmTQ"
              width="15vw"
              height="10vw"
            />
          </EachItemWrapper>
        </ItemWrapper>
      );
      break;

    default:
  }
}
