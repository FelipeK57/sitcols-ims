import { create } from "zustand";

const initialRole = localStorage.getItem("role") || null;

interface UserStore {
  role: string | null;
  setRole: (newRole: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  role: initialRole,
  setRole: (newRole: string) => {
    localStorage.setItem("role", newRole);
    set({ role: newRole });
  },
  logout: () => {
    localStorage.removeItem("role");
    set({ role: null });
  },
}));
