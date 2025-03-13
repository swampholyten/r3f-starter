import { create } from "zustand";

interface CounterStoreState {
  count: number;
  increment: () => void;
}

export const useCounterStore = create<CounterStoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
