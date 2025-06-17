import { create } from "zustand";

type UserAuthState = {
  userName: string;
  setUserName: (name: string) => void;
};

export const userAuthStore = create<UserAuthState>(set => ({
  userName: "",
  setUserName: (name: string) => set({ userName: name }),
}));
