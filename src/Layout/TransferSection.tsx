import "../styles/abstracts/mixins.sass";
import "../styles/abstracts/utilities.sass";
import "../styles/layout/TransferSection.sass";

import { ReactComponent as WonIcon } from "../assets/svg/wonIcon.svg";
import { ReactComponent as ProtectIcon } from "../assets/svg/protectIcon.svg";
import { ReactComponent as ClockIcon } from "../assets/svg/clockIcon.svg";

const TransferSection = () => {
  const titleText = `간편하고 안전하게
수수료는 평생 무료로,
이런 송금 써보셨나요?`;

  const contents = [
    {
      key: "lifetime",
      icon: <WonIcon className="category_icon_img" />,
      feature: "평생 무료 송금",
      title: `토스 평생 무료송금으로
모두의 금융에 자유를`,
      contents: `누구에게 보내든 은행 상관 없이,
이제 토스와 함께 수수료 걱정 없이 송금하세요.`,
      img: "https://static.toss.im/assets/homepage/newtossim/section1_2_01_re.png",
    },
    {
      key: "fraud",
      icon: <ProtectIcon className="category_icon_img" />,
      feature: "사기계좌 조회",
      title: `송금 전 사기 내역 조회로
피해를 미리 방지할 수 있어요`,
      contents: `송금 전 토스가 알아서 사기 내역 조회를 해드려요.
상대방의 연락처 또는 계좌가 사기 계좌인지 조회해
안전하게 송금할 수 있어요.`,
      img: "https://static.toss.im/assets/homepage/newtossim/section1_2_02.png",
    },
    {
      key: "auto",
      icon: <ClockIcon className="category_icon_img" />,
      feature: "자동이체 예약",
      title: `은행 점검 시간,
기다릴 필요 없어요`,
      contents: `은행 점검 시간에는 자동이체 예약을 이용해보세요.
점검 시간이 끝나면 토스가 알아서 송금해드릴게요.`,
      img: "https://static.toss.im/assets/homepage/newtossim/section1_2_03.png",
    },
  ];

  return (
    <section className="sec bg_f9">
      <div className="transfer_wrap">
        <div className="container_inner">
          <h1 className="category">송금</h1>
          <h2 className="title pb_80">{titleText}</h2>
          {contents.map((ele, index) => (
            <div
              key={ele.key}
              className={`contents_wrap ${index === 1 ? "flexdir_rv" : ""} ${index === 2 ? "m_0" : ""}`}
            >
              <div className="contents_text_wrap">
                <p className="sub_category">
                  <span className="category_icon_img_wrap">{ele.icon}</span>
                  {ele.feature}
                </p>
                <p className="sub_title">{ele.title}</p>
                <p className="sub_text">{ele.contents}</p>
              </div>
              <img className="contents_img" src={ele.img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransferSection;
