import styled from "styled-components";
import "../Styles/css/App.css";
import React, { useState, useEffect } from "react";
import styles from "./DesiredCourse.module.css";

const ApplySurvey = ({}) => {
  return (
    <>
      <>
        경일게임아카데미에 대한 정보를 얻은 경로는 어디인가요? (ex. 네이버 검색,
        구글 검색, 인스타그램, 페이스북, 커뮤니티, 지인 추천, etc….)
      </>
      <>전공자이신가요? (컴퓨터공학 계열 등)</>
      <>
        국민내일배움카드 사용이력이 있나요? (2020년 이전 발급 이력이 있다,
        2020년 이후 발급 이력이 있다, 없다, 잘 모르겠어요)
      </>
      <>과정 신청 동기는 무엇인가요? (0자 이상 입력요)</>
      <>
        교육 시 가장 중요하게 생각하는 것은? (중복 선택 가능) (교육일자 및 시간,
        교육환경(장소 및 공간), 커리큘럼, 교육혜택, 운영기관)
      </>
    </>
  );
};

export default ApplySurvey;
