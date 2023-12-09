import create, { StateCreator } from "zustand";

type Store = {
  userData: Record<string, unknown>;
  setUserData: (data: Record<string, unknown>) => void;
};

type StateCreator = (
  set: (fn: (state: Store) => Partial<Store>) => void
) => Store;

export const useStore = create<Store>((set) => ({
  userPhone: {},
  setUserPhone: (data) => set({ userPhone: data }),
}));
