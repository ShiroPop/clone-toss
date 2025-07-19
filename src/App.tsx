import { useEffect, useState } from "react";
import "./App.sass";
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

function App() {
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileViewport(window.innerWidth <= 639);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Main isMobileViewport={isMobileViewport} />
      <HomeSection />
      <TransferSection />
      <LoanSection />
      <CreditSection />
      <InvestSection isMobileViewport={isMobileViewport} />
      <Needed isMobileViewport={isMobileViewport} />
      <ShowSection />
      <PaymentSection isMobileViewport={isMobileViewport} />
      <BusinessSection />
      <FeedbackSection />
      <Footer />
    </div>
  );
}

export default App;
