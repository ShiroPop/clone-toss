import { useEffect, useState } from "react";
import "./App.sass";
import Main from "./layout/Main";
import HomeSection from "./layout/HomeSection";
import TransferSection from "./layout/TransferSection";

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
    </div>
  );
}

export default App;
