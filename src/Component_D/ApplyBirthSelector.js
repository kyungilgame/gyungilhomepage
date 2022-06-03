import styled from "styled-components";
import "../Styles/css/App.css";
import React, { useState, useEffect } from "react";
import styles from "./DesiredCourse.module.css";

const ApplyBirthSelector = ({}) => {
  const [birth, setBirth] = useState();

  const monthData = [];
  const dayData = [];

  for (let i = 1; i <= 12; i++) {
    monthData.push(i);
  }
  for (let i = 1; i <= 31; i++) {
    dayData.push(i);
  }

  return (
    <>
      <input
        type="text"
        autoFocus="autofocus"
        name="year"
        maxLength="4"
        // onChange={this.handleChange}
        style={{
          border: "none",
          width: "7vw",
          height: "2vw",
          backgroundColor: "#f6f6f6",
        }}
      />
      년
      <select
        name="month"
        style={{
          border: "none",
          backgroundColor: "#f6f6f6",
          width: "10vw",
          height: "2vw",
        }}
      >
        {monthData.length &&
          monthData.map((month, index) => (
            <option key={index} value="01">
              {month}
            </option>
          ))}
      </select>
      월
      <select
        name="day"
        style={{
          border: "none",
          backgroundColor: "#f6f6f6",
          width: "10vw",
          height: "2vw",
        }}
      >
        {dayData.length &&
          dayData.map((day, index) => (
            <option key={index} value="01">
              {day}
            </option>
          ))}
      </select>
      일
    </>
  );
};

export default ApplyBirthSelector;
