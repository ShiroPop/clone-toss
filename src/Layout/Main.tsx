import { useEffect, useState } from "react";
import "./Main.sass";
import { ReactComponent as Wave } from "./svgPath.svg";

const Home = ({ isMobile }: { isMobile: boolean }) => {
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isApple = /iPhone|Pad|iPod/i.test(navigator.userAgent);

  const playstoreULR = "https://play.google.com/store/apps/details?id=viva.republica.toss&pli=1";
  const appstoreULR = "https://itunes.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328?mt=8";

  const handlePageScroll = () => {
    const scrollAmount = window.innerHeight * 0.01;
    window.scrollBy({ top: scrollAmount, behavior: "smooth" });
  };

  const headingText = isMobile
    ? `금융의 모든 것 
토스에서
쉽고 간편하게` // 좁은 화면
    : `금융의 모든 것 
토스에서 쉽고 간편하게`;

  const ButtonType = () => {
    if (isAndroid) {
      return (
        <a className="mobile_button" href={playstoreULR} target="_blank">
          앱 다운로드
        </a>
      );
    } else if (isApple) {
      return (
        <a className="mobile_button" href={appstoreULR} target="_blank">
          앱 다운로드
        </a>
      );
    } else {
      return (
        <div className="button_wrap">
          <a className="web_button" href={appstoreULR} style={{ marginRight: "4px" }} target="_blank">
            <img className="icon_img" src="https://static.toss.im/png-icons/timeline/applekorea.png" />
            App Store
          </a>
          <a className="web_button" href={playstoreULR} target="_blank">
            <img className="icon_img" src="https://static.toss.im/png-icons/timeline/googleplay.png" />
            Google Play
          </a>
        </div>
      );
    }
  };

  return (
    <>
      <img className="background_img" src="https://static.toss.im/assets/homepage/newtossim/new_main.png" />
      <div className="background_white"></div>
      <div className="intro_wrap">
        <div className="intro_top">
          <h1>{headingText}</h1>
          {ButtonType()}
        </div>
        <div className="intro_bottom" onClick={handlePageScroll}>
          <Wave style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </>
  );
};

export default Home;
