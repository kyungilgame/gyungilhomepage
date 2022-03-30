import React from "react";
import styled from "styled-components";
import "../Styles/css/App.css";

import Header from "../Component_M/Header";
import Footer from "../Component_M/Footer";
import BottomCTABar from "../Component_M/BottomCTABar";

import Main from "../Pages_M/Main";
import AboutKGA from "../Pages_M/AboutKGA";
import CourseIntro from "../Pages_M/CourseIntro";
import CourseReview from "../Pages_M/CourseReview";
import QA from "../Pages_M/QA";
import Apply from "../Pages_M/Apply";

import LinkMobileArt from "../Image/LinkMobileArt.png";
import LinkMobileGame from "../Image/LinkMobileGame.png";
import LinkMobilePhone from "../Image/LinkMobilePhone.png";

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
  width: 15vw;
  height: 15vw;
  bottom: 70vw;
  margin-left: 80vw;
  background-size: contain;
  background-image: url(${LinkMobilePhone});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const LinkBoxTwo = styled.button`
  all: unset;
  position: fixed;
  width: 15vw;
  height: 15vw;
  bottom: 55vw;
  margin-left: 80vw;
  background-size: contain;
  background-image: url(${LinkMobileArt});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const LinkBoxThree = styled.button`
  all: unset;
  position: fixed;
  width: 15vw;
  height: 15vw;
  bottom: 40vw;
  margin-left: 80vw;
  background-size: contain;
  background-image: url(${LinkMobileGame});
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
