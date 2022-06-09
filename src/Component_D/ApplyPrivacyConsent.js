import "../Styles/css/App.css";
import React, { useEffect } from "react";
import styles from "./ApplyPrivacyConsent.module.css";

const PrivacyConsent = ({ setConsent }) => {
  // 개인정보 동의 상태 풀어놓기
  useEffect(() => {
    setConsent(false);
  }, []);

  // 동의 체크하면 동의 상태 바꿔주기
  const setIsPrivacyConsent = (e) => {
    if (e.target.value === "agree") {
      setConsent(true);
    } else {
      setConsent(false);
    }
  };

  return (
    <div className={`${styles["privacy_consent-container"]}`}>
      <div className={`${styles["privacy_consent-content_box"]}`}>
        <h1>[개인정보 수집·이용에 대한 동의]</h1> <br />
        <text>
          작성자의 소중한 개인정보는 다음과 같은 정책에 따라 수집 및 이용됩니다.
          <br />
          주식회사 경일게임아카데미에서는 해당 목적에 연관되는 개인정보만을
          수집하며, 수집된 정보를 투명하고 안전하게 보호 관리할 것을 약속합니다.
          <br />
          이에 개인정보 수집 및 이용에 대한 동의를 구합니다.
        </text>
        <text>
          ① 이용목적 : 설문, 고객상담/마케팅 활용 (솔루션 상담 및 정보제공, 신규
          서비스 및 이벤트 소식 안내, 뉴스레터 발송)
          <br />② 수집항목 : 고객명, 기업/기관명, 연락처, 이메일
          <br />③ 보유·이용기간 : 개인정보 삭제 요청시까지(삭제 요청 후 영업일
          10일내 파기)
        </text>
      </div>
      <div className={`${styles["privacy_consent-radio_box"]}`}>
        <div className={`${styles[("privacy_consent-radio_box", "agree")]}`}>
          <input
            onChange={setIsPrivacyConsent}
            type="radio"
            name="Consent"
            value="agree"
          />
          <label>예</label>
        </div>
        <div className={`${styles[("privacy_consent-radio_box", "denial")]}`}>
          <input
            onChange={setIsPrivacyConsent}
            type="radio"
            name="Consent"
            value="denial"
          />
          <label>아니오</label>
        </div>
      </div>
    </div>
  );
};

export default PrivacyConsent;
