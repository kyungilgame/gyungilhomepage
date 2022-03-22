import React from "react";
import styled from "styled-components";

import ReviewPlain from "./ReviewPlain";
import ReviewVideo from "./ReviewVideo";

const SlideWrapper = styled.div`
  width: 100%;
  height: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`;

const SlideRowWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

export default function ReviewSlide({ ReviewSelect }) {
  switch (ReviewSelect) {
    case 0:
      return (
        <SlideWrapper>
          <SlideRowWrapper>
            <ReviewPlain></ReviewPlain>
            <ReviewVideo></ReviewVideo>
            <ReviewPlain></ReviewPlain>
            <ReviewPlain></ReviewPlain>
            <ReviewVideo></ReviewVideo>
            <ReviewPlain></ReviewPlain>
            <ReviewPlain></ReviewPlain>
            <ReviewVideo></ReviewVideo>
            <ReviewPlain></ReviewPlain>
            <ReviewPlain></ReviewPlain>
            <ReviewVideo></ReviewVideo>
            <ReviewPlain></ReviewPlain>
            <ReviewPlain></ReviewPlain>
            <ReviewVideo></ReviewVideo>
            <ReviewPlain></ReviewPlain>
          </SlideRowWrapper>
          <SlideRowWrapper>
            <ReviewPlain></ReviewPlain>
            <ReviewVideo></ReviewVideo>
            <ReviewPlain></ReviewPlain>
            <ReviewPlain></ReviewPlain>
            <ReviewVideo></ReviewVideo>
            <ReviewPlain></ReviewPlain>
            <ReviewPlain></ReviewPlain>
            <ReviewVideo></ReviewVideo>
            <ReviewPlain></ReviewPlain>
            <ReviewPlain></ReviewPlain>
            <ReviewVideo></ReviewVideo>
            <ReviewPlain></ReviewPlain>
            <ReviewPlain></ReviewPlain>
            <ReviewVideo></ReviewVideo>
            <ReviewPlain></ReviewPlain>
          </SlideRowWrapper>
        </SlideWrapper>
      );
      break;
    case 1:
      return (
        <SlideWrapper>
          <SlideRowWrapper>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
          </SlideRowWrapper>
          <SlideRowWrapper>
            <ReviewVideo></ReviewVideo>
            <ReviewVideo></ReviewVideo>
            <ReviewPlain></ReviewPlain>
          </SlideRowWrapper>
        </SlideWrapper>
      );
      break;
    default:
  }
}
