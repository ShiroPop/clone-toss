/** @jsxImportSource @emotion/react */

import "../styles/abstracts/mixins.sass";
import "../styles/abstracts/utilities.sass";
import "../styles/layout/Header.sass";
import { navDropdown } from "../styles/abstracts/animation";

import { ReactComponent as TossIcon } from "../assets/svg/tossIcon.svg";
import { ReactComponent as MenuIcon } from "../assets/svg/menuIcon.svg";
import { ReactComponent as CloseIcon } from "../assets/svg/closeIcon.svg";

import { useUIStore } from "../store/uiStore";
import { useEffect, useState } from "react";

const Header = ({ isAndroid, isApple }: { isAndroid: boolean; isApple: boolean }) => {
  const { toggleDropMenu, isNavMenu, toggleNavMenu } = useUIStore();

  const [isScrolled, setIsScrolled] = useState(false);

  const downloadClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleDropMenu();
    isApple && window.open(stores[0].href);
    isAndroid && window.open(stores[1].href);
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

  const menuList = [
    { key: "", title: "회사 소개", href: "/" },
    { key: "", title: "공지사항", href: "/" },
    { key: "", title: "고객센터", href: "/" },
    { key: "", title: "자주 묻는 질문", href: "/" },
    { key: "", title: "토스인증서", href: "/" },
    { key: "", title: "채용", href: "/" },
  ];
  const languageList = [
    { key: "", title: "KOR", href: "/" },
    { key: "", title: "ENG", href: "/" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 1);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav_wrap" css={navDropdown(isNavMenu, isScrolled)} onClick={(e) => e.stopPropagation()}>
      <div className="nav_width">
        <div className="container_inner nav_inner">
          <div className="nav_flex">
            <a className="nav_icon_wrap" href="/">
              <TossIcon className="nav_icon" />
            </a>
            <div className="nav_mobile_viewport_wrap">
              <button
                className="nav_mobile_viewport_button"
                onClick={(e) => {
                  downloadClick(e);
                }}
              >
                앱 다운로드
              </button>
              <button
                className="nav_menu_hamburger"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleNavMenu();
                }}
              >
                <span>
                  {isNavMenu ? (
                    <CloseIcon className="nav_menu_hamburger_icon" />
                  ) : (
                    <MenuIcon className="nav_menu_hamburger_icon" />
                  )}
                </span>
              </button>
            </div>
            <div className="nav_web_viewport">
              <ul className="nav_menu">
                {menuList.map((ele, index) => (
                  <li key={"menu" + index} className="nav_menu_item">
                    <a href={ele.href}>{ele.title}</a>
                  </li>
                ))}
                <div className="nav_language">
                  <li className="nav_language_item">
                    <a href={languageList[0].href} target="_blank">
                      {languageList[0].title}
                    </a>
                  </li>
                  <span className="nav_language_between">|</span>
                  <li className="nav_language_item">
                    <a className="color_b0" href={languageList[1].href}>
                      {languageList[1].title}
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
