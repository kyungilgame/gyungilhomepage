import styled from "styled-components";
import "../Styles/css/App.css";
import React, { useState } from "react";
import Faq from "react-faq-component";
import Header from "../Component_D/Header";
import Footer from "../Component_D/Footer";

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

const dataAllOne = {
  rows: [
    {
      title: "고등학교 졸업, 비전공자인데 취업이 가능할까요?",
      content:
        "물론 가능합니다! KGA의 수강 조건은 학력과 무관하며, 수강 과정은 기초 단계부터 쌓아갈 수 있도록 설계되어 있습니다. 이는 KGA가 배출한 수많은 비전공자 취업 결과로 검증되었습니다. IT 업계는 학력보다 실력을 중시하여 신입사원을 선발합니다. KGA는 수강생들에게 실무 경험을 느끼게 하기 위해 팀 프로젝트, 기업 협업 프로젝트, 모의면접 피드백 등 다방면으로 수강생들의 취업을 지원하고 있습니다. 수강생들은 KGA의 과정을 수료함으로써 회사에서 필요한 인재로서의 기본 역량을 갖추게 됩니다. 취업에서 한 걸음 더, 슈퍼 신입으로 만들어드립니다.",
    },
    {
      title: "커리큘럼을 자세히 확인하고 싶어요.",
      content:
        "각 과정을 클릭하면 과정 별 자세한 커리큘럼을 확인할 수 있습니다. KGA는 각 과정별 커리큘럼 중 팀 프로젝트를 통해 수강생들에게 독학으로는 겪을 수 없는 협업 경험을 갖게 합니다. 이는 취업 시에 놀라우리만치 도움이 되며, 좋은 개발자로 성장할 수 있는 기반을 다집니다.",
    },
    {
      title: "커리큘럼에 모르는 내용이 많아요. 선행학습이 필요한가요?",
      content:
        "선행학습은 필요 없습니다. KGA의 커리큘럼은 비전공자를 기준으로 짜여 있으므로, 한 번도 공부해보지 않은 누구라도 수강이 가능합니다. 오히려 잘못 선행학습을 한다면 역효과가 날 수도 있습니다. 주변 사람들과의 진도 차이에 대해 고민하지 마세요! 각자의 속도에 맞게 개별 진도를 나갈 수 있도록 도와드립니다.",
    },
    {
      title: "교육과정에 대한 상담을 받아보고 싶어요.",
      content:
        `KGA는 언제나 여러분의 궁금증에 답할 준비가 되어있습니다. \n` +
        `\n` +
        "전화 상담은 02 479 4050, 카톡 문의는 @경일게임아카데미 로 문의 주시면 됩니다. 직접 방문을 통해서도 상담을 받아 보실 수 있습니다. 수강신청, 과정 상담 외의 진로 고민 상담도 가능합니다.\n",
    },

    {
      title: "지원자격이 어떻게 되나요?",
      content:
        "KGA 커리큘럼은 분야에 대해 전혀 모르는 사람들도 시작할 수 있도록 설계되었습니다. 짧게는 5개월, 길게는 9개월 동안 집중할 수 있는 시간과 도전 의식이 필요합니다. 개발자의 꿈을 가진 분들을 모두 환영합니다. 다만, KGA는 내일배움카드 보유자 또는 발급 가능자를 대상으로 교육을 진행하고 있습니다. HRD-Net에서 수강신청 과정이 필수입니다. 현직 공무원, 졸업예정자 이외의 재학생(4년제 대학생은 2학년 수료 후, 3년제 대학생은 1학년 수료 후, 2년제 대학생은 입학시점부터 가능합니다.), 연 매출 1억 5천만원 이상의 자영업자, 월 임금 300만원 이상 대규모 기업 종사자, 특수형태근로종사자는 내일배움카드 발급이 불가합니다.",
    },
    {
      title: "수강료는 얼마인가요?",
      content:
        "KGA는 꿈을 위해 비용을 요구하지 않습니다. 정부에서 주도하는 국가기간전략산업훈련, K-디지털 트레이닝 과정 하에 보장된 퀄리티 높은 강의로 전문적인 지식을 배우며, 과정에 따라 몇 백만원에서 많게는 천만원 이상의 수업료를 지원받을 수 있습니다. KGA가 수강생에게 요구하는 것은 꿈을 향한 열정과 되고자 하는 의지입니다.",
    },
    {
      title: "기수 정원은 몇 명인가요?",
      content: "KGA 커리큘럼은 소수정예 선발제로, 2-30명 내외로 운영됩니다.",
    },
  ],
};

