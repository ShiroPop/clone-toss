import "../styles/abstracts/mixins.sass";
import "../styles/abstracts/utilities.sass";
import "../styles/layout/ShowSection.sass";

const ShowSection = () => {
  const showImg1 = "https://static.toss.im/assets/homepage/newtossim/section2_1_document.jpg";
  const showImg2 = "https://static.toss.im/assets/homepage/newtossim/section2_2_insu_01.jpg";
  const showImg3 = "https://static.toss.im/assets/homepage/newtossim/section2_2_insu_02.jpg";
  const showImg4 = "https://static.toss.im/assets/homepage/newtossim/section2_3_apt_01.jpg";

  const titleText = `금융을 넘어
일상을 더 편리하게`;

  const subText1 = `놓치기 쉬운 세금 납부 및 환급은 물론
발급을 받을 때마다 귀찮았던 주민등록 등초본까지.
이제 토스로 편하게 신청하고 받아보세요.`;
  const subTitle2 = `조회부터 상담,
병원비 돌려받기를 간편하게`;
  const subText2 = `또래보다 보험료는 적절하게 내고 있는지, 낸 만큼 보장받고 있는지 확인해 보세요.
전문가와의 상담을 통해 내게 딱 맞는 보험을 추천 받고, 병원비를 간편하게 청구할 수 있어요.`;
  const subText3 = `집과 자동차의 공통점은 잘 사서, 잘 관리하고, 잘 팔아야 한다는 것.
시세조회부터 아파트 관리비 납부, 자동차 보험료 조회까지 부동산과 자동차 관리도 토스에서 시작해 보세요.`;

  return (
    <section className="sec">
      <div className="container_inner show_inner">
        <h1 className="show_title">{titleText}</h1>
        <div className="show_section1">
          <img className="show_img1" src={showImg1} />
          <h2 className="show_subtitle">세금 납부, 등본 발금까지</h2>
          <h2 className="show_subtitle color_b0 pb_24">토스로 한 번에</h2>
          <p className="show_subtext">{subText1}</p>
        </div>
        <div className="show_section2">
          <div className="show_img2_wrap">
            <img className="show_img2" src={showImg2} />
            <div>
              <h2 className="show_subtitle">보험</h2>
              <h2 className="show_subtitle color_b0">{subTitle2}</h2>
            </div>
          </div>
          <div className="show_img3_wrap">
            <img className="show_img3" src={showImg3} />
            <p className="show_subtext">{subText2}</p>
          </div>
        </div>
        <div className="show_section3">
          <img className="show_img4" src={showImg4} />
          <div className="show_subtext4">
            <div className="flex_1">
              <h2 className="show_subtitle">내 부동산 · 자동차</h2>
              <h2 className="show_subtitle color_b0 pb_30">정기적으로 관리해보세요</h2>
            </div>
            <p className="show_subtext flex_1">{subText3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowSection;
