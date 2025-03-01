import { create } from 'zustand';

interface AddBankStoreProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

    isEditBankOpen: boolean;
    onEditBankOpen: () => void;
    onEditBankClose: () => void;

    bankEditData: any;
    setBankEditData: (data: any) => void;
}

const useAddBankStore = create<AddBankStoreProps>((set) => ({
    isOpen: false,
    onOpen: ()=> set({ isOpen: true }),
    onClose: ()=> set({ isOpen: false }),

    isEditBankOpen: false,
    onEditBankOpen: ()=> set({ isEditBankOpen: true }),
    onEditBankClose: ()=> set({ isEditBankOpen: false }),

    bankEditData: {},
    setBankEditData: (data: any) => set({ bankEditData: data })
}))

export default useAddBankStore