const dataAllTwo = {
  rows: [
    {
      title: "주말에도 자습실을 사용할 수 있나요?",
      content:
        "자습실은 평일에는 09:00~21:00 시간 동안 사용 가능하며, 주말에는 09:00~18:00 시간대에 사용이 가능합니다. 요청 시 노트북을 대여해 드리고 있습니다. (단, 코로나 거리두기 정책에 따라 오픈 시간 및 동시간대 사용 인원수는 조정될 수 있습니다.)",
    },
    {
      title: "졸업하면 어떤 결과를 기대할 수 있나요?",
      content:
        "KGA 수료생은 현업자 출신의 교수와 현업에서 직무 수행 중인 선배 수료생에게 피드백 받은 유용하고 유효한 포트폴리오를 보유하게 됩니다. 현시대의 기업이 원하는 실무 능력을 갖추며, 팀 단위의 프로젝트를 수행하며 협업하고 소통할 수 있는 역량을 가지게 됩니다.",
    },
    {
      title: "취업 연계는 어떻게 이루어 지나요?",
      content:
        "KGA는 수료생들이 반드시 취업할 수 있도록 다양한 취업 프로젝트를 진행하고 있습니다. 개인별 공고 매칭부터 이력서와 자기소개서 작성, 포트폴리오 제작 등 모든 지도와 검토를 진행하며, 프로필 작성 및 관리까지 모두 알려드립니다. 또한, 현업에서 직무 수행중인 선배 수료생들을 면접관으로 초청하여 모의면접을 통해 취업에 필요한 모든 부분을 피드백 해드리고 있습니다. ",
    },
    {
      title: "채용 협력 파트너사는 어떤 회사들인가요?",
      content:
        "취업 협력 기업은 매우 다양하고 가변적이며, 매월 상시로 게임회사에서 직접 연락을 받아 채용 연계를 진행하고 있습니다. 우수 수강생에게는 인재 추천, 면접 제안 등의 기회가 주어집니다.",
    },

    {
      title: "중간에 다른 과정으로 변경 가능한가요?",
      content:
        "교육이 시작되면 중도에 다른 반으로 이동은 불가능합니다. 수강생분들이 수업 중간에 과정이 안맞는다고 느끼지 않도록, 충분한 상담 후 과정과 기수를 배정해 드립니다.",
    },
    {
      title: "중도 탈락이 있나요?",
      content:
        "개개인의 사정에 따라 건강, 질병, 금전적 여유 등의 이유로 중도 이탈을 하시는 분들도 가끔 있지만, 그 외 중도 이탈은 거의 없습니다. KGA는 수강생들에게 만족도가 높은 수업을 진행하고 있습니다.",
    },
    {
      title: "자진 하차할 경우 어떻게 되나요?",
      content:
        "국가기간전략산업훈련 국비지원은 내일배움카드 유효기간 5년 중 1번에 한해 수강료 전액 지원이 가능합니다. 자진 하차 또는 중도 이탈할 경우 이 기회가 사라지므로, 다음에 국비지원을 받을 시 내일배움카드 잔액을 제외한 자기부담금이 발생하게 됩니다.",
    },
  ],
};

