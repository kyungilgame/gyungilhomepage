import styled from "styled-components";
import "../Styles/css/App.css";

import HamburgerMenu from "./HamburgerMenu";

const HeaderContainer = styled.div`
  width: 100%;
  height: 15vw;
  display: flex;
  position: absolute;
  top: 0;
  z-index: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

const MenuWrapper = styled.div`
  width: 10vw;
  height: 10vw;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Header = ({ menuState, SetMenuState }) => {
  console.log(menuState);
  return (
    <HeaderContainer>
      <ContentWrapper>
        <MenuWrapper>
          <HamburgerMenu
            menuState={menuState}
            SetMenuState={SetMenuState}
          ></HamburgerMenu>
        </MenuWrapper>
      </ContentWrapper>
    </HeaderContainer>
  );
};

export default Header;
