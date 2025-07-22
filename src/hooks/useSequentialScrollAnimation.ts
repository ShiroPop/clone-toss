import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SingleTarget {
  current: HTMLElement | null;
}

interface GroupedTarget {
  current: {
    elements: Array<HTMLElement | null>;
    group: boolean;
  };
}

type AnimationTarget = SingleTarget | GroupedTarget;

interface UseSequentialScrollAnimationProps {
  containerRef: React.RefObject<HTMLElement | null>;
  targets: AnimationTarget[];
  start?: string;
  delayBetween?: number;
  duration?: number;
  onComplete?: () => void;
}

export const useSequentialScrollAnimation = ({
  containerRef,
  targets,
  start = "top 80%",
  delayBetween = 0.2,
  duration = 0.4,
  onComplete,
}: UseSequentialScrollAnimationProps) => {
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (!containerRef.current || targets.some((t) => !t.current)) return;
    if (hasPlayed.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
      scrollTrigger: {
        trigger: containerRef.current,
        start,
        toggleActions: "play none none none",
        onEnter: () => {
          if (!hasPlayed.current) {
            hasPlayed.current = true;
          }
        },
      },
    });

    tl.set(
      targets.flatMap((t) => {
        if (
          t.current &&
          typeof t.current === "object" &&
          "elements" in t.current &&
          Array.isArray(t.current.elements)
        ) {
          return t.current.elements.filter((el): el is HTMLElement => el !== null);
        } else if (t.current) {
          return [t.current];
        }
        return [];
      }),
      { opacity: 0, y: 50 }
    );

    targets.forEach((target, i) => {
      const delay = i === 0 ? 0 : `+=${delayBetween}`;

      if (
        target.current &&
        typeof target.current === "object" &&
        "elements" in target.current &&
        Array.isArray(target.current.elements)
      ) {
        const elements = target.current.elements.filter((el): el is HTMLElement => el !== null);
        tl.to(elements, { opacity: 1, y: 0, duration, ease: "power1.inOut", stagger: 0 }, delay);
      } else if (target.current) {
        tl.to(target.current, { opacity: 1, y: 0, duration, ease: "power1.inOut" }, delay);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, [containerRef, targets, start, delayBetween, duration, onComplete]);
};
