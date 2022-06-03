import styled from "styled-components";
import "../Styles/css/App.css";
import React, { useState, useEffect } from "react";
import styles from "./DesiredCourse.module.css";

const DesiredCourse = ({ data, setData, applyStep, setApplyStep }) => {
  const courseSelectWrapper = styled.div`
    width: 10vw;
    height: 10vw;
  `;

  const courseList = [
    {
      id: 1,
      href: "https://kgadesign.oopy.io",
      name: "게임기획",
    },
    {
      id: 2,
      href: "https://kgaprogramming.oopy.io",
      name: "유니티 프로그래밍",
    },
    {
      id: 3,
      href: "http://landing.kiweb.or.kr",
      name: "블록체인",
    },
    {
      id: 4,
      href: "https://kgavr.oopy.io",
      name: "VR",
    },
    {
      id: 5,
      href: "https://kgaweb.oopy.io",
      name: "웹",
    },
    {
      id: 6,
      href: "https://kgaplan.oopy.io",
      name: "메타버스",
    },
  ];

  function courseSelect(courseName) {
    setData({ ...data, course: courseName });
    setApplyStep(3);
  }

  return (
    <>
      <text className={`${styles["notice"]}`}>
        본 과정은 고용노동부와 직업능력심사평가원에서 인증하는 우수훈련과정이며
        취업까지 이루어지는 모든 과정은 ‘무료’입니다.
      </text>

      <div className={`${styles["course-list"]}`}>
        {courseList &&
          courseList.map((course) => (
            <button
              key={course.id}
              className={`${styles["course-button"]}`}
              onClick={() => courseSelect(course.name)}
            >
              {course.name}
            </button>
          ))}
        <button
          className={`${styles["course-unknown_button"]} 0`}
          onClick={courseSelect}
        >
          아모른직다
        </button>
      </div>

      <text className={`${styles["notice"]}`}>
        과정에 대해 궁금하시면 아래 링크에서 확인해주세요
      </text>
      <div className={`${styles["course-description_list"]}`}>
        {courseList &&
          courseList.map((course) => (
            <text key={course.id}>
              <a target="_blank" href={course.href}>
                ❗ {course.name}
              </a>
            </text>
          ))}
      </div>
    </>
  );
};

export default DesiredCourse;
