import "../styles/layout/Main.sass";
import { ReactComponent as Wave } from "../assets/svg/svgPath.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Home = ({ isMobileViewport }: { isMobileViewport: boolean }) => {
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isApple = /iPhone|Pad|iPod/i.test(navigator.userAgent);
  const isMobile = isAndroid || isApple;

  const targetRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!floatRef.current) return;

    const wave = gsap.timeline({ repeat: -1, yoyo: true });

    wave
      .to(floatRef.current, {
        y: 10,
        opacity: 1,
        duration: 0.4,
        ease: "sine.in",
      })
      .to(floatRef.current, {
        y: -10,
        opacity: 0,
        duration: 1,
        ease: "sine.out",
      });
  });

  const scrollToTarget = () => {
    if (!targetRef.current) return;

    document.body.style.overflow = "hidden";

    const currentScroll = window.scrollY;
    const targetScroll = targetRef.current.getBoundingClientRect().top + currentScroll;
    const distance = Math.abs(targetScroll - currentScroll);

    const speedFactor = 1500; // → 1500px당 1초
    const duration = Math.min(2, distance / speedFactor);

    gsap.to(window, {
      duration: duration,
      scrollTo: { y: targetRef.current, offsetY: 50 },
      ease: "slowmo.out",
      onComplete: () => {
        document.body.style.overflow = "auto";
      },
    });
  };

  const stores = [
    {
      name: "App Store",
      platform: "apple",
      href: "https://itunes.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328?mt=8",
      icon: "https://static.toss.im/png-icons/timeline/applekorea.png",
    },
    {
      name: "Google Play",
      platform: "android",
      href: "https://play.google.com/store/apps/details?id=viva.republica.toss&pli=1",
      icon: "https://static.toss.im/png-icons/timeline/googleplay.png",
    },
  ];

  const headingText = isMobileViewport
    ? `금융의 모든 것 
토스에서
쉽고 간편하게` // 좁은 화면
    : `금융의 모든 것 
토스에서 쉽고 간편하게`;

  const subText = isMobileViewport
    ? `내 모든 금융 내역을 한눈에
조회하고 한 곳에서 관리하세요.
이제껏 경험 못 했던
쉽고 편리한 금융 서비스, 
토스와 함께라면
당신의 일상이 새로워질 거예요.` // 좁은 화면
    : `내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.
이제껏 경험 못 했던 쉽고 편리한 금융 서비스,
토스와 함께라면 당신의 일상이 새로워질 거예요.`;

  const ButtonType = () => {
    if (isMobile) {
      const store = isAndroid
        ? stores.find((ele) => ele.platform === "android")
        : stores.find((ele) => ele.platform === "apple");
      return (
        <a className="mobile_button" href={store?.href} target="_blank">
          앱 다운로드
        </a>
      );
    } else {
      return (
        <div className="button_wrap">
          {stores.map((ele, index) => (
            <a
              key={ele.name}
              className="web_button"
              href={ele.href}
              style={{ marginRight: index === 0 ? "4px" : "0" }}
              target="_blank"
            >
              <img className="store_icon_img" src={ele.icon} />
              {ele.name}
            </a>
          ))}
        </div>
      );
    }
  };

  return (
    <section>
      <div className="main_wrap">
        <img className="background_img" src="https://static.toss.im/assets/homepage/newtossim/new_main.png" />
        <div className="background_white"></div>
        <div className="intro_wrap">
          <div className="intro_top">
            <h1 className="intro_title">{headingText}</h1>
            {ButtonType()}
          </div>
          <div className="intro_bottom" onClick={scrollToTarget}>
            <Wave ref={floatRef} style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>
      <div className="subtext_wrap" ref={targetRef}>
        <p className="intro_text">{subText}</p>
      </div>
    </section>
  );
};

export default Home;