// 비전공자
const datahashOne = {
  rows: [
    {
      title: "고등학교 졸업, 비전공자인데 취업이 가능할까요?",
      content:
        "물론 가능합니다! KGA의 수강 조건은 학력과 무관하며, 수강 과정은 기초 단계부터 쌓아갈 수 있도록 설계되어 있습니다. 이는 KGA가 배출한 수많은 비전공자 취업 결과로 검증되었습니다. IT 업계는 학력보다 실력을 중시하여 신입사원을 선발합니다. KGA는 수강생들에게 실무 경험을 느끼게 하기 위해 팀 프로젝트, 기업 협업 프로젝트, 모의면접 피드백 등 다방면으로 수강생들의 취업을 지원하고 있습니다. 수강생들은 KGA의 과정을 수료함으로써 회사에서 필요한 인재로서의 기본 역량을 갖추게 됩니다. 취업에서 한 걸음 더, 슈퍼 신입으로 만들어드립니다.",
    },
    {
      title: "커리큘럼에 모르는 내용이 많아요. 선행학습이 필요한가요?",
      content:
        "선행학습은 필요 없습니다. KGA의 커리큘럼은 비전공자를 기준으로 짜여 있으므로, 한 번도 공부해보지 않은 누구라도 수강이 가능합니다. 오히려 잘못 선행학습을 한다면 역효과가 날 수도 있습니다. 주변 사람들과의 진도 차이에 대해 고민하지 마세요! 각자의 속도에 맞게 개별 진도를 나갈 수 있도록 도와드립니다.",
    },
    {
      title: "교육과정에 대한 상담을 받아보고 싶어요.",
      content:
        "KGA는 언제나 여러분의 궁금증에 답할 준비가 되어있습니다. 전화 상담은 02 479 4050, 카톡 문의는 @경일게임아카데미 로 문의 주시면 됩니다. 직접 방문을 통해서도 상담을 받아 보실 수 있습니다. 수강신청, 과정 상담 외의 진로 고민 상담도 가능합니다.",
    },
    {
      title: "지원자격이 어떻게 되나요?",
      content:
        "KGA 커리큘럼은 분야에 대해 전혀 모르는 사람들도 시작할 수 있도록 설계되었습니다. 짧게는 5개월, 길게는 9개월 동안 집중할 수 있는 시간과 도전 의식이 필요합니다. 개발자의 꿈을 가진 분들을 모두 환영합니다. 다만, KGA는 내일배움카드 보유자 또는 발급 가능자를 대상으로 교육을 진행하고 있습니다. HRD-Net에서 수강신청 과정이 필수입니다. 현직 공무원, 졸업예정자 이외의 재학생(4년제 대학생은 2학년 수료 후, 3년제 대학생은 1학년 수료 후, 2년제 대학생은 입학시점부터 가능합니다.), 연 매출 1억 5천만원 이상의 자영업자, 월 임금 300만원 이상 대규모 기업 종사자, 특수형태근로종사자는 내일배움카드 발급이 불가합니다.",
    },
    {
      title: "졸업하면 어떤 결과를 기대할 수 있나요?",
      content:
        "KGA 수료생은 현업자 출신의 교수와 현업에서 직무 수행 중인 선배 수료생에게 피드백 받은 유용하고 유효한 포트폴리오를 보유하게 됩니다. 현시대의 기업이 원하는 실무 능력을 갖추며, 팀 단위의 프로젝트를 수행하며 협업하고 소통할 수 있는 역량을 가지게 됩니다.",
    },
    {
      title: "중간에 다른 과정으로 변경 가능한가요?",
      content:
        "교육이 시작되면 중도에 다른 반으로 이동은 불가능합니다. 수강생분들이 수업 중간에 과정이 안맞는다고 느끼지 않도록, 충분한 상담 후 과정과 기수를 배정해 드립니다.",
    },
    {
      title: "중도 탈락이 있나요?",
      content:
        "개개인의 사정에 따라 건강, 질병, 금전적 여유 등의 이유로 중도 이탈을 하시는 분들도 가끔 있지만, 그 외 중도 이탈은 거의 없습니다. KGA는 수강생들에게 만족도가 높은 수업을 진행하고 있습니다.",
    },
  ],
};

