import styled from "styled-components";
import "../Styles/css/App.css";

import HeaderLogo from "../Image/HeaderLogo.png";

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
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

const MenuWrapper = styled.div`
  width: 6vw;
  height: 3vw;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Header = ({ menuState, SetMenuState }) => {
  const MenuText = styled.div`
    font-family: "SEBANG-Gothic-Regular";
    font-size: 1vw;
    cursor: pointer;
    ${({ menuState }) => {
      return menuState === 5 ? `color: #f6f6f6;` : `color: #101010;`;
    }}
  `;

  const LogoWrapper = styled.div`
    width: 10vw;
    height: 5vw;
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
          <MenuText
            onClick={() => {
              SetMenuState(0);
            }}
            menuState={menuState}
          >
            About KGA
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
            style={{ marginRight: "1vw" }}
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
          </MenuText>
        </MenuWrapper>
      </ContentWrapper>
    </HeaderContainer>
  );
};

export default Header;
