import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const HamburgerMenu = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuColor, setMenuColor] = useState("#f6f6f6");

  useEffect(() => {
    currentPage === "main" ? setMenuColor("#f6f6f6") : setMenuColor("#101010");
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
          right: "8vw",
          top: "4vw",
        },
        bmCross: {
          background: `${currentPage == "main" ? "rgb(0, 255, 214)" : "black"}`,
          width: "5px",
          height: "25px",
          backgroundColor: "#00ffd6",
        },
      }}
    >
      <Link to="/aboutKGA" className="About KGA" style={{ cursor: "pointer" }}>
        about KGA
      </Link>
      <Link
        to="/courseIntro"
        className="CourseIntro"
        style={{ cursor: "pointer" }}
      >
        코스 소개
      </Link>
      <Link
        to="/courseReview"
        className="CourseReview"
        style={{ cursor: "pointer" }}
      >
        수강 후기
      </Link>
      <Link to="/qna" className="QNA" style={{ cursor: "pointer" }}>
        Q{`&`}A
      </Link>
      <Link
        to="/apply"
        // href="https://forms.gle/Xj9q3QqjQs1qWy2D7" // 자체 지원하기 제작 전 구글설문양식
        className="Apply"
        style={{ cursor: "pointer" }}
      >
        지원하기
      </Link>
    </Menu>
  );
};

export default HamburgerMenu;
