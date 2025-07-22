import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapScrollAnimation = (imgsWrapRef: React.RefObject<HTMLElement | null>, seqDone: boolean) => {
  useEffect(() => {
    if (!imgsWrapRef.current) return;
    if (!seqDone) return;

    const matchMedia = gsap.matchMedia();

    matchMedia.add("(max-width: 639px)", () => {
      const moveX = window.innerWidth - 650;

      gsap.to(imgsWrapRef.current, {
        x: moveX,
        ease: "none",
        scrollTrigger: {
          trigger: imgsWrapRef.current,
          start: "top 35%",
          end: "bottom 75%",
          scrub: true,
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    return () => {
      matchMedia.revert();
    };
  }, [seqDone]);
};

export default useGsapScrollAnimation;
