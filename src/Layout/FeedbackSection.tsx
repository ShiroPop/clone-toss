import "../styles/abstracts/mixins.sass";
import "../styles/abstracts/utilities.sass";
import "../styles/layout/FeedbackSection.sass";

const FeedbackSection = () => {
  const feedbackIcon = "https://static.toss.im/3d-emojis/u1F4C4-u26A0.png";

  const href = "https://toss.im/ethics";

  const text = `토스팀과의 협업 중 불편을 느끼셨나요?
지금 바로 알려주세요.`;

  return (
    <section className="feedback_sec">
      <div className="container_inner mw_800">
        <div className="feedback_wrap">
          <div className="feedback_text_wrap">
            <h1 className="feedback_title">비즈니스 고객 제보</h1>
            <p className="feedback_text">{text}</p>
            <a className="feedback_button" href={href}>
              접수하기
            </a>
          </div>
          <img className="feedback_icon" src={feedbackIcon} />
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
