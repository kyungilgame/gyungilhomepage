import React from "react";
import styled from "styled-components";

import MainReviewPlain from "./MainReviewPlain";
import MainReviewVideo from "./MainReviewVideo";

import Face1 from "../Image/face/Face1.png";
import Face2 from "../Image/face/Face2.png";
import Face3 from "../Image/face/Face3.png";
import Face4 from "../Image/face/Face4.png";
import Face11 from "../Image/face/Face11.png";
import Face12 from "../Image/face/Face12.png";
import Face6 from "../Image/face/Face6.png";
import Face8 from "../Image/face/Face8.png";
import Face15 from "../Image/face/Face15.png";
import Face17 from "../Image/face/Face17.png";

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
`;

const SlideColumnWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;

export default function MainSlide() {
  return (
    <>
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
            textTwo={"VR/AR 1기"}
            texThree={"프로그래머 @카카오게임즈"}
            Contents={
              "카카오의 게임 전문 자회사 카카오게임즈 프로그래머로 입사했습니다. ‘어차피 공부할 거, 국비 지원 받으면서 KGA에서 제대로 준비해보자’ 생각했습니다. KGA는 제가 초조해하거나 의욕이 꺾이지 않게 분위기를 다 잡아주었고, 그래서 공부가 더 잘 됐습니다. KGA에서 프로그래밍에만 집중해서 충분히 시간을 투자하고 노력한다면 전공자들보다 더 잘할 수 있어요. 비전공자도 본인만의 강점이 있고요. 과거 직군에서 배운 것들을 잘 활용하면 그게 곧 장점이죠."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face3}
            textOne={"윤수연"}
            textTwo={"게임 기획 19기"}
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
            textTwo={"블록체인 1기"}
            texThree={"low-code, 풀스택 개발자 @익스이노"}
            Contents={
              "나이에 대한 압박감도 있었고, 이전에 가지고 있던 프로그래밍 습관을 버리고 새로운 언어와 환경에 적응할 수 있을까? 라는 고민도 컸었죠. 새로운 언어 학습에 대한 두려움을 자신감으로 바꿀 수 있었고, 웹의 전반적인 개발인 풀스택 실무 기술 능력을 갖추게 되었습니다. KGA는 실무와 연관성이 높은 커리큘럼 구성으로 역량을 올릴 수 있는 곳입니다."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face11}
            textOne={"배효림"}
            textTwo={"게임 프로그래밍 17기"}
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
            textTwo={"게임 기획 15기"}
            texThree={"리니지2 레볼루션 성장 파트 @넷마블 네오"}
            Contents={
              "학교 졸업 후 모든 공채에서 떨어지고 아직 준비가 덜 됐다는 판단이 들어 공백 없이 공부하려고 KGA에 입학했습니다. KGA에서 배운 후 작성한 이력서와 포트폴리오를 등록하니 신기하게도 연락이 끊임없이 왔습니다. 회사에서 원하는 문서를 만들 수 있도록 교육받은 것이 가장 큰 도움이 된 것 같습니다."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face6}
            textOne={"백민기"}
            textTwo={"블록체인 1기"}
            texThree={"블록체인 개발자 @스마트엠투엠"}
            Contents={
              "블록체인 토큰 개발을 맞춤화하여 제작하고 그에 맞는 네트워크를 구축하는 블록체인 연구원, 개발자입니다. 경험을 쌓기 위한 용기 있는 도전으로 면접을 지원했는데 바로 합격해버려서 놀랐습니다. 처음에는 여기서 잘 버틸 수 있을지, 이렇게 많은 공부량과 언어를 어떻게 머리에다 넣을지 고민이 많았는데요. KGA에서 배움으로써 무슨 언어든 일단 하면 할 수 있다는 생각을 갖게 됐습니다.  IT에 고민이 있거나 포트폴리오가 부족한 분들, 대환영입니다."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face8}
            textOne={"박범기"}
            textTwo={"VR/AR 2기"}
            texThree={"프로그래머 @미투온"}
            Contents={
              "꼭 국비가 아니더라도 KGA에 다녔을 것 같아요. 그만큼 되게 좋은 교육 기관이니까요. KGA에서 제대로 공부해서 게임 회사에 취업까지 하니 참 신기합니다. 제가 취업한 건 다 KGA 덕분입니다. 제가 나이도 있고 낭비할 시간이 없어서 여러 학원을 많이 알아 봤거든요. 하루에 많은 시간을 투자해서 배울 수 있는 학원을 찾다 보니까 KGA가 있더라고요."
            }
          ></MainReviewPlain>
        </SlideColumnWrapper>
        <SlideColumnWrapper>
          <MainReviewPlain
            image={Face15}
            textOne={"이대홍"}
            textTwo={"게임 기획 12기"}
            texThree={"기획자@넥슨코리아"}
            Contents={
              "국어국문학과와 문헌정보학과를 복수 전공했습니다. 지금은 판교에 있는 넥슨코리아 본사에서 전투 기획 등 여러 업무를 하고 있지만 원래 희망했던 시나리오 기획을 메인으로 하고 있습니다. 저는 동기들 중 가장 마지막으로 취업을 하게 되었는데요. 졸업하고 나서도 담당 교수님께서 학원으로 나오라며 무려 반 년 이상 관리를 해주셨고 각 회사에 맞게 어떤 포트폴리오를 써야 하는지부터 포트폴리오 검수 또한 해주셨습니다. 제가 학원에 나오지 않을 때도 취업 연계를 해 주신 것에 대해 매우 감사하게 생각합니다."
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
      </SlideWrapper>
    </>
  );
}
