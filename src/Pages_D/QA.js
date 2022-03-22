import styled from "styled-components";
import "../Styles/css/App.css";
import React, { useState } from "react";
import Faq from "react-faq-component";

const ContentsBoxOneContainer = styled.div`
  width: 100%;
  height: 8vw;
  display: flex;
  position: absolute;
  top: 0;
  z-index: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const ContentsBoxTwoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const SelectionButtonSelected = styled.button`
  all: unset;
  cursor: pointer;
  width: 8vw;
  height: 1.8vw;
  background-color: #00887c;
  border-radius: 2vw;
  font-family: "Pretendard-regular";
  font-size: 1.3vw;
  color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  border-color: #00887c;
`;

const SelectionButtonNotSelected = styled.button`
  all: unset;
  cursor: pointer;
  width: 8vw;
  height: 1.8vw;
  background-color: #f6f6f6;
  border-radius: 2vw;
  border-color: #00887c;
  border-width: 0.1vw;
  border: solid;
  font-family: "Pretendard-regular";
  font-size: 1.3vw;
  color: #00887c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextSizeOne = styled.div`
  font-family: "SEBANG-Gothic-Bold";
  font-size: 3.5vw;
  color: #101010;
  margin-top: 10vw;
`;

const FAQBoardContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f6f6f6;
`;

const data = {
  rows: [
    {
      title: "수강료가 정말 무료인가요?",
      content:
        "수강료는 '국민내일배움카드'를 통해 전액 국가에서 지원받아 무료입니다. 참여자께서 부담하시는 금액은 없습니다.",
    },
    {
      title: "중간에 포기하면 불이익이 있나요?",
      content:
        "질병·사고·개인사정 등 불가피한 사유 없이 중도에 훈련 수강을 그만 둔 경우 미수료, 수강 중도 포기 시에는 내일배움카드 정책에 따른 불이익이 있을 수 있습니다.",
    },
    {
      title: "지원에 제한이 있나요?",
      content:
        "현직 공무원, 사립학교 교직원, 최종학교 졸업예정자 이외의 재학생, 연 매출 1억 5천만원 이상의 자영업자, 월 임금 300만원 이상인 대기업근로자(45세 미만), 고소득 특수형태근로 종사자는 내일배움카드를 발급받을 수 없습니다. 이에 해당하지 않는 직업훈련을 희망하는 국민이라면 모두 지원 가능합니다. 다만 수강기간 내 충분한 시간적 여유와 목표의식이 필요합니다. 그러므로 재직자, 재학생 등 정규 학습 시간에 실시간으로 참여할 수 없는 경우에는 부트캠프 수강이 어려울 수 있습니다. 또한 몰입도 있는 교육환경을 위해 의지가 있는 분들을 우선 선발하고 있습니다. 개발자가 되려는 의지가 강한 분이라면 누구든지 환영합니다.",
    },
    {
      title: "수강에 필요한 준비물이 있나요?",
      content:
        "첫째, 무료수강을 위해 고용노동부에서 발급하는 ‘국민내일배움카드’를 준비하셔야 합니다.\n" +
        "둘째, 수강 등록을 하시면 강의실 내에서 비치된 컴퓨터와 교보재를 활용하여 수업에 참여할 수 있습니다. 다만, 코딩을 하는데 있어 개인 노트북이 있다면 더욱 좋습니다.\n",
    },

    {
      title: "프로그래밍을 할 줄 모른다면 지원 할 수 없나요?",
      content:
        "Coding이 처음이시군요. 질문에 답변 드리자면, 가능합니다. 최근 코딩 능력은 디지털 실무 능력을 가늠하는 중요한 요소가 되었습니다. 굴지의 대기업들도 신입 사원에게 1년 간 코딩 교육을 진행하고 있으며, 게임 분야에서는 코딩 과외를 직접 붙여줄 정도로 디지털 신입들의 코딩 역량은 초라한 수준입니다. 이는 교육 현장에서 10년~20년 된 오래된 수업 교안과 교재를 가지고 답습하듯 수업을 진행 하다보니 현장에서 필요로 하는 실무 능력을 갖추지 못했기 때문입니다. 코딩은 지식으로 배우는 것이 아니라 훈련하는 것 입니다. 본 과정은 '비 전공자'도 디지털 인재로의 기회를 열어주는 한국형 뉴딜 K-DIGITAL TRAINING 과정입니다. 일반적인 지식 습득이 아닌 기업에서 필요로 하는 문제 해결에 직접 동참하고 풀어 나감으로써 현장감 있는 디지털 실무인재로 성장하실 수 있습니다. 코딩과 친숙해지려면 프로그래밍적 사고가 습관화되어야 합니다. 때로는 문제를 뒤집어서 생각해보는 유연성도 필요하죠. 여러분은 이제 그 시작점에 서 있습니다. 검증된 커리큘럼과 철저한 코칭을 통해 고급개발자 취업에 성공하세요.",
    },
  ],
};

