import { UserSession } from "@/types";
import { create } from "zustand";

type UserData = {
  user: UserSession;
  setUser: (user: Partial<UserSession>) => void;
};

export const UserContext = create<UserData>((set) => ({
  user: undefined,
  setUser: (user: any) => set({ user }),
}));
