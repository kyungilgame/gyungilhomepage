import "../Styles/css/App.css";
import React, { useState, useEffect } from "react";
import styles from "./ApplyPrevNextBtn.module.css";

import { API, graphqlOperation } from "aws-amplify";
import { createUser, updateUser, deleteUser } from "../graphql/mutations";

const ApplyPrevNextBtn = ({
  applyStep,
  setApplyStep,
  data,
  surveyData,
  consent,
}) => {
  const [isDataFilled, setIsDataFilled] = useState(false);

  useEffect(() => {
    if (!data) return;
    if (
      data.course &&
      data.name &&
      data.phone &&
      (data.kakaoEmail || data.email) &&
      data.birth &&
      data.address
    ) {
      setIsDataFilled(true);
    } else {
      setIsDataFilled(false);
    }
    return () => {
      setIsDataFilled(false);
    };
  }, [data]);

  useEffect(() => {
    if (!surveyData) return;

    if (
      surveyData.length &&
      surveyData[0].A &&
      surveyData[1].A &&
      surveyData[2].A &&
      surveyData[3].A &&
      surveyData[4].A.length
    ) {
      setIsDataFilled(true);
    } else {
      setIsDataFilled(false);
    }
    return () => {
      setIsDataFilled(false);
    };
  }, [surveyData]);

  // 사용자 정보 DB에 저장
  const submit = async () => {
    console.log(data);
    console.log(surveyData);
    await API.graphql(
      graphqlOperation(createUser, {
        input: {
          course: data.course,
          name: data.name,
          phone: data.phone,
          kakaoEmail: data.kakaoEmail,
          email: data.email,
          birth: data.birth,
          address: data.address,
          detailedAddress: data.detailedAddress,
          surveyData1: surveyData[0].A,
          surveyData2: surveyData[1].A,
          surveyData3: surveyData[2].A,
          surveyData4: surveyData[3].A,
          surveyData5: surveyData[4].A,
        },
      })
    );
  };

  return (
    <div className={`${styles["btn_box"]}`}>
      <button onClick={() => setApplyStep(applyStep - 1)}>이전</button>
      {applyStep === 5 ? (
        <button onClick={submit} disabled={!consent}>
          제출
        </button>
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
