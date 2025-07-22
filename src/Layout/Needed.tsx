import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Needed = ({ isMobileViewport }: { isMobileViewport: boolean }) => {
  const backgroundImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!backgroundImgRef.current) return;

    const matchMedia = gsap.matchMedia();

    matchMedia.add("(min-width: 640px)", () => {
      gsap.set(backgroundImgRef.current, { width: "1040px" });

      gsap.to(backgroundImgRef.current, {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: backgroundImgRef.current,
          start: "top 90%",
          end: "bottom 75%",
          scrub: true,
        },
      });
    });
  });

  const titleText = isMobileViewport
    ? `꼭 필요했던
금융`
    : `꼭 필요했던 금융`;

  return (
    <div className="needed_background" ref={backgroundImgRef}>
      <span className="needed_text">{titleText}</span>
    </div>
  );
};

export default Needed;
