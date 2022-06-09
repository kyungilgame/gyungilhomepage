import styled from "styled-components";
import "../Styles/css/App.css";
import React from "react";

import HeaderLogo from "../Image/HeaderLogo.png";
import gyunilWhite from "../Image/gyungilWhite.png";

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
  gap: 20px;
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

const Header = ({ menuState, SetMenuState }) => {
  const MenuText = styled.div`
    font-family: "SEBANG-Gothic-Regular";
    font-size: 16px;
    cursor: pointer;
    ${({ menuState }) => {
      return menuState === 5 ? `color: #f6f6f6;` : `color: #101010;`;
    }}
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
      {menuState === 5 ? (
        <LogoWrapper
          Image={gyunilWhite}
          onClick={() => {
            SetMenuState(5);
          }}
        ></LogoWrapper>
      ) : (
        <LogoWrapper
          Image={HeaderLogo}
          onClick={() => {
            SetMenuState(5);
          }}
        ></LogoWrapper>
      )}

      <ContentWrapper>
        <MenuWrapper>
          <MenuText
            onClick={() => {
              SetMenuState(0);
            }}
            menuState={menuState}
          >
            about KGA
          </MenuText>
        </MenuWrapper>
        <MenuWrapper>
          <MenuText
            onClick={() => {
              SetMenuState(1);
            }}
            menuState={menuState}
          >
            코스 소개
          </MenuText>
        </MenuWrapper>
        <MenuWrapper>
          <MenuText
            onClick={() => {
              SetMenuState(2);
            }}
            menuState={menuState}
          >
            수강 후기
          </MenuText>
        </MenuWrapper>
        <MenuWrapper>
          <MenuText
            onClick={() => {
              SetMenuState(3);
            }}
            menuState={menuState}
          >
            Q{"&"}A
          </MenuText>
        </MenuWrapper>
        <MenuWrapper>
          <MenuText
            onClick={() => {
              SetMenuState(4);
            }}
            menuState={menuState}
          >
            지원하기
            {/* {menuState === 5 ? (
              <a
                style={{
                  fontFamily: "SEBANG-Gothic-Regular",
                  color: "#f6f6f6",
                }}
                href="https://forms.gle/Xj9q3QqjQs1qWy2D7"
                target="_blank"
              >
                지원하기
              </a>
            ) : (
              <a
                style={{
                  fontFamily: "SEBANG-Gothic-Regular",
                  color: "#101010",
                }}
                href="https://forms.gle/Xj9q3QqjQs1qWy2D7"
                target="_blank"
              >
                지원하기
              </a>
            )} */}
          </MenuText>
        </MenuWrapper>
      </ContentWrapper>
    </HeaderContainer>
  );
};

export default Header;
