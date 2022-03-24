import React from "react";
import { slide as Menu } from "react-burger-menu";

class HamburgerMenu extends React.Component {
  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu
        right
        noOverlay
        styles={{
          bmBurgerButton: {
            position: "absolute",
            width: "7vw",
            height: "5vw",
            right: "5vw",
            top: "5vw",
          },
          bmBurgerBars: {
            background: "#f6f6f6",
          },
          bmMenuWrap: {
            position: "fixed",
            height: "100%",
            width: "100%",
            right: "0vw",
            top: "0vw",
          },
          bmMenu: {
            background: "rgba(0, 0, 0, 0.3)",
            padding: "2vw 2vw 0",
            fontSize: "5vw",
          },
          bmItemList: {
            color: "#b8b7ad",
            padding: "0.8em",
            position: "fixed",
            top: "15vw",
            left: "60vw",
            width: "50vw",
          },
          bmItem: {
            display: "block",
            color: "#00ffd6",
            fontFamily: "SEBANG-Gothic-Regular",
            marginTop: "1.5vw",
          },
          bmCrossButton: {
            height: "10vw",
            width: "10vw",
            right: "85vw",
            top: "5vw",
          },
          bmCross: {
            background: "black",
          },
        }}
      >
        <a
          onClick={() => {
            this.props.SetMenuState(0);
          }}
          className="About KGA"
          href="/"
        >
          About KGA
        </a>
        <a
          onClick={() => {
            this.props.SetMenuState(1);
          }}
          className="CourseIntro"
          href="/"
        >
          코스 소개
        </a>
        <a
          onClick={() => {
            this.props.SetMenuState(2);
          }}
          className="CourseReview"
          href="/"
        >
          수강 후기
        </a>
        <a
          onClick={() => {
            this.props.SetMenuState(3);
          }}
          className="QNA"
          href="/"
        >
          Q{`&`}A
        </a>
        <a
          onClick={() => {
            this.props.SetMenuState(4);
          }}
          className="Apply"
          href="/"
        >
          지원하기
        </a>
      </Menu>
    );
  }
}

export default HamburgerMenu;
