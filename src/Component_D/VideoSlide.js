import React from "react";
import styled from "styled-components";

import ReactPlayer from "react-player/youtube";

// props로 현재 슬라이드 숫자를 받고 return을 각
// 슬라이드 수에 맞게 반환한다.
const ItemWrapper = styled.div`
  width: 50%;
  height: 25vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const EachItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  margin: 1.198vw;
`;

export default function Slide() {
  return (
    <>
      <ItemWrapper>
        <EachItemWrapper>
          <ReactPlayer
            url="https://youtu.be/ZSwDO-0G-X4"
            width="20.417vw"
            height="70%"
          />
        </EachItemWrapper>
        <EachItemWrapper>
          <ReactPlayer
            url="https://youtu.be/KlZVbnst0m4"
            width="20.417vw"
            height="70%"
          />
        </EachItemWrapper>
        <EachItemWrapper>
          <ReactPlayer
            url="https://youtu.be/Kz6CCuQ_cGs"
            width="20.417vw"
            height="70%"
          />
        </EachItemWrapper>
        <EachItemWrapper>
          <ReactPlayer
            url="https://youtu.be/kWmt9QuMAv8"
            width="20.417vw"
            height="70%"
          />
        </EachItemWrapper>
        <EachItemWrapper>
          <ReactPlayer
            url="https://youtu.be/f6sZ5zfkWWE"
            width="20.417vw"
            height="70%"
          />
        </EachItemWrapper>
        <EachItemWrapper>
          <ReactPlayer
            url="https://youtu.be/haoimJJukUw"
            width="20.417vw"
            height="70%"
          />
        </EachItemWrapper>
        <EachItemWrapper>
          <ReactPlayer
            url="https://youtu.be/HvNR-wpQXOc"
            width="20.417vw"
            height="70%"
          />
        </EachItemWrapper>
        <EachItemWrapper>
          <ReactPlayer
            url="https://youtu.be/QPqOJkZkRMk"
            width="20.417vw"
            height="70%"
          />
        </EachItemWrapper>
        <EachItemWrapper>
          <ReactPlayer
            url="https://youtu.be/n0KEoy53BRw"
            width="20.417vw"
            height="70%"
          />
        </EachItemWrapper>
        <EachItemWrapper>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=PBpC_W-UP6c"
            width="20.417vw"
            height="70%"
          />
        </EachItemWrapper>
        <EachItemWrapper>
          <ReactPlayer
            url="https://youtu.be/dR8YaZLBmTQ"
            width="20.417vw"
            height="70%"
          />
        </EachItemWrapper>
      </ItemWrapper>
    </>
  );
}
