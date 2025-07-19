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
    </div>
  );
}

export default App;
