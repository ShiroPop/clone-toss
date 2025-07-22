// import "../styles/layout/PaymentSection.sass";
import { useRef } from "react";
import { useSequentialScrollAnimation } from "../hooks/useSequentialScrollAnimation";

const PaymentSection = ({ isMobileViewport }: { isMobileViewport: boolean }) => {
  const paymentScreen1 = "https://static.toss.im/assets/homepage/newtossim/chekout_screen_01.png";
  const paymentScreen2 = "https://static.toss.im/assets/homepage/newtossim/chekout_screen_02.png";
  const shadow = "https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png";

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imgBoxFirstRef = useRef<HTMLDivElement>(null);
  const textFirstRef = useRef<HTMLParagraphElement>(null);
  const imgBoxSecondRef = useRef<HTMLDivElement>(null);
  const textSecondRef = useRef<HTMLParagraphElement>(null);
  console.log([textFirstRef.current, imgBoxSecondRef.current]);
  useSequentialScrollAnimation({
    containerRef,
    targets: isMobileViewport
      ? [
          titleRef,
          imgBoxFirstRef,
          {
            current: {
              elements: [textFirstRef.current, imgBoxSecondRef.current],
              group: true,
            },
          },
          textSecondRef,
        ]
      : [
          titleRef,
          imgBoxSecondRef,
          {
            current: {
              elements: [textFirstRef.current, imgBoxFirstRef.current],
              group: true,
            },
          },
          textSecondRef,
        ],
  });

  const titleText = `결제는 간편하게,
할인과 적립은 두둑히`;
  const subText1 = isMobileViewport
    ? `온라인과 오프라인 모두 국내는 물론,
해외에서도 토스로 간편하게 결제해요.` //좁은 화면
    : `온라인과 오프라인 모두
국내는 물론, 해외에서도
토스로 간편하게 결제해요.`;
  const subText2 = isMobileViewport
    ? `결제할 땐, 혜택이 빠질 수 없죠. 쿠폰과 포인트
써서 할인 받고 토스프라임 적립까지 또 받아요.` //좁은 화면
    : `결제할 땐, 혜택이 빠질 수 없죠.
쿠폰과 포인트 써서 할인 받고
토스프라임 적립까지 또 받아요.`;

  return (
    <section className="sec bg_f9" ref={containerRef}>
      <div className="payment_inner">
        <div className="container_inner payment_container_wrap">
          <div className="title_wrap" ref={titleRef}>
            <h1 className="category">결제</h1>
            <h2 className="title">{titleText}</h2>
          </div>
          <div className="payment_content_wrap">
            <div className="payment_img1_wrap" ref={imgBoxFirstRef}>
              <img className="payment_img1" src={paymentScreen1} />
              <img className="payment_shadow" src={shadow} />
            </div>
            <p className="text payment_text1" ref={textFirstRef}>
              {subText1}
            </p>
            <div className="payment_img2_wrap" ref={imgBoxSecondRef}>
              <img className="payment_img2" src={paymentScreen2} />
              <img className="payment_shadow" src={shadow} />
            </div>
            <p className="text payment_text2" ref={textSecondRef}>
              {subText2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
