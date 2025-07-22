import { useEffect } from "react";
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

interface Options {
  targets: AnimationTarget[];
  y?: number;
}

export const useScrollFadeIn = ({ targets, y = 50 }: Options) => {
  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    targets.forEach((target) => {
      if ("current" in target && !(target.current as any).elements) {
        const el = target.current as HTMLElement | null;
        if (!el) return;

        gsap.set(el, { opacity: 0, y });

        const tween = gsap.to(el, {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
          },
        });

        triggers.push(tween.scrollTrigger as ScrollTrigger);
        return;
      }

      const { elements, group } = target.current as any;
      const validEls = (elements as (HTMLElement | null)[]).filter(Boolean) as HTMLElement[];

      if (group) {
        gsap.set(validEls, { opacity: 0, y });

        const tween = gsap.to(validEls, {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: validEls[0],
            start: "top 90%",
            end: "top 50%",
            scrub: true,
          },
        });

        triggers.push(tween.scrollTrigger as ScrollTrigger);
      } else {
        validEls.forEach((el) => {
          gsap.set(el, { opacity: 0, y });

          const tween = gsap.to(el, {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 50%",
              scrub: true,
            },
          });

          triggers.push(tween.scrollTrigger as ScrollTrigger);
        });
      }
    });

    return () => {
      triggers.forEach((trigger) => trigger?.kill());
    };
  }, [targets, y]);
};
