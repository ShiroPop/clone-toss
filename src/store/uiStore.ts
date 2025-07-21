import { create } from "zustand";

interface UIState {
  isDropMenu: boolean;
  openDropMenu: () => void;
  closeDropMenu: () => void;
  isNavMenu: boolean;
  openNavMenu: () => void;
  closeNavMenu: () => void;
  toggleNavMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isDropMenu: false,
  openDropMenu: () => set({ isDropMenu: true }),
  closeDropMenu: () => set({ isDropMenu: false }),

  isNavMenu: false,
  openNavMenu: () => set({ isNavMenu: true }),
  closeNavMenu: () => set({ isNavMenu: false }),
  toggleNavMenu: () => set((state) => ({ isNavMenu: !state.isNavMenu })),
}));
