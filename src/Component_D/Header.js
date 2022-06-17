import styled from "styled-components";
import "../Styles/css/App.css";
import React from "react";

import HeaderLogo from "../Image/HeaderLogo.png";
import gyunilWhite from "../Image/gyungilWhite.png";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 95%;
  height: 8vw;
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
  gap: 30px;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

const MenuWrapper = styled.div`
  // width: 6vw;
  height: 3vw;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Header = ({ currentPage }) => {
  const MenuText = styled.div`
    font-family: "SEBANG-Gothic-Regular";
    font-size: 16px;
    cursor: pointer;

    a:focus,
    a:hover,
    a:visited,
    a:link,
    a:active {
      text-decoration: none;
      color: ${currentPage === "main" ? "#f6f6f6" : "#101010"};
    }
  `;

  const LogoWrapper = styled.div`
    width: 6vw;
    height: 4vw;
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
      <Link to="/">
        <LogoWrapper
          Image={currentPage === "main" ? gyunilWhite : HeaderLogo}
        ></LogoWrapper>
      </Link>

      <ContentWrapper>
        <MenuWrapper>
          <MenuText>
            <Link to="/aboutKGA">about KGA</Link>
          </MenuText>
        </MenuWrapper>
        <MenuWrapper>
          <MenuText>
            <Link to="/courseIntro">코스 소개</Link>
          </MenuText>
        </MenuWrapper>
        <MenuWrapper>
          <MenuText>
            <Link to="/courseReview">수강 후기</Link>
          </MenuText>
        </MenuWrapper>
        <MenuWrapper>
          <MenuText>
            <Link to="/qna">Q{"&"}A</Link>
          </MenuText>
        </MenuWrapper>
        <MenuWrapper>
          <MenuText>
            <Link to="/apply">지원하기</Link>
          </MenuText>
        </MenuWrapper>
      </ContentWrapper>
    </HeaderContainer>
  );
};

export default Header;
