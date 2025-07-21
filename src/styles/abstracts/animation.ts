import { css } from "@emotion/react";

export const navDropdown = (isActive: boolean, isScroll: boolean) => css`
  max-height: ${isActive ? "453px" : "60px"};
  border-bottom: ${isScroll ? "rgba(0, 27, 55, 0.1)" : "transparent"};
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;