// 커리큘럼
const datahashTwo = {
  rows: [
    {
      title: "고등학교 졸업, 비전공자인데 취업이 가능할까요?",
      content:
        "물론 가능합니다! KGA의 수강 조건은 학력과 무관하며, 수강 과정은 기초 단계부터 쌓아갈 수 있도록 설계되어 있습니다. 이는 KGA가 배출한 수많은 비전공자 취업 결과로 검증되었습니다. IT 업계는 학력보다 실력을 중시하여 신입사원을 선발합니다. KGA는 수강생들에게 실무 경험을 느끼게 하기 위해 팀 프로젝트, 기업 협업 프로젝트, 모의면접 피드백 등 다방면으로 수강생들의 취업을 지원하고 있습니다. 수강생들은 KGA의 과정을 수료함으로써 회사에서 필요한 인재로서의 기본 역량을 갖추게 됩니다. 취업에서 한 걸음 더, 슈퍼 신입으로 만들어드립니다.",
    },
    {
      title: "커리큘럼을 자세히 확인하고 싶어요.",
      content:
        "각 과정을 클릭하면 과정 별 자세한 커리큘럼을 확인할 수 있습니다. KGA는 각 과정별 커리큘럼 중 팀 프로젝트를 통해 수강생들에게 독학으로는 겪을 수 없는 협업 경험을 갖게 합니다. 이는 취업 시에 놀라우리만치 도움이 되며, 좋은 개발자로 성장할 수 있는 기반을 다집니다.",
    },
    {
      title: "커리큘럼에 모르는 내용이 많아요. 선행학습이 필요한가요?",
      content:
        "선행학습은 필요 없습니다. KGA의 커리큘럼은 비전공자를 기준으로 짜여 있으므로, 한 번도 공부해보지 않은 누구라도 수강이 가능합니다. 오히려 잘못 선행학습을 한다면 역효과가 날 수도 있습니다. 주변 사람들과의 진도 차이에 대해 고민하지 마세요! 각자의 속도에 맞게 개별 진도를 나갈 수 있도록 도와드립니다.",
    },
    {
      title: "교육과정에 대한 상담을 받아보고 싶어요.",
      content:
        "KGA는 언제나 여러분의 궁금증에 답할 준비가 되어있습니다. 전화 상담은 02 479 4050, 카톡 문의는 @경일게임아카데미 로 문의 주시면 됩니다. 직접 방문을 통해서도 상담을 받아 보실 수 있습니다. 수강신청, 과정 상담 외의 진로 고민 상담도 가능합니다.",
    },
    {
      title: "지원자격이 어떻게 되나요?",
      content:
        "KGA 커리큘럼은 분야에 대해 전혀 모르는 사람들도 시작할 수 있도록 설계되었습니다. 짧게는 5개월, 길게는 9개월 동안 집중할 수 있는 시간과 도전 의식이 필요합니다. 개발자의 꿈을 가진 분들을 모두 환영합니다. 다만, KGA는 내일배움카드 보유자 또는 발급 가능자를 대상으로 교육을 진행하고 있습니다. HRD-Net에서 수강신청 과정이 필수입니다. 현직 공무원, 졸업예정자 이외의 재학생(4년제 대학생은 2학년 수료 후, 3년제 대학생은 1학년 수료 후, 2년제 대학생은 입학시점부터 가능합니다.), 연 매출 1억 5천만원 이상의 자영업자, 월 임금 300만원 이상 대규모 기업 종사자, 특수형태근로종사자는 내일배움카드 발급이 불가합니다.",
    },
    {
      title: "기수 정원은 몇 명인가요?",
      content: "KGA 커리큘럼은 소수정예 선발제로, 2-30명 내외로 운영됩니다.",
    },
    {
      title: "주말에도 자습실을 사용할 수 있나요?",
      content:
        "자습실은 평일에는 09:00~21:00 시간 동안 사용 가능하며, 주말에는 09:00~18:00 시간대에 사용이 가능합니다. 요청 시 노트북을 대여해 드리고 있습니다.",
    },
    {
      title: "졸업하면 어떤 결과를 기대할 수 있나요?",
      content:
        "KGA 수료생은 현업자 출신의 교수와 현업에서 직무 수행 중인 선배 수료생에게 피드백 받은 유용하고 유효한 포트폴리오를 보유하게 됩니다. 현시대의 기업이 원하는 실무 능력을 갖추며, 팀 단위의 프로젝트를 수행하며 협업하고 소통할 수 있는 역량을 가지게 됩니다.",
    },
    {
      title: "취업 연계는 어떻게 이루어 지나요?",
      content:
        "KGA는 수료생들이 반드시 취업할 수 있도록 다양한 취업 프로젝트를 진행하고 있습니다. 개인별 공고 매칭부터 이력서와 자기소개서 작성, 포트폴리오 제작 등 모든 지도와 검토를 진행하며, 프로필 작성 및 관리까지 모두 알려드립니다. 또한, 현업에서 직무 수행중인 선배 수료생들을 면접관으로 초청하여 모의면접을 통해 취업에 필요한 모든 부분을 피드백 해드리고 있습니다. ",
    },
    {
      title: "채용 협력 파트너사는 어떤 회사들인가요?",
      content:
        "취업 협력 기업은 매우 다양하고 가변적이며, 매월 상시로 게임회사에서 직접 연락을 받아 채용 연계를 진행하고 있습니다. 우수 수강생에게는 인재 추천, 면접 제안 등의 기회가 주어집니다.",
    },
    {
      title: "중간에 다른 과정으로 변경 가능한가요?",
      content:
        "교육이 시작되면 중도에 다른 반으로 이동은 불가능합니다. 수강생분들이 수업 중간에 과정이 안맞는다고 느끼지 않도록, 충분한 상담 후 과정과 기수를 배정해 드립니다.",
    },
    {
      title: "중도 탈락이 있나요?",
      content:
        "개개인의 사정에 따라 건강, 질병, 금전적 여유 등의 이유로 중도 이탈을 하시는 분들도 가끔 있지만, 그 외 중도 이탈은 거의 없습니다. KGA는 수강생들에게 만족도가 높은 수업을 진행하고 있습니다.",
    },
  ],
};

