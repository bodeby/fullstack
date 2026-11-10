import { create } from 'zustand';

interface PirateState {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const usePirateStore = create<PirateState>((set) => ({
    count: 12,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));