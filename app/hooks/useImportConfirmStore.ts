import { create } from 'zustand';

interface ImportConfirmStoreProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

    transactionImportData: any;
    setTransactionImportData: (data: any) => void;
}

const useImportConfirmStore = create<ImportConfirmStoreProps>((set) => ({
    isOpen: false,
    onOpen: ()=> set({ isOpen: true }),
    onClose: ()=> set({ isOpen: false }),

    transactionImportData: {},
    setTransactionImportData: (data) => set({ transactionImportData: data }),
}))

export default useImportConfirmStore