const styles = {
  bgColor: "#f6f6f6",
  // titleTextColor: "blue",
  // titleTextSize: '48px',
  // rowTitleColor: "blue",
  rowTitleTextSize: "1.5vw",
  // rowContentColor: 'grey',
  rowContentTextSize: "1vw",
  rowContentPaddingTop: "0.5vw",
  rowContentPaddingBottom: "0.5vw",
  rowContentPaddingLeft: "0.5vw",
  rowContentPaddingRight: "7.5vw",
  // arrowColor: "red",
  //transitionDuration: "1s",
  // timingFunc: "ease"
};

const QA = () => {
  const [ReviewSelect, setReviewSelect] = useState(0);
  return (
    <>
      <ContentsBoxOneContainer></ContentsBoxOneContainer>
      <ContentsBoxTwoContainer>
        <TextSizeOne>자주 묻는 질문</TextSizeOne>
        <div
          style={{
            width: "60%",
            height: "5vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {ReviewSelect === 0 ? (
            <SelectionButtonSelected onClick={() => setReviewSelect(0)}>
              #ALL
            </SelectionButtonSelected>
          ) : (
            <SelectionButtonNotSelected onClick={() => setReviewSelect(0)}>
              #ALL
            </SelectionButtonNotSelected>
          )}
          {ReviewSelect === 1 ? (
            <SelectionButtonSelected onClick={() => setReviewSelect(1)}>
              #비전공자
            </SelectionButtonSelected>
          ) : (
            <SelectionButtonNotSelected onClick={() => setReviewSelect(1)}>
              #비전공자
            </SelectionButtonNotSelected>
          )}
          {ReviewSelect === 2 ? (
            <SelectionButtonSelected onClick={() => setReviewSelect(2)}>
              #커리큘럼
            </SelectionButtonSelected>
          ) : (
            <SelectionButtonNotSelected onClick={() => setReviewSelect(2)}>
              #커리큘럼
            </SelectionButtonNotSelected>
          )}
          {ReviewSelect === 3 ? (
            <SelectionButtonSelected onClick={() => setReviewSelect(3)}>
              #국비지원
            </SelectionButtonSelected>
          ) : (
            <SelectionButtonNotSelected onClick={() => setReviewSelect(3)}>
              #국비지원
            </SelectionButtonNotSelected>
          )}
          {ReviewSelect === 4 ? (
            <SelectionButtonSelected onClick={() => setReviewSelect(4)}>
              #수강료
            </SelectionButtonSelected>
          ) : (
            <SelectionButtonNotSelected onClick={() => setReviewSelect(4)}>
              #수강료
            </SelectionButtonNotSelected>
          )}
          {ReviewSelect === 5 ? (
            <SelectionButtonSelected onClick={() => setReviewSelect(5)}>
              #취업
            </SelectionButtonSelected>
          ) : (
            <SelectionButtonNotSelected onClick={() => setReviewSelect(5)}>
              #취업
            </SelectionButtonNotSelected>
          )}
        </div>
        <FAQBoardContainer>
          <div
            style={{
              width: "80%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: "2vw",
            }}
          >
            <div style={{ width: "50%" }}>
              <Faq
                data={data}
                styles={styles}
                config={{
                  animate: true,
                }}
              />
            </div>
            <div style={{ width: "50%" }}>
              <Faq
                data={data}
                styles={styles}
                config={{
                  animate: true,
                }}
              />
            </div>
          </div>
        </FAQBoardContainer>
      </ContentsBoxTwoContainer>
    </>
  );
};

export default QA;
