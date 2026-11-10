import { create } from 'zustand'

interface MerchantState {
    count: number
    increment: () => void
    decrement: () => void
}

export const useMerchantStore = create<MerchantState>((set) => ({
    count: 50,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}))