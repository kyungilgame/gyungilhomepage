import { useMediaQuery } from "react-responsive";

import DesktopContainer from "./Display/DesktopContainer";
import MobileContainer from "./Display/MobileContainer";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 767 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
function App() {
  return (
    <>
      <Desktop>
        <DesktopContainer></DesktopContainer>
      </Desktop>
      <Mobile>
        <MobileContainer></MobileContainer>
      </Mobile>
    </>
  );
}

export default App;
