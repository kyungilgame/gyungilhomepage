import styled from "styled-components";
import "../Styles/css/App.css";

const HeaderContainer = styled.div`
  width: 100%;
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

const MenuText = styled.div`
  font-family: "SEBANG-Gothic-Regular";
  font-size: 1vw;
  color: #101010;
  cursor: pointer;
`;

const Header = ({ menuState, SetMenuState }) => {
  return (
    <HeaderContainer>
      <ContentWrapper>
        <MenuWrapper>
          <MenuText
            onClick={() => {
              SetMenuState(0);
            }}
          >
            About KGA
          </MenuText>
        </MenuWrapper>
        <MenuWrapper>
          <MenuText
            onClick={() => {
              SetMenuState(1);
            }}
          >
            코스 소개
          </MenuText>
        </MenuWrapper>
        <MenuWrapper>
          <MenuText
            onClick={() => {
              SetMenuState(2);
            }}
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
          >
            Q{"&"}A
          </MenuText>
        </MenuWrapper>
        <MenuWrapper>
          <MenuText
            onClick={() => {
              SetMenuState(4);
            }}
          >
            지원하기
          </MenuText>
        </MenuWrapper>
      </ContentWrapper>
    </HeaderContainer>
  );
};

export default Header;
