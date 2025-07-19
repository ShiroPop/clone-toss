import "../styles/abstracts/mixins.sass";
import "../styles/abstracts/utilities.sass";
import "../styles/layout/LoanSection.sass";

import loanScreen1 from "../assets/img/loanScreen1.png";
import loanScreen2 from "../assets/img/loanScreen2.png";
import loanScreen3 from "../assets/img/loanScreen3.png";
import loanScreen4 from "../assets/img/loanScreen4.png";
import loanScreen5 from "../assets/img/loanScreen5.png";

const LoanSection = () => {
  const shadow = "https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png";

  const titleText = `여러 은행의 조건을
1분 만에
확인해보세요`;
  const subText = `앉은 자리에서 여러 은행의 한도와 금리를 비교하고
내게 꼭 맞는 대출을 찾아보세요.
신용, 비상금, 대환, 주택담보대출 모두 가능해요.
`;

  return (
    <section className="sec">
      <div className="loansection_inner_wrap">
        <div className="container_inner">
          <div className="loansection_wrap">
            <div className="loansection_title_wrap">
              <h1 className="category">대출</h1>
              <h2 className="title">{titleText}</h2>
            </div>

            <div className="loansection_img_position">
              <div className="loansection_img_wrap">
                <div className="loansection_imgbox">
                  <img className="loansection_img" src={loanScreen1} />
                </div>
                <img className="loansection_img_shadow" src={shadow} />
              </div>
            </div>

            <span className="title lh_15 color_g51">한도는 높게,</span>
            <span className="title lh_15 color_g51">
              금리는 <span className="color_8b">낮게,</span>
            </span>
            <span className="title lh_15 color_g51 mb_30">
              부담은 <span className="color_d1">적게.</span>
            </span>
            <p className="text">{subText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanSection;
