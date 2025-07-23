import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Needed = ({ isMobileViewport }: { isMobileViewport: boolean }) => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!leftRef.current || !rightRef.current) return;

    const matchMedia = gsap.matchMedia();

    matchMedia.add("(min-width: 640px)", () => {
      gsap.set([leftRef.current, rightRef.current], { transform: "translate(0%, 0)" });

      gsap.to(leftRef.current, {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 90%",
          end: "bottom 75%",
          scrub: true,
        },
      });

      gsap.to(rightRef.current, {
        xPercent: 100,
        ease: "none",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 90%",
          end: "bottom 75%",
          scrub: true,
        },
      });
    });
  }, []);

  const titleText = isMobileViewport
    ? `꼭 필요했던
금융`
    : `꼭 필요했던 금융`;

  return (
    <div className="needed_background">
      <span className="needed_text">{titleText}</span>
      <div className="needed_white needed_left" ref={leftRef} />
      <div className="needed_white needed_right" ref={rightRef} />
    </div>
  );
};

export default Needed;
