import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";

const HamburgerMenu = ({ menuState, SetMenuState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuColor, setMenuColor] = useState("#f6f6f6");

  useEffect(() => {
    menuState === 5 ? setMenuColor("#f6f6f6") : setMenuColor("#101010");
  });

  return (
    <Menu
      right
      noOverlay
      isOpen={isOpen}
      onOpen={() => {
        setIsOpen(true);
      }}
      onClose={() => {
        setIsOpen(false);
      }}
      styles={{
        bmBurgerButton: {
          position: "absolute",
          width: "7vw",
          height: "5vw",
          right: "5vw",
          top: "5vw",
        },
        bmBurgerBars: {
          background: `${menuColor}`,
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
          SetMenuState(0);
          setIsOpen(false);
        }}
        className="About KGA"
        style={{ cursor: "pointer" }}
      >
        about KGA
      </a>
      <a
        onClick={() => {
          SetMenuState(1);
          setIsOpen(false);
        }}
        className="CourseIntro"
        style={{ cursor: "pointer" }}
      >
        코스 소개
      </a>
      <a
        onClick={() => {
          SetMenuState(2);
          setIsOpen(false);
        }}
        className="CourseReview"
        style={{ cursor: "pointer" }}
      >
        수강 후기
      </a>
      <a
        onClick={() => {
          SetMenuState(3);
          setIsOpen(false);
        }}
        className="QNA"
        style={{ cursor: "pointer" }}
      >
        Q{`&`}A
      </a>
      <a
        // onClick={() => {
        //   SetMenuState(4);
        //   setIsOpen(false);
        // }}
        href="https://forms.gle/Xj9q3QqjQs1qWy2D7"
        className="Apply"
        style={{ cursor: "pointer" }}
        target="_blank"
      >
        지원하기
      </a>
    </Menu>
  );
};

export default HamburgerMenu;
