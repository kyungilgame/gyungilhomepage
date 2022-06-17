import "../Styles/css/App.css";
import React, { useEffect } from "react";
import styles from "./DesiredCourse.module.css";

const DesiredCourse = ({
  course,
  setCourse,
  data,
  setData,
  applyStep,
  setApplyStep,
  device,
}) => {
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

  return (
    <>
      <h5 className={`${styles["notice"]}`}>
        본 과정은 고용노동부와 직업능력심사평가원에서 인증하는 우수훈련과정이며
        취업까지 이루어지는 모든 과정은 ‘무료’입니다.
      </h5>
      <h2 className={`${styles["courses-title"]}`}>
        어떤 과정을 수강하고 싶으신가요?
      </h2>

      <div className={`${styles["course-list"]}`}>
        {courseList &&
          courseList.map((course) => (
            <button
              key={course.id}
              className={`${styles["course-button"]}`}
              onClick={(e) => {
                setCourse(e.target.textContent);
                setApplyStep(3);
              }}
            >
              {course.name}
            </button>
          ))}
        <button
          className={`${styles["course-unknown_button"]} 0`}
          onClick={(e) => {
            setCourse(e.target.textContent);
            setApplyStep(3);
          }}
        >
          모르겠어요
        </button>
      </div>

      <text className={`${styles["notice"]}`}>
        과정에 대해 궁금하시면 아래 링크에서 확인해주세요
      </text>
      <div className={`${styles["course-description_list"]}`}>
        {courseList &&
          courseList.map((course) => (
            <a key={course.id} target="_blank" href={course.href}>
              <div> {course.name} </div>

              {/* <div>❗</div> <div>{course.name}</div>
              <div>❗</div> */}
            </a>
          ))}
      </div>
    </>
  );
};

export default DesiredCourse;
