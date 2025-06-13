import { create } from "zustand";

export const useUserStore = create(() => ({
  accessToken: "",
  setAccessToken: (token: string) => set({ accessToken: token }),
}));
