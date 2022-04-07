import React from "react";
import styled from "styled-components";

import ReviewPlain from "./ReviewPlain";
import ReviewVideo from "./ReviewVideo";

const SlideWrapper = styled.div`
  width: 100%;
  height: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const SlideColumnWrapper = styled.div`
  width: 12%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10vw;
`;

export default function ReviewSlide({ ReviewSelect }) {
  switch (ReviewSelect) {
    case 0:
      return (
        <SlideWrapper>
          <SlideColumnWrapper>
            <ReviewPlain></ReviewPlain>
          </SlideColumnWrapper>
          <SlideColumnWrapper>
            <ReviewPlain></ReviewPlain>
          </SlideColumnWrapper>
        </SlideWrapper>
      );
      break;
    case 1:
      return (
        <SlideWrapper>
          <SlideColumnWrapper>
            <ReviewVideo></ReviewVideo>
          </SlideColumnWrapper>
        </SlideWrapper>
      );
      break;
    default:
  }
}
