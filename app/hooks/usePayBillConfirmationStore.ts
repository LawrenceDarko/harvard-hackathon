import { create } from 'zustand';

interface PayBillConfirmationProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

    payBillData: any;
    setPayBillData: (data: any) => void;
}

const usePayBillConfirmation = create<PayBillConfirmationProps>((set) => ({
    isOpen: false,
    onOpen: ()=> set({ isOpen: true }),
    onClose: ()=> set({ isOpen: false }),

    payBillData: {},
    setPayBillData: (data) => set({ payBillData: data }),
}))

export default usePayBillConfirmation
