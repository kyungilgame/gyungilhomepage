import styled from "styled-components";
import "../Styles/css/App.css";
import React, { useState, useEffect } from "react";
import styles from "./DesiredCourse.module.css";

const ApplyPrevNextBtn = ({ applyStep, setApplyStep }) => {
  return (
    <>
      <button onClick={() => setApplyStep(applyStep - 1)}>이전</button>
      <button onClick={() => setApplyStep(applyStep + 1)}>다음</button>
    </>
  );
};

export default ApplyPrevNextBtn;
