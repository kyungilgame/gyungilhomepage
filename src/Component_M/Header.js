import styled from "styled-components";
import "../Styles/css/App.css";

import HamburgerMenu from "./HamburgerMenu";
import HeaderLogo from "../Image/HeaderLogo.png";

const HeaderContainer = styled.div`
  width: 95%;
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
  const LogoWrapper = styled.div`
    width: 15vw;
    height: 8vw;
    cursor: pointer;
    background-size: contain;
    background-position: center top;
    background-repeat: no-repeat;
    ${({ Image }) => {
      return Image ? `background-image: url(${Image})` : null;
    }}
  `;
  return (
    <HeaderContainer>
      <LogoWrapper
        Image={HeaderLogo}
        onClick={() => {
          SetMenuState(5);
        }}
      ></LogoWrapper>
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
