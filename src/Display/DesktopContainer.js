import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../Styles/css/App.css";

import Header from "../Component_D/Header";
import AboutKGA from "../Pages_D/AboutKGA";

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

function DesktopContainer() {
  const [menuState, SetMenuState] = useState(0);

  return (
    <AppContainer>
      <Header menuState={menuState} SetMenuState={SetMenuState}></Header>
      <AboutKGA></AboutKGA>
    </AppContainer>
  );
}

export default DesktopContainer;
