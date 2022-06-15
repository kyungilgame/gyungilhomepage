import "../Styles/css/App.css";
import React, { useState, useEffect } from "react";
import styles from "./ApplyPrevNextBtn.module.css";

import { API, graphqlOperation } from "aws-amplify";
import { createUser, updateUser, deleteUser } from "../graphql/mutations";
import { useNavigate } from "react-router-dom";

const ApplyPrevNextBtn = ({
  SetIsLoading,
  applyStep,
  setApplyStep,
  surveyData,
  consent,
  device,
  course,
  name,
  phone,
  email,
  kakaoEmail,
  birth,
  address,
  detailedAddress,
}) => {
  let navigate = useNavigate();
  const [isDataFilled, setIsDataFilled] = useState(false);

  useEffect(() => {
    if (name && phone && (kakaoEmail || email) && birth && address) {
      setIsDataFilled(true);
    } else {
      setIsDataFilled(false);
    }
  }, [name, phone, email, kakaoEmail, birth, address]);

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
  }, [surveyData]);

  // 사용자 정보 DB에 저장
  const submit = async () => {
    if (
      surveyData.length != 5 &&
      course &&
      name &&
      phone &&
      email &&
      kakaoEmail &&
      birth &&
      address &&
      detailedAddress
    ) {
      alert("잘못된 정보입니다");
      return;
    }
    SetIsLoading(true);
    await API.graphql(
      graphqlOperation(createUser, {
        input: {
          course: course,
          name: name,
          phone: phone,
          kakaoEmail: kakaoEmail,
          email: email,
          birth: birth,
          address: address,
          detailedAddress: detailedAddress,
          survey1: surveyData[0].A,
          survey2: surveyData[1].A,
          survey3: surveyData[2].A,
          survey4: surveyData[3].A,
          survey5: surveyData[4].A,
        },
      })
    ).then((res) => {
      console.log(res);
      SetIsLoading(false);
      navigate("success", { state: { device: device } });
    });
  };

  return (
    <div
      className={`${styles["btn_box"]}`}
      // style={{
      //   position: `${device == "mobile" ? "" : "absolute"}`,
      // }}
    >
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
