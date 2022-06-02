import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import DesktopContainer from "./Display/DesktopContainer";
import MobileContainer from "./Display/MobileContainer";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 767 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 766 });
  return isMobile ? children : null;
};
function App() {
  const [menuState, SetMenuState] = useState(5);
  return (
    <>
      <Desktop>
        <DesktopContainer
          menuState={menuState}
          SetMenuState={SetMenuState}
        ></DesktopContainer>
      </Desktop>
      <Mobile>
        <MobileContainer
          menuState={menuState}
          SetMenuState={SetMenuState}
        ></MobileContainer>
      </Mobile>
    </>
  );
}

export default App;
