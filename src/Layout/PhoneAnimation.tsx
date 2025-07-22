/** @jsxImportSource @emotion/react */
import loanScreen1 from "../assets/img/loanScreen1.png";
import loanScreen2 from "../assets/img/loanScreen2.png";
import loanScreen3 from "../assets/img/loanScreen3.png";
import loanScreen4 from "../assets/img/loanScreen4.png";
import loanScreen5 from "../assets/img/loanScreen5.png";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "@emotion/styled";

const Container = styled.div`
  position: block;
  width: 100%;
  overflow: hidden;
  border-radius: 40px;
`;

const Scene = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  top: 11%;
`;

export const PhoneAnimation = () => {
  const sceneRefs = useRef<HTMLDivElement[]>([]);
  sceneRefs.current = [];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sceneRefs.current.includes(el)) {
      sceneRefs.current.push(el);
    }
  };

  useEffect(() => {
    const [scene2, scene3, scene4, scene5, scene1] = sceneRefs.current;

    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Scene 2 - 툭 나타나기
    timeline.set(scene2, { opacity: 0 });
    timeline.to(scene2, { opacity: 1, duration: 0.5 });
    timeline.to(scene2, { opacity: 1, delay: 2, duration: 0.5 });

    // Scene 3
    timeline.set(scene3, { x: "100%", opacity: 1 });
    timeline.to(scene3, { x: "0%", duration: 0.7, ease: "power2.out" });
    timeline.call(() => {
      console.log("Scene 3 버튼 클릭 효과 실행됨");
    });
    timeline.to(scene3, { opacity: 1, delay: 0.6, duration: 0.5 });

    // Scene 4
    timeline.set(scene4, { x: "100%", opacity: 1 });
    timeline.to(scene4, { x: "0%", duration: 0.7 });
    timeline.to(scene4, { opacity: 1, delay: 0.6, duration: 0.5 });

    // Scene 5
    timeline.set(scene5, { x: "100%", opacity: 1 });
    timeline.to(scene5, { x: "0%", duration: 0.7 });
    timeline.to(scene5, { opacity: 1, delay: 0.6, duration: 0.5 });

    // Scene 1 - 마지막에 슬라이드 다운
    timeline.set(scene1, { x: "100%", opacity: 1 });
    timeline.to(scene1, { x: "0%", duration: 0.7 });
    timeline.fromTo(scene1.querySelector("img"), { y: 0 }, { y: -400, duration: 1, ease: "none" });
    timeline.to(scene1, { opacity: 1, duration: 0.5 });
  }, []);

  return (
    <Container>
      {/* 순서: 2 → 3 → 4 → 5 → 1 */}
      <Scene ref={addToRefs}>
        <img src={loanScreen2} style={{ width: "100%" }} />
      </Scene>
      <Scene ref={addToRefs}>
        <img src={loanScreen3} style={{ width: "100%" }} />
      </Scene>
      <Scene ref={addToRefs}>
        <img src={loanScreen4} style={{ width: "100%" }} />
      </Scene>
      <Scene ref={addToRefs}>
        <img src={loanScreen5} style={{ width: "100%" }} />
      </Scene>
      <Scene ref={addToRefs}>
        <img src={loanScreen1} style={{ width: "100%" }} />
      </Scene>
    </Container>
  );
};