// 국비지원
const datahashThree = {
  rows: [
    {
      title: "지원자격이 어떻게 되나요?",
      content:
        "KGA 커리큘럼은 분야에 대해 전혀 모르는 사람들도 시작할 수 있도록 설계되었습니다. 짧게는 5개월, 길게는 9개월 동안 집중할 수 있는 시간과 도전 의식이 필요합니다. 개발자의 꿈을 가진 분들을 모두 환영합니다. 다만, KGA는 내일배움카드 보유자 또는 발급 가능자를 대상으로 교육을 진행하고 있습니다. HRD-Net에서 수강신청 과정이 필수입니다. 현직 공무원, 졸업예정자 이외의 재학생(4년제 대학생은 2학년 수료 후, 3년제 대학생은 1학년 수료 후, 2년제 대학생은 입학시점부터 가능합니다.), 연 매출 1억 5천만원 이상의 자영업자, 월 임금 300만원 이상 대규모 기업 종사자, 특수형태근로종사자는 내일배움카드 발급이 불가합니다.",
    },
    {
      title: "수강료는 얼마인가요?",
      content:
        "KGA는 꿈을 위해 비용을 요구하지 않습니다. 정부에서 주도하는 국가기간전략산업훈련, K-디지털 트레이닝 과정 하에 보장된 퀄리티 높은 강의로 전문적인 지식을 배우며, 과정에 따라 몇 백만원에서 많게는 천만원 이상의 수업료를 지원받을 수 있습니다. KGA가 수강생에게 요구하는 것은 꿈을 향한 열정과 되고자 하는 의지입니다.",
    },
    {
      title: "기수 정원은 몇 명인가요?",
      content: "KGA 커리큘럼은 소수정예 선발제로, 2-30명 내외로 운영됩니다.",
    },
    {
      title: "자진 하차할 경우 어떻게 되나요?",
      content:
        "국가기간전략산업훈련 국비지원은 내일배움카드 유효기간 5년 중 1번에 한해 수강료 전액 지원이 가능합니다. 자진 하차 또는 중도 이탈할 경우 이 기회가 사라지므로, 다음에 국비지원을 받을 시 내일배움카드 잔액을 제외한 자기부담금이 발생하게 됩니다.",
    },
  ],
};

