import React from "react";
import styled from "styled-components";
import "../Styles/css/App.css";

const Timer = ({ countDate }) => {
  const { days = 0, hours = 0, minutes = 0, seconds = 60 } = countDate;
  const [[DAYS, HRS, MINS, SECS], setTime] = React.useState([
    days,
    hours,
    minutes,
    seconds,
  ]);

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

  const reset = () =>
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  // React.useEffect(() => {
  //   console.log(DAYS, HRS, MINS, SECS);
  // }, [SECS]);

  return (
    <>
      <text
        style={{ color: "red" }}
      >{`${DAYS.toString()}일 ${HRS.toString().padStart(
        2,
        "0"
      )}시 ${MINS.toString().padStart(2, "0")}분 ${SECS.toString().padStart(
        2,
        "0"
      )}초`}</text>
    </>
  );
};

export default Timer;
