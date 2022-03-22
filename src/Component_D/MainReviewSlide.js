import React from "react";
import styled from "styled-components";

import MainReviewPlain from "./MainReviewPlain";
import MainReviewVideo from "./MainReviewVideo";

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const SlideColumnWrapper = styled.div`
  width: 17%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;

export default function MainSlide() {
  return (
    <SlideWrapper>
      <SlideColumnWrapper>
        <MainReviewPlain></MainReviewPlain>
      </SlideColumnWrapper>
      <SlideColumnWrapper>
        <MainReviewPlain></MainReviewPlain>
      </SlideColumnWrapper>
      <SlideColumnWrapper>
        <MainReviewPlain></MainReviewPlain>
      </SlideColumnWrapper>
      <SlideColumnWrapper>
        <MainReviewPlain></MainReviewPlain>
      </SlideColumnWrapper>
      <SlideColumnWrapper>
        <MainReviewPlain></MainReviewPlain>
      </SlideColumnWrapper>
      <SlideColumnWrapper>
        <MainReviewPlain></MainReviewPlain>
      </SlideColumnWrapper>
    </SlideWrapper>
  );
}
