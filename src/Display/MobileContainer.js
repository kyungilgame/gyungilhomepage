import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "../Styles/css/App.css";

import BottomCTABar from "../Component_M/BottomCTABar";

import Main from "../Pages_M/Main";
import AboutKGA from "../Pages_M/AboutKGA";
import CourseIntro from "../Pages_M/CourseIntro";
import CourseReview from "../Pages_M/CourseReview";
import QA from "../Pages_M/QA";
import Apply from "../Pages_M/Apply";
import ApplySuccess from "../Pages_D/ApplySuccess";

import LinkMobileArt from "../Image/LinkMobileArt.png";
import LinkMobileGame from "../Image/LinkMobileGame.png";
import LinkMobilePhone from "../Image/LinkMobilePhone.png";
import NotFound from "../Pages_D/NotFound";
import { useState } from "react";

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
  width: 15vw;
  height: 15vw;
  bottom: 60vw;
  margin-left: 80vw;
  background-size: contain;
  background-image: url(${LinkMobilePhone});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const LinkBoxTwo = styled.button`
  all: unset;
  position: fixed;
  width: 15vw;
  height: 15vw;
  bottom: 45vw;
  margin-left: 80vw;
  background-size: contain;
  background-image: url(${LinkMobileArt});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const LinkBoxThree = styled.button`
  all: unset;
  position: fixed;
  width: 15vw;
  height: 15vw;
  bottom: 30vw;
  margin-left: 80vw;
  background-size: contain;
  background-image: url(${LinkMobileGame});
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

function MobileContainer({ menuState, SetMenuState, SetIsLoading }) {
  const device = "mobile";
  const [isApplying, setIsApplying] = useState(false);

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
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main menuState={menuState} />} />
          <Route path="/aboutKGA" element={<AboutKGA />} />
          <Route path="/courseIntro" element={<CourseIntro />} />
          <Route path="/courseReview" element={<CourseReview />} />
          <Route
            path="/apply"
            element={
              <Apply
                SetIsLoading={SetIsLoading}
                setIsApplying={setIsApplying}
              />
            }
          />
          <Route path="/apply/success" element={<ApplySuccess />} />
          <Route path="/qna" element={<QA />} />
          <Route path="/:scroll" element={<Main menuState={menuState} />} />
          <Route path="/*" element={<NotFound device={device} />} />
        </Routes>
      </HashRouter>
      <BottomCTABar isApplying={isApplying} />
      <LinkBoxOne as={"a"} href={"tel:02-479-4050"}></LinkBoxOne>
      <LinkBoxTwo as={"a"} href={"https://www.kyungilart.com/"}></LinkBoxTwo>
      <LinkBoxThree
        as={"a"}
        href={"https://www.kgaprogamer.com/"}
      ></LinkBoxThree>
    </AppContainer>
  );
}

export default MobileContainer;
