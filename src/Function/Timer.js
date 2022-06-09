import React from "react";
import styled from "styled-components";
import "../Styles/css/App.css";

const Timer = ({}) => {
  const dday = Math.floor(new Date("2022-06-, 10:16:00").getTime() / 1000);
  const today = Math.floor(new Date().getTime() / 1000);
  let gap = dday - today;
  const [[DAYS, HRS, MINS, SECS], setTime] = React.useState(["", "", "", ""]);

  const dateCalculator = () => {
    while (gap < 0) {
      gap = gap + 604800;
    }

    const day = Math.floor(gap / (60 * 60 * 24));
    const hour = Math.floor((gap % (60 * 60 * 24)) / (60 * 60));
    const min = Math.floor((gap % (60 * 60)) / 60);
    const sec = Math.floor(gap % 60);

    setTime([day, hour, min, sec]);
  };

  const tick = () => {
    if (DAYS === 0 && HRS === 0 && MINS === 0 && SECS === 0) reset();
    else if (HRS === 0 && MINS === 0 && SECS === 0) {
      setTime([DAYS - 1, 23, 59, 59]);
    } else if (MINS === 0 && SECS === 0) {
      setTime([DAYS, HRS - 1, 59, 59]);
    } else if (SECS === 0) {
      setTime([DAYS, HRS, MINS - 1, 59]);
    } else {
      setTime([DAYS, HRS, MINS, SECS - 1]);
    }
  };
  const reset = () => setTime([6, 23, 59, 59]);

  // 매 초마다 틱..톡 극혐
  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });
  // 초기 시간값 세팅해주기
  React.useEffect(() => {
    dateCalculator();
  }, []);

  return (
    <>
      <text style={{ color: "red" }}>
        {DAYS != undefined &&
          HRS != undefined &&
          MINS != undefined &&
          SECS != undefined &&
          `${DAYS.toString()}일 ${HRS.toString().padStart(
            2,
            "0"
          )}시 ${MINS.toString().padStart(2, "0")}분 ${SECS.toString().padStart(
            2,
            "0"
          )}초`}
      </text>
    </>
  );
};

export default Timer;
