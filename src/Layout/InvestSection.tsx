/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { fadeTranslateUpStyle } from "../styles/abstracts/animation";
import "../styles/abstracts/mixins.sass";
import "../styles/abstracts/utilities.sass";
import "../styles/layout/InvestSection.sass";
import { useSequentialScrollAnimation } from "../hooks/useSequentialScrollAnimation";

const InvestSection = ({ isMobileViewport }: { isMobileViewport: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subText1Ref = useRef<HTMLDivElement>(null);
  const subText2Ref = useRef<HTMLDivElement>(null);
  const subText3Ref = useRef<HTMLDivElement>(null);

  useSequentialScrollAnimation({
    containerRef,
    targets: [titleRef, subText1Ref, subText2Ref, subText3Ref],
  });

  const homeScreen = "https://static.toss.im/assets/homepage/newtossim/invest_screen.png";
  const shadow = "https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png";

  const titleText = `투자,
모두가 할 수 있도록`;
  const subText1 = `송금처럼 쉬운 구매 경험
그리고 투자 판단에
도움을 주는 콘텐츠까지`;
  const subText2 = `이해하기 쉬운 용어
설명이 필요 없는
직관적인 화면 구성`;
  const subText3 = isMobileViewport
    ? `별도 앱 설치 없이 토스에서 바로,
토스증권으로 나만의 
투자를 시작해 보세요.` //좁은 화면
    : `별도 앱 설치 없이 토스에서 바로,
토스증권으로 나만의 투자를 시작해 보세요.`;

  return (
    <section className="sec" ref={containerRef}>
      <div className="invest_inner">
        <div className="container_inner">
          <div ref={titleRef}>
            <h1 className="category">투자</h1>
            <h2 className="title mb_20">{titleText}</h2>
            <p className="text invest_text_show">
              이해하기 쉬운 용어, 설명이 필요 없는 직관적인 화면 구성, 송금처럼 쉬운 구매 경험 그리고 투자 판단에 도움을
              주는 콘텐츠까지
            </p>
          </div>
          <div className="invest_contents_wrap">
            <div className="invest_img_wrap">
              <img className="invest_img" src={homeScreen} />
              <img className="invest_img_shadow" src={shadow} />
            </div>
            <div className="invest_text_first" ref={subText1Ref}>
              <p className="invest_text mw_220">{subText1}</p>
            </div>
            <div className="invest_text_second" ref={subText2Ref}>
              <p className="invest_text mw_220">{subText2}</p>
            </div>
          </div>
          <div>
            <p className="invest_text ta_c" ref={subText3Ref}>
              {subText3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestSection;
