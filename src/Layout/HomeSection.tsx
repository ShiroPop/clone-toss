import "../styles/layout/HomeSection.sass";
import "../styles/abstracts/mixins.sass";

const HomeSection = () => {
  const homeScreen1 = "https://static.toss.im/assets/homepage/newtossim/home_screen_1.png";
  const homeScreen2 = "https://static.toss.im/assets/homepage/newtossim/home_screen_2.png";
  const shadow = "https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png";

  const titleText = `내 돈 관리,
지출부터 일정까지
똑똑하게`;
  const subText = `토스에 계좌와 카드를 연결해 보세요.
계좌 잔액, 대출·투자 내역은 기본,
일자별 소비와 수입까지 한 번에 볼 수 있어요.`;

  return (
    <section className="sec">
      <div className="home_padding">
        <div className="container_inner">
          <div className="home_height">
            <div className="title_wrap">
              <h1 className="category">홈 · 소비</h1>
              <h2 className="title">{titleText}</h2>
            </div>
            <div className="home_imgs_wrap">
              <div className="home_imgbox_first">
                <img className="home_img" src={homeScreen1} />
                <img className="home_img_shadow" src={shadow} />
              </div>
              <div className="home_imgbox_second">
                <img className="home_img" src={homeScreen2} />
                <img className="home_img_shadow" src={shadow} />
              </div>
            </div>
            <p className="text home_text">{subText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
