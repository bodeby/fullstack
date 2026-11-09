import { create } from 'zustand'

interface NavyState {
    count: number
    increment: () => void
    decrement: () => void
}

export const useNavyStore = create<NavyState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}))