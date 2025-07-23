/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { useSequentialScrollAnimation } from "../hooks/useSequentialScrollAnimation";
import { PhoneAnimation } from "../animation/PhoneAnimation";

const LoanSection = ({ isMobileViewport }: { isMobileViewport: boolean }) => {
  const shadow = "https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png";

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imgBoxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subTitle1 = useRef<HTMLParagraphElement>(null);
  const subTitle2 = useRef<HTMLParagraphElement>(null);
  const subTitle3 = useRef<HTMLParagraphElement>(null);

  useSequentialScrollAnimation({
    containerRef,
    targets: isMobileViewport
      ? [titleRef, imgBoxRef, subTitle1, subTitle2, subTitle3, textRef]
      : [titleRef, imgBoxRef, textRef, subTitle1, subTitle2, subTitle3],
  });

  const titleText = `여러 은행의 조건을
1분 만에
확인해보세요`;
  const subText = `앉은 자리에서 여러 은행의 한도와 금리를 비교하고
내게 꼭 맞는 대출을 찾아보세요.
신용, 비상금, 대환, 주택담보대출 모두 가능해요.
`;

  return (
    <section className="sec" ref={containerRef}>
      <div className="loan_inner_wrap">
        <div className="container_inner">
          <div className="loan_wrap">
            <div className="loan_title_wrap" ref={titleRef}>
              <h1 className="category">대출</h1>
              <h2 className="title">{titleText}</h2>
            </div>

            <div className="loan_img_position" ref={imgBoxRef}>
              <div className="loan_img_wrap">
                <div className="loan_imgbox">
                  <div className="loan_img">
                    <PhoneAnimation />
                  </div>
                  {/* <img className="loan_img" src={loanScreen1} /> */}
                </div>
                <img className="loan_img_shadow" src={shadow} />
              </div>
            </div>

            <span className="title lh_15 color_g51" ref={subTitle1}>
              한도는 높게,
            </span>
            <span className="title lh_15 color_g51" ref={subTitle2}>
              금리는 <span className="color_8b">낮게,</span>
            </span>
            <span className="title lh_15 color_g51 mb_30" ref={subTitle3}>
              부담은 <span className="color_d1">적게.</span>
            </span>
            <p className="text" ref={textRef}>
              {subText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanSection;
