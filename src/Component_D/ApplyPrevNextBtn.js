import styled from "styled-components";
import "../Styles/css/App.css";
import React, { useState, useEffect } from "react";
import styles from "./ApplyPrevNextBtn.module.css";

const ApplyPrevNextBtn = ({ applyStep, setApplyStep, data, surveyData }) => {
  const [isDataFilled, setIsDataFilled] = useState(false);

  useEffect(() => {
    if (!data) return;
    if (
      data.course &&
      data.name &&
      data.phone &&
      data.email &&
      data.birth &&
      data.address
    ) {
      setIsDataFilled(true);
    }
    setIsDataFilled(true);

    return () => {
      setIsDataFilled(false);
    };
  }, [data]);

  useEffect(() => {
    // if (surveyData) {
    //   setIsDataFilled(true);
    // }
  }, [surveyData]);

  return (
    <div className={`${styles["btn_box"]}`}>
      <button onClick={() => setApplyStep(applyStep - 1)}>이전</button>
      {applyStep === 5 ? (
        <button onClick={() => console.log("제출")}>제출</button>
      ) : (
        <button
          onClick={() => setApplyStep(applyStep + 1)}
          disabled={!isDataFilled}
        >
          다음
        </button>
      )}
    </div>
  );
};

export default ApplyPrevNextBtn;
