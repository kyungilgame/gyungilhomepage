import React from "react";
import styled from "styled-components";
import "../Styles/css/App.css";

import Header from "../Component_D/Header";
import Footer from "../Component_D/Footer";

import AboutKGA from "../Pages_D/AboutKGA";
import CourseIntro from "../Pages_D/CourseIntro";
import CourseReview from "../Pages_D/CourseReview";
import Main from "../Pages_D/Main";
import QA from "../Pages_D/QA";
import Apply from "../Pages_D/Apply";
import BottomCTABar from "../Component_D/BottomCTABar";

import LinkArtclass from "../Image/LinkArtclass.png";
import LinkPhoneCall from "../Image/LinkPhoneCall.png";
import LinkProgamer from "../Image/LinkProgamer.png";

const AppContainer = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const pagesObj = {
  0: <AboutKGA></AboutKGA>,
  1: <CourseIntro></CourseIntro>,
  2: <CourseReview></CourseReview>,
  3: <QA></QA>,
  4: <Apply></Apply>,
  5: <Main></Main>,
};

const LinkBoxOne = styled.button`
  all: unset;
  position: fixed;
  width: 20vw;
  height: 5vw;
  bottom: 30vw;
  margin-left: 80vw;
  background-size: contain;
  background-image: url(${LinkPhoneCall});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const LinkBoxTwo = styled.button`
  all: unset;
  position: fixed;
  width: 20vw;
  height: 5vw;
  bottom: 25vw;
  margin-left: 80vw;
  background-size: contain;
  background-image: url(${LinkArtclass});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const LinkBoxThree = styled.button`
  all: unset;
  position: fixed;
  width: 20vw;
  height: 5vw;
  bottom: 20vw;
  margin-left: 80vw;
  background-size: contain;
  background-image: url(${LinkProgamer});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

function DesktopContainer({ menuState, SetMenuState }) {
  return (
    <AppContainer>
      <Header menuState={menuState} SetMenuState={SetMenuState}></Header>
      {pagesObj[menuState]}
      <BottomCTABar></BottomCTABar>
      <LinkBoxOne></LinkBoxOne>
      <LinkBoxTwo></LinkBoxTwo>
      <LinkBoxThree></LinkBoxThree>
      <Footer></Footer>
    </AppContainer>
  );
}

export default DesktopContainer;
