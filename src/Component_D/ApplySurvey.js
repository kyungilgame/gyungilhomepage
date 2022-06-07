import styled from "styled-components";
import "../Styles/css/App.css";
import React, { useState, useEffect } from "react";
import styles from "./ApplySurvey.module.css";

const ApplySurvey = ({ surveyData, setSurveyData }) => {
  // const [survey, setSurvey] = useState([]);
  const [A, setA] = useState("");
  const [isEtc, setIsEtc] = useState(false);

  // 질문 데이터 채워넣기
  useEffect(() => {
    if (surveyData.length != 0) return;
    const questionsBox = document.querySelectorAll(`.survey-box`);
    console.log(questionsBox);
    questionsBox.forEach((Q) => {
      setSurveyData((survey) => [
        ...survey,
        { Q: Q.children[0].innerText, A: "" },
      ]);
    });
  }, []);

  useEffect(() => {
    console.log(surveyData);
  }, [surveyData]);

  const asdf = (e) => {};

  const etcTag = document.querySelector(".survey1.etc_radio");
  const etcDetailTag = document.querySelector(`.${styles["etc_detail"]}`);

  const setAnswer = (e) => {
    const questionNum = e.target.name.slice(-1);
    if (questionNum != 1 || !etcTag.checked) {
      const answer = e.target.value;
      setSurveyData(
        Object.values({
          ...surveyData,
          [questionNum - 1]: { ...surveyData[questionNum - 1], A: answer },
        })
      );
    } else if (questionNum == 1 && etcTag.checked) {
      const answer = etcDetailTag.value;
      setSurveyData(
        Object.values({
          ...surveyData,
          [questionNum - 1]: { ...surveyData[questionNum - 1], A: answer },
        })
      );
    }
  };
  return (
    <div className={`${styles["survey-board"]}`}>
      <div className={`survey-box`}>
        <div className={`${styles["question"]}`}>
          <text>
            1. 경일게임아카데미에 대한 정보를 어떤 경로를 통해 접하셨나요?
          </text>
        </div>
        <div className={`${styles["option"]}`}>
          <input
            onChange={setAnswer}
            type="radio"
            name="survey1"
            value="포털 사이트"
          />
          <label>포털 사이트 (네이버, 구글 등)</label>
        </div>
        <div className={`${styles["option"]}`}>
          <input onChange={setAnswer} type="radio" name="survey1" value="SNS" />
          <label>SNS (인스타그램, 페이스북 등)</label>
        </div>
        <div className={`${styles["option"]}`}>
          <input
            onChange={setAnswer}
            type="radio"
            name="survey1"
            value="지인 추천"
          />
          <label>지인 추천</label>
        </div>
        <div className={`${styles["option"]}`}>
          <input
            onChange={setAnswer}
            className="survey1 etc_radio"
            type="radio"
            name="survey1"
            value="etc"
          />
          <label>기타</label>
          <input
            onChange={setAnswer}
            className={`${styles["etc_detail"]}`}
            type="text"
            name="survey1"
            // disabled={!isEtc}
          />
        </div>
      </div>

      <div className={`survey-box`}>
        <div className={`${styles["question"]}`}>
          2. 전공자신가요? (컴퓨터공학 계열 등)
        </div>
        <div className={`${styles[("survey2", "option")]}`}>
          <input
            onChange={setAnswer}
            type="radio"
            name="survey2"
            value="전공"
          />
          <label>예</label>
        </div>
        <div className={`${styles[("survey2", "option")]}`}>
          <input
            onChange={setAnswer}
            type="radio"
            name="survey2"
            value="비전공"
          />
          <label>아니오</label>
        </div>
      </div>

      <div className={`survey-box`}>
        <div className={`${styles["question"]}`}>
          3. 국민내일배움카드 발급 이력이 있으신가요?
        </div>
        <div className={`${styles[("survey3", "option")]}`}>
          <input
            onChange={setAnswer}
            value="2021년 이전 발급 받은 적 있어요"
            type="radio"
            name="survey3"
          />
          <label>2020년 이전 발급 이력이 있어요</label>
        </div>
        <div className={`${styles[("survey3", "option")]}`}>
          <input
            onChange={setAnswer}
            value="2021년 이후 발급 받은 적 있어요"
            type="radio"
            name="survey3"
          />
          <label>2021년 이후 발급 이력이 있어요</label>
        </div>
        <div className={`${styles[("survey3", "option")]}`}>
          <input
            onChange={setAnswer}
            value="발급 받은 적 없어요"
            type="radio"
            name="survey3"
          />
          <label>발급 받은 적 없어요</label>
        </div>
        <div className={`${styles[("survey3", "option")]}`}>
          <input
            onChange={setAnswer}
            value="잘 모르겠어요"
            type="radio"
            name="survey3"
          />
          <label>잘 모르겠어요</label>
        </div>
      </div>

      <div className={`survey-box`}>
        <div className={`${styles["question"]}`}>
          4. 과정 신청 동기는 무엇인가요? (30자 이상 입력해주세요)
        </div>
        <div className={`${styles[("survey4", "option")]}`}>
          <textarea onChange={setAnswer} name="survey4" rows="5"></textarea>
        </div>
      </div>

      <div className={`survey-box`}>
        <div className={`${styles["question"]}`}>
          5. 교육 시 가장 중요하게 생각하는 것은 무엇인가요? (중복 선택 가능)
        </div>
        <div className={`${styles[("survey5", "option")]}`}>
          <input
            onChange={setAnswer}
            value="교육일자 및 시간"
            type="checkbox"
            name="survey5"
          />
          <label>교육일자 및 시간</label>
        </div>
        <div className={`${styles[("survey5", "option")]}`}>
          <input
            onChange={setAnswer}
            value="교육환경(장소 및 공간)"
            type="checkbox"
            name="survey5"
          />
          <label>교육환경(장소 및 공간)</label>
        </div>
        <div className={`${styles[("survey5", "option")]}`}>
          <input
            onChange={setAnswer}
            value="커리큘럼"
            type="checkbox"
            name="survey5"
          />
          <label>커리큘럼</label>
        </div>
        <div className={`${styles[("survey5", "option")]}`}>
          <input
            onChange={setAnswer}
            value="운영기관"
            type="checkbox"
            name="survey5"
          />
          <label>운영기관</label>
        </div>
        <div className={`${styles[("survey5", "option")]}`}>
          <input
            onChange={setAnswer}
            value="교육혜택"
            type="checkbox"
            name="survey5"
          />
          <label>교육혜택</label>
        </div>
      </div>
    </div>
  );
};

export default ApplySurvey;
