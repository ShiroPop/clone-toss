import { useEffect, useState } from "react";
import "./App.scss";
import Main from "./layout/Main";
import HomeSection from "./layout/HomeSection";
import TransferSection from "./layout/TransferSection";
import LoanSection from "./layout/LoanSection";
import CreditSection from "./layout/CreditSection";
import InvestSection from "./layout/InvestSection";
import Needed from "./layout/Needed";
import ShowSection from "./layout/ShowSection";
import PaymentSection from "./layout/PaymentSection";
import BusinessSection from "./layout/BusinessSection";
import FeedbackSection from "./layout/FeedbackSection";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import AppDownload from "./layout/AppDownload";

import { useUIStore } from "./store/uiStore";

function App() {
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isApple = /iPhone|Pad|iPod/i.test(navigator.userAgent);
  const isMobile = isAndroid || isApple;

  const { isDropMenu, closeDropMenu } = useUIStore();
  const { closeNavMenu } = useUIStore();

  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileViewport(window.innerWidth <= 639);
      closeDropMenu();
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="App"
      onClick={() => {
        closeDropMenu();
        closeNavMenu();
      }}
    >
      <Header isAndroid={isAndroid} isApple={isApple} />
      {/* <Main isMobileViewport={isMobileViewport} /> */}
      {/* <HomeSection /> */}
      {/* <TransferSection /> */}
      {/* <LoanSection /> */}
      {/* <CreditSection /> */}
      <InvestSection isMobileViewport={isMobileViewport} />
      <Needed isMobileViewport={isMobileViewport} />
      <ShowSection />
      {/* <PaymentSection isMobileViewport={isMobileViewport} /> */}
      {/* <BusinessSection /> */}
      {/* <FeedbackSection /> */}
      {isDropMenu && !isMobile && <AppDownload />}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
