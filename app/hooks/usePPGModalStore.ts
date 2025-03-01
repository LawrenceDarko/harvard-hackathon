import { create } from 'zustand'

interface usePPGModalStoreProp {
    isOpen: boolean;
    onOpen: ()=>void;
    onClose: ()=> void;

    newPaymentPage: any;
    setNewPaymentPage: (newPaymentPage: any) => void;
}

const usePPGModalStore = create<usePPGModalStoreProp>((set) => ({
    isOpen: false,
    onOpen: () => set((state) => ({ isOpen: true })),
    onClose: () =>  set((state) => ({ isOpen: false })),

    newPaymentPage: {},
    setNewPaymentPage: (newPaymentPage) => set((state) => ({ newPaymentPage })),
}))

export default usePPGModalStore