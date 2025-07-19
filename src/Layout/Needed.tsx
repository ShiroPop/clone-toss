import "../styles/abstracts/mixins.sass";
import "../styles/abstracts/utilities.sass";
import "../styles/layout/Needed.sass";

const Needed = ({ isMobileViewport }: { isMobileViewport: boolean }) => {
  const titleText = isMobileViewport
    ? `꼭 필요했던
금융`
    : `꼭 필요했던 금융`;

  return (
    <div className="needed_background">
      <span className="needed_text">{titleText}</span>
    </div>
  );
};

export default Needed;
