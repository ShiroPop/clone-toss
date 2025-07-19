import "../styles/abstracts/mixins.sass";
import "../styles/abstracts/utilities.sass";
import "../styles/layout/BusinessSection.sass";

const BusinessSection = () => {
  const businessImg = "https://static.toss.im/assets/homepage/newtossim/section4_device_new.png";

  const businessMainText = `사업을 시작하셨나요?
사업의 시작부터 관리까지
이제 토스와 함께 하세요.`;

  const contents = [
    {
      key: "checkout",
      title: "토스결제",
      content: `합리적인 수수료,
간편한 결제 경험으로 비용은
절감하고 매출은 늘리세요.`,
      button: "가맹점 문의하기",
      href: "https://toss.im/pay",
    },
    {
      key: "financial ",
      title: "내 매출 장부",
      content: `내 매출 장부 따로 관리할 필요 없어요.
총 매출, 총 입금, 총 지출을 보기 쉽게 알려드려요.`,
      button: "자세히 알아보기",
      href: "https://toss.im/tossfeed/article/business-ledger",
    },
    {
      key: "payments",
      title: "토스페이먼츠",
      content: `시작하기 어려웠던 온라인 비즈니스,
온라인 결제 토스페이먼츠와
함께 해보세요.`,
      button: "홈페이지 바로가기",
      href: "https://www.tosspayments.com",
    },
    {
      key: "place",
      title: "토스플레이스",
      content: `포스·주문·결제 시스템까지
오프라인 매장을 위한
모든 것이 준비되어 있어요.`,
      button: "홈페이지 바로가기",
      href: "https://tossplace.com",
    },
  ];

  return (
    <section className="sec bg_00">
      <div className="business_inner">
        <div className="business_img_wrap">
          <img className="business_img" src={businessImg} />
        </div>
        <div className="business_text_wrap">
          <h1 className="business_title">사업도 토스와 함께</h1>
          <p className="business_text">{businessMainText}</p>
        </div>
        <div className="business_contents_flex">
          <div className="business_contents_wrap">
            {contents.map((ele) => (
              <div key={ele.key} className="business_contentbox">
                <span className="cusiness_content_title">{ele.title}</span>
                <p className="cusiness_content_text">{ele.content}</p>
                <a className="cusiness_content_button" href={ele.href}>
                  {ele.button}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
