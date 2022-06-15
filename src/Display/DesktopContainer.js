import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "../Styles/css/App.css";

import AboutKGA from "../Pages_D/AboutKGA";
import CourseIntro from "../Pages_D/CourseIntro";
import CourseReview from "../Pages_D/CourseReview";
import Main from "../Pages_D/Main";
import QA from "../Pages_D/QA";
import Apply from "../Pages_D/Apply";
import ApplySuccess from "../Pages_D/ApplySuccess";
import BottomCTABar from "../Component_D/BottomCTABar";
import LinkArtclass from "../Image/LinkArtclass.png";
import LinkPhoneCall from "../Image/LinkPhoneCall.png";
import LinkProgamer from "../Image/LinkProgamer.png";

const AppContainer = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const LinkBoxOne = styled.button`
  all: unset;
  position: fixed;
  width: 14vw;
  height: 5vw;
  bottom: 11vw;
  margin-left: 80vw;
  background-size: contain;
  background-image: url(${LinkPhoneCall});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const LinkBoxTwo = styled.button`
  all: unset;
  position: fixed;
  width: 14vw;
  height: 5vw;
  bottom: 7vw;
  margin-left: 80vw;
  background-size: contain;
  background-image: url(${LinkArtclass});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const LinkBoxThree = styled.button`
  all: unset;
  position: fixed;
  width: 14vw;
  height: 5vw;
  bottom: 3vw;
  margin-left: 80vw;
  background-size: contain;
  background-image: url(${LinkProgamer});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

function DesktopContainer({ menuState, SetMenuState, SetIsLoading }) {
  const [CTAAtive, setCTAAtive] = useState(true);
  const [scroll, setScroll] = useState(0);

  const handleFollow = () => {
    setScroll(window.pageYOffset);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });
  useEffect(() => {
    scroll < 500 ? setCTAAtive(false) : setCTAAtive(true);
  }, [scroll]);

  // 기존에 페이지 라우터 사용 전 코드
  // const pagesObj = {
  //   0: <AboutKGA></AboutKGA>,
  //   1: <CourseIntro></CourseIntro>,
  //   2: <CourseReview></CourseReview>,
  //   3: <QA></QA>,
  //   4: (
  //     <Apply
  //       menuState={menuState}
  //       SetMenuState={SetMenuState}
  //       SetIsLoading={SetIsLoading}
  //     ></Apply>
  //   ),
  //   5: <Main menuState={menuState} SetMenuState={SetMenuState}></Main>,
  // };

  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main menuState={menuState} />} />
          <Route path="/aboutKGA" element={<AboutKGA />} />
          <Route path="/courseIntro" element={<CourseIntro />} />
          <Route path="/courseReview" element={<CourseReview />} />
          <Route
            path="/apply"
            element={<Apply SetIsLoading={SetIsLoading} />}
          />
          <Route path="/apply/success" element={<ApplySuccess />} />
          <Route path="/qna" element={<QA />} />
        </Routes>
      </BrowserRouter>
      <BottomCTABar />
      {CTAAtive === true ? (
        <>
          <LinkBoxOne
            as={"a"}
            href={"http://www.kiweb.or.kr/?view=pc"}
          ></LinkBoxOne>
          <LinkBoxTwo
            as={"a"}
            href={"https://www.kyungilart.com/"}
          ></LinkBoxTwo>
          <LinkBoxThree
            as={"a"}
            href={"https://www.kgaprogamer.com/"}
          ></LinkBoxThree>{" "}
        </>
      ) : (
        <></>
      )}
    </AppContainer>
  );
}

export default DesktopContainer;
