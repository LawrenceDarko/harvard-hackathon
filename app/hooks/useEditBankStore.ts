import { create } from 'zustand';

interface EditBankStoreProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useEditBankStore = create<EditBankStoreProps>((set) => ({
    isOpen: false,
    onOpen: ()=> set({ isOpen: true }),
    onClose: ()=> set({ isOpen: false }),
}))

export default useEditBankStore
