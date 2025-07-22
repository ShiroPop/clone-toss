import { css, keyframes } from "@emotion/react";

export const navDropdown = (isActive: boolean, isScroll: boolean) => css`
  max-height: ${isActive ? "453px" : "60px"};
  border-bottom: ${isScroll ? "rgba(0, 27, 55, 0.1)" : "transparent"};
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeInStyle = css`
  animation: ${fadeIn} 0.5s ease-in-out forwards;
`;