// 수강료
const datahashFour = {
  rows: [
    {
      title: "교육과정에 대한 상담을 받아보고 싶어요.",
      content:
        "KGA는 언제나 여러분의 궁금증에 답할 준비가 되어있습니다. 전화 상담은 02 479 4050, 카톡 문의는 @경일게임아카데미 로 문의 주시면 됩니다. 직접 방문을 통해서도 상담을 받아 보실 수 있습니다. 수강신청, 과정 상담 외의 진로 고민 상담도 가능합니다.",
    },
    {
      title: "지원자격이 어떻게 되나요?",
      content:
        "KGA 커리큘럼은 분야에 대해 전혀 모르는 사람들도 시작할 수 있도록 설계되었습니다. 짧게는 5개월, 길게는 9개월 동안 집중할 수 있는 시간과 도전 의식이 필요합니다. 개발자의 꿈을 가진 분들을 모두 환영합니다. 다만, KGA는 내일배움카드 보유자 또는 발급 가능자를 대상으로 교육을 진행하고 있습니다. HRD-Net에서 수강신청 과정이 필수입니다. 현직 공무원, 졸업예정자 이외의 재학생(4년제 대학생은 2학년 수료 후, 3년제 대학생은 1학년 수료 후, 2년제 대학생은 입학시점부터 가능합니다.), 연 매출 1억 5천만원 이상의 자영업자, 월 임금 300만원 이상 대규모 기업 종사자, 특수형태근로종사자는 내일배움카드 발급이 불가합니다.",
    },
    {
      title: "수강료는 얼마인가요?",
      content:
        "KGA는 꿈을 위해 비용을 요구하지 않습니다. 정부에서 주도하는 국가기간전략산업훈련, K-디지털 트레이닝 과정 하에 보장된 퀄리티 높은 강의로 전문적인 지식을 배우며, 과정에 따라 몇 백만원에서 많게는 천만원 이상의 수업료를 지원받을 수 있습니다. KGA가 수강생에게 요구하는 것은 꿈을 향한 열정과 되고자 하는 의지입니다.",
    },
    {
      title: "자진 하차할 경우 어떻게 되나요?",
      content:
        "국가기간전략산업훈련 국비지원은 내일배움카드 유효기간 5년 중 1번에 한해 수강료 전액 지원이 가능합니다. 자진 하차 또는 중도 이탈할 경우 이 기회가 사라지므로, 다음에 국비지원을 받을 시 내일배움카드 잔액을 제외한 자기부담금이 발생하게 됩니다.",
    },
  ],
};

