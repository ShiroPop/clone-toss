import "../styles/abstracts/mixins.sass";
import "../styles/abstracts/utilities.sass";
import "../styles/layout/CreditSection.sass";

const CreditSection = () => {
  const titleText = `금융 생활의 첫 걸음,
신용점수를 미리
무료로 관리하세요`;

  const contents = [
    {
      key: "my",
      icon: "https://static.toss.im/icons/png/4x/icon-credit-grade-check-2.png",
      title: "내 신용점수",
      contents: `언제 어디서든, 원할 때 간편하게
KCB, NICE 신용점수를 한 곳에서 확인할 수 있어요.`,
    },
    {
      key: "improve",
      icon: "https://static.toss.im/icons/png/4x/icon-credit-grade-up-2.png",
      title: "신용점수 올리기",
      contents: `통신비, 일반 납부내역 등의 서류를
토스에서 바로 제출해 신용점수를 올릴 수 있어요.`,
    },
    {
      key: "noti",
      icon: "https://static.toss.im/icons/png/4x/icon-alarm-3.png",
      title: "신용관리 알림",
      contents: `신용점수에 변동이 생기면 토스가 알람을 보내드려요.
나의 신용점수가 바뀔 때마다 바로 확인하세요.`,
    },
    {
      key: "tip",
      icon: "https://static.toss.im/icons/png/4x/icon-bulb-2.png",
      title: "신용관리 팁",
      contents: `신용점수 관리가 막막하다면?
신용관리 팁 콘텐츠를 한번 읽어보세요. `,
    },
  ];

  return (
    <section className="sec bg_f9">
      <div className="credit_wrap">
        <div className="container_inner">
          <h1 className="category">신용</h1>
          <h2 className="title pb_80">{titleText}</h2>
          <div className="credit_contents_wrap">
            {contents.map((ele, index) => (
              <div key={ele.key} className="credit_contentbox">
                <img className="credit_content_icon" src={ele.icon} />
                <div className="credit_content_title">{ele.title}</div>
                <div className="credit_content_contents">{ele.contents}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditSection;
