import React from "react";
import styled from "styled-components";

import MainReviewPlain from "./MainReviewPlain";
import MainReviewVideo from "./MainReviewVideo";

import Face1 from "../Image/face/Face1.png";
import Face2 from "../Image/face/Face2.png";
import Face3 from "../Image/face/Face3.png";
import Face4 from "../Image/face/Face4.png";
import Face5 from "../Image/face/Face5.png";
import Face6 from "../Image/face/Face6.png";
import Face7 from "../Image/face/Face7.png";
import Face8 from "../Image/face/Face8.png";
import Face9 from "../Image/face/Face9.png";
import Face10 from "../Image/face/Face10.png";
import Face11 from "../Image/face/Face11.png";
import Face12 from "../Image/face/Face12.png";
import Face13 from "../Image/face/Face13.png";
import Face14 from "../Image/face/Face14.png";
import Face15 from "../Image/face/Face15.png";
import Face16 from "../Image/face/Face16.png";
import Face17 from "../Image/face/Face17.png";
import Face18 from "../Image/face/Face18.png";

import Draggable from "react-draggable";

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const SlideColumnWrapper = styled.div`
  width: 17%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;

export default function MainSlide() {
  return (
    <Draggable axis="none">
      <SlideWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face1}
            textOne={"김지환"}
            textTwo={"게임 프로그래밍"}
            texThree={"클라이언트 프로그래머@카카오게임즈"}
            Contents={
              "원하는 회사에 입사해서 너무너무 기쁩니다. 프로그래밍과 전혀 상관없는 전공이었지만, 가장 기초부터 세밀한 부분까지 역량을 갖게 되었습니다. 기술적인 부분에서도 많은 것을 배웠지만, 노력한다면 할 수 있다는 자신감과 열정이야말로 KGA에서 크게 배워가는 점입니다. KGA는 올해 제가 했던 선택 중, 가장 잘한 선택입니다. 이건 절대로 빈말이 아닙니다."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face2}
            textOne={"김상균"}
            textTwo={"VR/AR 1기 "}
            texThree={"프로그래머@카카오게임즈"}
            Contents={
              "카카오의 게임 전문 자회사 카카오게임즈 프로그래머로 입사했습니다. ‘어차피 공부할 거, 국비 지원 받으면서 KGA에서 제대로 준비해보자’ 생각했습니다. KGA는 제가 초조해하거나 의욕이 꺾이지 않게 분위기를 다 잡아주었고, 그래서 공부가 더 잘 됐습니다. KGA에서 프로그래밍에만 집중해서 충분히 시간을 투자하고 노력한다면 전공자들보다 더 잘할 수 있어요. 비전공자도 본인만의 강점이 있고요. 과거 직군에서 배운 것들을 잘 활용하면 그게 곧 장점이죠."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face3}
            textOne={"윤수연"}
            textTwo={"게임기획 19기 "}
            texThree={"마블 퓨처파이트 개발 PM @넷마블 몬스터"}
            Contents={
              "다른 직종에 있고 나이가 많은 사람들 중 게임 업계에서 일하고 싶은 사람은 당장 왔으면 좋겠습니다. 망설여 봤자, 시간만 늦춰질 뿐이라고 생각해요. 저는 게임업계가 상당히 프리하고 열려있는 곳이라고 생각해요. 부담없이 도전했으면 좋겠고, 겁먹지 않아도 된다고 말해주고 싶어요."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face4}
            textOne={"부경준"}
            textTwo={"블록체인 1기 "}
            texThree={"low-code, 풀스택 개발자 @익스이노"}
            Contents={
              "나이에 대한 압박감도 있었고, 이전에 가지고 있던 프로그래밍 습관을 버리고 새로운 언어와 환경에 적응할 수 있을까? 라는 고민도 컸었죠. 새로운 언어 학습에 대한 두려움을 자신감으로 바꿀 수 있었고, 웹의 전반적인 개발인 풀스택 실무 기술 능력을 갖추게 되었습니다. KGA는 실무와 연관성이 높은 커리큘럼 구성으로 역량을 올릴 수 있는 곳입니다."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face5}
            textOne={"송용은"}
            textTwo={"게임프로그래밍 21기 "}
            texThree={"프로그래머 @111퍼센트"}
            Contents={
              "학원이 끝나 지하철을 타고 집에 가고 있을 때 합격 전화를 받았습니다. 내가 정말 합격한 게 맞나 싶었고 너무 기뻤습니다. 6개월 동안의 고생이 헛되지 않고 결실을 맺는 순간이라고 생각했습니다. 그 동안의 노력이 헛되지 않았다는 생각에 안심했습니다."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face6}
            textOne={"백민기"}
            textTwo={"블록체인 1기 "}
            texThree={"블록체인 개발자 @스마트엠투엠"}
            Contents={
              "블록체인 토큰 개발을 맞춤화하여 제작하고 그에 맞는 네트워크를 구축하는 블록체인 연구원, 개발자입니다. 경험을 쌓기 위한 용기 있는 도전으로 면접을 지원했는데 바로 합격해버려서 놀랐습니다. 처음에는 여기서 잘 버틸 수 있을지, 이렇게 많은 공부량과 언어를 어떻게 머리에다 넣을지 고민이 많았는데요. KGA에서 배움으로써 무슨 언어든 일단 하면 할 수 있다는 생각을 갖게 됐습니다.  IT에 고민이 있거나 포트폴리오가 부족한 분들, 대환영입니다."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face7}
            textOne={"조성민"}
            textTwo={"게임기획 18기 "}
            texThree={"게임 기획자 @펄어비스"}
            Contents={
              "펄어비스에 게임기획자로 취업했습니다. 전공은 시각디자인 학과였는데요. 항상 만드는 걸 좋아했는데 그 중에서도 게임을 만드는 게 제 취향을 저격했죠. KGA는 한 방향 주입식 교육이 아니라 순환하는 구조라서 정말 많은 도움이 되었어요. 정형화된 교육이 아니라 토론식, 실습식 교육이라고 느꼈어요."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face8}
            textOne={"박범기"}
            textTwo={"VR/AR 2기 "}
            texThree={"프로그래머 @미투온"}
            Contents={
              "꼭 국비가 아니더라도 KGA에 다녔을 것 같아요. 그만큼 되게 좋은 교육 기관이니까요. KGA에서 제대로 공부해서 게임 회사에 취업까지 하니 참 신기합니다. 제가 취업한 건 다 KGA 덕분입니다. 제가 나이도 있고 낭비할 시간이 없어서 여러 학원을 많이 알아 봤거든요. 하루에 많은 시간을 투자해서 배울 수 있는 학원을 찾다 보니까 KGA가 있더라고요."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face9}
            textOne={"이대연"}
            textTwo={"게임 프로그래밍 18기 "}
            texThree={"게임 클라이언트 프로그래머 @나인탭"}
            Contents={
              "처음 합격 통보를 받는 순간에는 현실감이 사라지면서 정말 합격 전화를 받은 것인지 믿기지 않았습니다. 현실감이 되돌아왔을 때는 한편으로는 기쁘고, 잘하고 싶다는 생각과 함께 다른 한편으로는 잘할 수 있을까 부담이 있었습니다. KGA는 취업성공패키지를 통해 알게 되었습니다. 덕분에 게임 프로그래밍에 어떻게 도전해야 하는지 첫 걸음부터 마지막까지 차근차근 배울 수 있었습니다. 앞으로 유튜브에 검색하면 바로 알 수 있을 만큼 유명한 게임을 개발하는 것이 목표입니다."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face10}
            textOne={"김승혁"}
            textTwo={"게임 기획 18기 "}
            texThree={"게임 기획 18기 / QA @넷게임즈"}
            Contents={
              "게임 업계에서 일을 하겠다는 생각은 못했는데, KGA에서 열심히 배워 게임 업계에서 일할 수 있게 되었습니다. 게임 업계는 다른 곳보다 개인의 개성을 존중하니까, 이 업계에서 일할 수 있어 정말 좋습니다.제가 힘들 때 ‘승혁씨는 조금만 더 열심히 하면 할 수 있다. 포기하지 말라’고 말씀해주셨어요. 저의 가능성을 알아봐 주신 덕분에 포기하지 않고 열심히 해서 동기들 중 가장 먼저 취업했습니다."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face11}
            textOne={"배효림"}
            textTwo={"게임 프로그래밍 17기 "}
            texThree={"엔진 프로그래머 @넷마블 체리"}
            Contents={
              "프로그래머가 되겠다는 꿈만을 쫓아 그 꿈을 이룰 수 있게 체계적으로 도와주는 KGA에 입학하여 6개월 과정을 수료하고 넷마블 엔진 프로그래머로 취업했습니다! 합격 전화를 받았을 때 정말 기쁘고 믿을 수가 없었습니다. 가장 먼저 든 생각은 제가 합격할 수 있었던 가장 큰 이유인 교수님과 학원에 대한 감사였습니다. 전화를 끊자마자 학원에 달려가 “교수님!! 저 최종 합격했어요!!” 외쳤습니다."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face12}
            textOne={"허지훈"}
            textTwo={"게임 기획 15기 "}
            texThree={"리니지2 레볼루션 성장 파트 @넷마블 네오"}
            Contents={
              "학교 졸업 후 모든 공채에서 떨어지고 아직 준비가 덜 됐다는 판단이 들어 공백 없이 공부하려고 KGA에 입학했습니다. KGA에서 배운 후 작성한 이력서와 포트폴리오를 등록하니 신기하게도 연락이 끊임없이 왔습니다. 회사에서 원하는 문서를 만들 수 있도록 교육받은 것이 가장 큰 도움이 된 것 같습니다."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face13}
            textOne={"김민재"}
            textTwo={"게임 기획 14기"}
            texThree={"시스템 기획자 @NC소프트"}
            Contents={
              "막연한 마음으로 시작했지만 KGA를 다니면서 많이 배우고 좋은 결과를 얻을 수 있었습니다. NC소프트가 큰 회사라 그런지 사내에 카페, 찜질방, 헬스장, 스크린 골프장, 도서관 등이 있어서 복지 측면에서는 좋은 게 많은 것 같아요. 서류 합격 후 가장 먼저 들었던 생각은 ‘이 포트폴리오가 대기업에서도 먹히는구나.’ 였고 기분이 좋았습니다. 포폴 만들었을 때의 과정이 생각나면서 바로 교수님께 전화했어요. 교수님이 잘 됐다고 바로 면접 준비도 하자고 하셨어요. 최종 합격을 했을 때도 처음엔 믿기지 않았죠."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face14}
            textOne={"김세영"}
            textTwo={"게임기획 14기"}
            texThree={"검은사막 모바일 @펄어비스"}
            Contents={
              "게임 기획자로 진로를 결정 한 후 이 결정에 제 모든걸 걸어야겠다고 생각을 했습니다. 그만큼 철저하게 학원을 찾아 다녔고, 여러 학원에 상담을 받아봤지만 저에게 신뢰감을 준 학원이 바로 KGA였어요. 펄어비스에 다니시는 분들은 자신의 회사에 굉장히 자부심을 가지고 계셨어요. 그 모습을 보고 펄어비스는 굉장히 좋은 회사구나, 하는 생각이 들어 선택하게 되었습니다."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face15}
            textOne={"이대홍"}
            textTwo={"게임기획 12기 "}
            texThree={"기획자 @넥슨코리아"}
            Contents={
              "국어국문학과와 문헌정보학과를 복수 전공했습니다. 지금은 판교에 있는 넥슨코리아 본사에서 전투 기획 등 여러 업무를 하고 있지만 원래 희망했던 시나리오 기획을 메인으로 하고 있습니다. 저는 동기들 중 가장 마지막으로 취업을 하게 되었는데요. 졸업하고 나서도 담당 교수님께서 학원으로 나오라며 무려 반 년 이상 관리를 해주셨고 각 회사에 맞게 어떤 포트폴리오를 써야 하는지부터 포트폴리오 검수 또한 해주셨습니다. 제가 학원에 나오지 않을 때도 취업 연계를 해 주신 것에 대해 매우 감사하게 생각합니다."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face16}
            textOne={"권순우"}
            textTwo={"게임 프로그래밍 12기"}
            texThree={"크로스파이어2 개발팀 @스마일게이트"}
            Contents={
              "원하던 파트로 입사를 하게 되어 정말 꿈만 같습니다. 합격 통보가 와서 당황했습니다. 합격했다는 게 조금씩 실감나기 시작했을 때는 ‘지금까지 공부한 게 의미 없지 않았구나’ 생각도 들었습니다. 전 본격적으로 프로그래밍 공부를 시작하기 전까지 프로그램, 수학에 대해서 전혀 모르는 사람이었고 컴퓨터 포맷조차 하지 못하는 컴맹이었습니다. 여러분들도 프로그래밍에 어려움을 느끼실 때 인내를 갖고 열심히 노력해서 원하는 결과를 이루길 빕니다."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face17}
            textOne={"남성현"}
            textTwo={"게임 기획 12기"}
            texThree={"프렌즈팝콘 개발팀 @카카오게임즈"}
            Contents={
              "저는 아랍어학과 출신이고, 원래는 다른 일을 하다가 정말로 하고 싶은 일을 하고 싶어서 서른이라는 늦은 나이에 학원에 다니게 되었습니다. 현재는 카카오게임즈 프렌즈팝콘 개발팀에서 콘텐츠, 런칭, 유료화 기획 등 라이브 서비스를 하고 있습니다. 저에게 KGA는 계단입니다. 제 성장의 발판이 되어주었기 때문입니다."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face18}
            textOne={"김득수"}
            textTwo={"게임 기획 3기"}
            texThree={"아이온 QA팀 @NC소프트"}
            Contents={
              "게임을 즐길 줄만 알았지, 게임에 대해 무엇을 알아야 되고 무엇을 할 줄 알아야 되는지 아무 것도 모르는 상태에서 KGA에 오게 됐는데 이렇게 취업까지 하게 됐네요. 실무를 겪어본 결과, KGA에서 봐왔던 것과 크게 다르지 않았어요. 제가 QA 업무를 할 때 항목이라든지 요소들이 좀 더 많고 체계가 잘 잡혀 있을 뿐 구조라든지 KGA에서 봐왔던 UI 측면에서는 많이 다르지 않아서 쉽게 적응할 수 있었습니다."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
      </SlideWrapper>
    </Draggable>
  );
}
