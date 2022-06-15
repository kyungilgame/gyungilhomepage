import styled from "styled-components";
import "../Styles/css/App.css";

import HamburgerMenu from "./HamburgerMenu";
import HeaderLogo from "../Image/HeaderLogo.png";
import gyunilWhite from "../Image/gyungilWhite.png";
import { Link } from "react-router-dom";

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

const Header = ({ currentPage }) => {
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
      {currentPage === "main" ? (
        <Link to="/">
          <LogoWrapper Image={gyunilWhite}></LogoWrapper>
        </Link>
      ) : (
        <Link to="/">
          <LogoWrapper Image={HeaderLogo}></LogoWrapper>
        </Link>
      )}
      <ContentWrapper>
        <MenuWrapper>
          <HamburgerMenu currentPage={currentPage}></HamburgerMenu>
        </MenuWrapper>
      </ContentWrapper>
    </HeaderContainer>
  );
};

export default Header;
