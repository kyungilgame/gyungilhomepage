import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../Styles/css/App.css";

import Header from "../Component_M/Header";
import Footer from "../Component_M/Footer";

import Main from "../Pages_M/Main";
import AboutKGA from "../Pages_M/AboutKGA";

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
  5: <Main></Main>,
};

function DesktopContainer({ menuState, SetMenuState }) {
  return (
    <AppContainer>
      <Header menuState={menuState} SetMenuState={SetMenuState}></Header>
      {pagesObj[menuState]}
      <Footer></Footer>
    </AppContainer>
  );
}

export default DesktopContainer;