// 취업
const datahashFive = {
  rows: [
    {
      title: "고등학교 졸업, 비전공자인데 취업이 가능할까요?",
      content:
        "물론 가능합니다! KGA의 수강 조건은 학력과 무관하며, 수강 과정은 기초 단계부터 쌓아갈 수 있도록 설계되어 있습니다. 이는 KGA가 배출한 수많은 비전공자 취업 결과로 검증되었습니다. IT 업계는 학력보다 실력을 중시하여 신입사원을 선발합니다. KGA는 수강생들에게 실무 경험을 느끼게 하기 위해 팀 프로젝트, 기업 협업 프로젝트, 모의면접 피드백 등 다방면으로 수강생들의 취업을 지원하고 있습니다. 수강생들은 KGA의 과정을 수료함으로써 회사에서 필요한 인재로서의 기본 역량을 갖추게 됩니다. 취업에서 한 걸음 더, 슈퍼 신입으로 만들어드립니다.",
    },
    {
      title: "커리큘럼을 자세히 확인하고 싶어요.",
      content:
        "각 과정을 클릭하면 과정 별 자세한 커리큘럼을 확인할 수 있습니다. KGA는 각 과정별 커리큘럼 중 팀 프로젝트를 통해 수강생들에게 독학으로는 겪을 수 없는 협업 경험을 갖게 합니다. 이는 취업 시에 놀라우리만치 도움이 되며, 좋은 개발자로 성장할 수 있는 기반을 다집니다.",
    },
    {
      title: "교육과정에 대한 상담을 받아보고 싶어요.",
      content:
        "KGA는 언제나 여러분의 궁금증에 답할 준비가 되어있습니다. 전화 상담은 02 479 4050, 카톡 문의는 @경일게임아카데미 로 문의 주시면 됩니다. 직접 방문을 통해서도 상담을 받아 보실 수 있습니다. 수강신청, 과정 상담 외의 진로 고민 상담도 가능합니다.",
    },
    {
      title: "주말에도 자습실을 사용할 수 있나요?",
      content:
        "자습실은 평일에는 09:00~21:00 시간 동안 사용 가능하며, 주말에는 09:00~18:00 시간대에 사용이 가능합니다. 요청 시 노트북을 대여해 드리고 있습니다.",
    },
    {
      title: "졸업하면 어떤 결과를 기대할 수 있나요?",
      content:
        "KGA 수료생은 현업자 출신의 교수와 현업에서 직무 수행 중인 선배 수료생에게 피드백 받은 유용하고 유효한 포트폴리오를 보유하게 됩니다. 현시대의 기업이 원하는 실무 능력을 갖추며, 팀 단위의 프로젝트를 수행하며 협업하고 소통할 수 있는 역량을 가지게 됩니다.",
    },
    {
      title: "취업 연계는 어떻게 이루어 지나요?",
      content:
        "KGA는 수료생들이 반드시 취업할 수 있도록 다양한 취업 프로젝트를 진행하고 있습니다. 개인별 공고 매칭부터 이력서와 자기소개서 작성, 포트폴리오 제작 등 모든 지도와 검토를 진행하며, 프로필 작성 및 관리까지 모두 알려드립니다. 또한, 현업에서 직무 수행중인 선배 수료생들을 면접관으로 초청하여 모의면접을 통해 취업에 필요한 모든 부분을 피드백 해드리고 있습니다. ",
    },
    {
      title: "채용 협력 파트너사는 어떤 회사들인가요?",
      content:
        "취업 협력 기업은 매우 다양하고 가변적이며, 매월 상시로 게임회사에서 직접 연락을 받아 채용 연계를 진행하고 있습니다. 우수 수강생에게는 인재 추천, 면접 제안 등의 기회가 주어집니다.",
    },
  ],
};

const styles = {
  bgColor: "#f6f6f6",
  // titleTextColor: "blue",
  // titleTextSize: '48px',
  // rowTitleColor: "blue",
  rowTitleTextSize: "1.2vw",
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
      <Header />
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
              width: "85%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: "2vw",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            {ReviewSelect === 0 ? (
              <>
                <div style={{ width: "40%" }}>
                  <Faq
                    data={dataAllOne}
                    styles={styles}
                    config={{
                      animate: true,
                    }}
                  />
                </div>
                <div style={{ width: "40%" }}>
                  <Faq
                    data={dataAllTwo}
                    styles={styles}
                    config={{
                      animate: true,
                    }}
                  />
                </div>
              </>
            ) : null}
            {ReviewSelect === 1 ? (
              <>
                <div style={{ width: "50%" }}>
                  <Faq
                    data={datahashOne}
                    styles={styles}
                    config={{
                      animate: true,
                    }}
                  />
                </div>
              </>
            ) : null}
            {ReviewSelect === 2 ? (
              <>
                <div style={{ width: "50%" }}>
                  <Faq
                    data={datahashTwo}
                    styles={styles}
                    config={{
                      animate: true,
                    }}
                  />
                </div>
              </>
            ) : null}
            {ReviewSelect === 3 ? (
              <>
                <div style={{ width: "50%" }}>
                  <Faq
                    data={datahashThree}
                    styles={styles}
                    config={{
                      animate: true,
                    }}
                  />
                </div>
              </>
            ) : null}
            {ReviewSelect === 4 ? (
              <>
                <div style={{ width: "50%" }}>
                  <Faq
                    data={datahashFour}
                    styles={styles}
                    config={{
                      animate: true,
                    }}
                  />
                </div>
              </>
            ) : null}
            {ReviewSelect === 5 ? (
              <>
                <div style={{ width: "50%" }}>
                  <Faq
                    data={datahashFive}
                    styles={styles}
                    config={{
                      animate: true,
                    }}
                  />
                </div>
              </>
            ) : null}
          </div>
        </FAQBoardContainer>
      </ContentsBoxTwoContainer>
      <Footer />
    </>
  );
};

export default QA;
