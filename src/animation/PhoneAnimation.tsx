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
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 40px;
`;

const Scene = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  top: 11%;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 14%;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
`;

const Button = styled.button`
  position: relative;
  background-color: #3182f6;
  color: white;
  border: none;
  border-radius: 24px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: default;
  overflow: hidden;
`;

const Ripple = styled.span`
  position: absolute;
  background: white;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  transform: scale(0);
`;

export const PhoneAnimation = () => {
  const sceneRefs = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);

  // refs 초기화 함수
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sceneRefs.current.includes(el)) {
      sceneRefs.current.push(el);
    }
  };

  useEffect(() => {
    const [scene5, scene3, scene4, scene2, scene1] = sceneRefs.current;

    // GSAP 타임라인 생성
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // 버튼 클릭 애니메이션 함수
    const animateButtonClick = () => {
      if (!buttonRef.current || !rippleRef.current) return gsap.timeline();

      const tlBtn = gsap.timeline();

      tlBtn
        .to(buttonRef.current, {
          backgroundColor: "#3182f6",
          scale: 0.98,
          duration: 0.1,
          ease: "power1.out",
        })
        .to(rippleRef.current, { opacity: 0.5, scale: 1.5, duration: 0.5, ease: "power1.out" }, "<")
        .to(buttonRef.current, {
          backgroundColor: "#448aff",
          scale: 1,
          duration: 0.2,
          ease: "power1.out",
        })
        .to(rippleRef.current, { opacity: 0, scale: 0, duration: 0.1 }, "<0.2");
      return tlBtn;
    };

    // Scene 2
    tl.set(scene5, { opacity: 0 });
    tl.to(scene5, { opacity: 1, duration: 0.5 });
    tl.to(scene5, { opacity: 1, duration: 2 });

    // Scene 3
    tl.set(scene3, { x: "100%", opacity: 1 });
    tl.to(scene3, { x: "0%", duration: 0.7, ease: "power2.out" });
    tl.to(scene3, { opacity: 1, duration: 0.5 });
    tl.add(animateButtonClick()); // 버튼 클릭 애니메이션 연출 추가
    tl.to(scene3, { opacity: 1, duration: 0.5 });

    // Scene 4
    tl.set(scene4, { x: "100%", opacity: 1 });
    tl.to(scene4, { x: "0%", duration: 0.7 });
    tl.to(scene4, { opacity: 1, duration: 0.5 });
    tl.add(animateButtonClick());
    tl.to(scene4, { opacity: 1, duration: 0.5 });

    // Scene 5
    tl.set(scene2, { x: "100%", opacity: 1 });
    tl.to(scene2, { x: "0%", duration: 0.7 });
    tl.to(scene2, { opacity: 1, duration: 0.5 });
    tl.to(scene2, { opacity: 1, duration: 0.5 });

    // Scene 1 (세로 이미지 슬라이드)
    tl.set(scene1, { x: "100%", opacity: 1 });
    tl.to(scene1, { x: "0%", duration: 0.7 });
    tl.fromTo(scene1.querySelector("img"), { y: 0 }, { y: -600, duration: 1, ease: "power1.inOut" });
    tl.to(scene1, { opacity: 1, duration: 0.5 });

    // 끝나고 반복

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Container>
      <Scene ref={addToRefs}>
        <img src={loanScreen5} style={{ width: "100%" }} />
        <ButtonWrapper>
          <Button>
            위로
            <Ripple />
          </Button>
        </ButtonWrapper>
      </Scene>

      <Scene ref={addToRefs}>
        <img src={loanScreen3} style={{ width: "100%" }} />
        <ButtonWrapper>
          <Button ref={buttonRef}>
            다음
            <Ripple ref={rippleRef} />
          </Button>
        </ButtonWrapper>
      </Scene>

      <Scene ref={addToRefs}>
        <img src={loanScreen4} style={{ width: "100%" }} />
        <ButtonWrapper>
          <Button>
            동의하고 시작하기
            <Ripple />
          </Button>
        </ButtonWrapper>
      </Scene>

      <Scene ref={addToRefs}>
        <img src={loanScreen2} style={{ width: "100%" }} />
        <Button>
          위로
          <Ripple />
        </Button>
      </Scene>

      <Scene ref={addToRefs}>
        <img src={loanScreen1} style={{ width: "100%" }} />
        <Button>
          위로
          <Ripple />
        </Button>
      </Scene>
    </Container>
  );
};
