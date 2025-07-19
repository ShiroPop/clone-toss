import "../styles/abstracts/mixins.sass";
import "../styles/abstracts/utilities.sass";
import "../styles/layout/PaymentSection.sass";

const PaymentSection = ({ isMobileViewport }: { isMobileViewport: boolean }) => {
  const paymentScreen1 = "https://static.toss.im/assets/homepage/newtossim/chekout_screen_01.png";
  const paymentScreen2 = "https://static.toss.im/assets/homepage/newtossim/chekout_screen_02.png";
  const shadow = "https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png";

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
    <section className="sec bg_f9">
      <div className="payment_inner">
        <div className="container_inner container_wrap">
          <div className="title_wrap">
            <h1 className="category">결제</h1>
            <h2 className="title">{titleText}</h2>
          </div>
          <div className="payment_content_wrap">
            <div className="payment_img1_wrap">
              <img className="payment_img1" src={paymentScreen1} />
              <img className="payment_shadow" src={shadow} />
            </div>
            <p className="text payment_text1">{subText1}</p>
            <div className="payment_img2_wrap">
              <img className="payment_img2" src={paymentScreen2} />
              <img className="payment_shadow" src={shadow} />
            </div>
            <p className="text payment_text2">{subText2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
