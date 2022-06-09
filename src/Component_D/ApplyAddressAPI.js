import "../Styles/css/App.css";
import React, { useState } from "react";
import styles from "./ApplyAddressAPI.module.css";
import DaumPostcode from "react-daum-postcode";

const Postcode = (closeModal, data, setData) => {
  const handleComplete = (postData) => {
    let fullAddress = postData.address;
    let extraAddress = "";

    if (postData.addressType === "R") {
      if (postData.bname !== "") {
        extraAddress += postData.bname;
      }
      if (postData.buildingName !== "") {
        extraAddress +=
          extraAddress !== ""
            ? `, ${postData.buildingName}`
            : postData.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    closeModal();
    console.log(postData);
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setData({ ...data, address: fullAddress });
  };

  return (
    <DaumPostcode
      onComplete={handleComplete}
      // {...props}
    />
  );
};

const ApplyAddressAPI = ({ data, setData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        id="wrap"
        style={{
          display: "none",
          border: "1px solid",
          width: "500px",
          height: "300px",
          margin: "5px 0",
          position: "relative",
        }}
      >
        <img
          src="http://t1.daumcdn.net/postcode/resource/images/close.png"
          id="btnFoldWrap"
          style={{
            cursor: "pointer",
            position: "absolute",
            right: "0px",
            top: "-1px",
            zIndex: "1",
          }}
          // onclick={foldDaumPostcode}
          alt="접기 버튼"
        />
      </div>

      <button onClick={openModal}>주소검색</button>
      <div
        className={
          modalOpen
            ? `${styles["openModal"]} ${styles["modal"]}`
            : `${styles["modal"]}`
        }
      >
        ??
        {modalOpen ? (
          <section>
            <main>{Postcode(closeModal, data, setData)}</main>
            <footer>
              <button className="close" onClick={closeModal}>
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </>
  );
};

export default ApplyAddressAPI;
