import React, { useState, useEffect } from "react";
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

function DesktopContainer() {
  const [menuState, SetMenuState] = useState(5);

  return (
    <AppContainer>
      <Header menuState={menuState} SetMenuState={SetMenuState}></Header>
      {pagesObj[menuState]}
      <Footer></Footer>
    </AppContainer>
  );
}

export default DesktopContainer;
