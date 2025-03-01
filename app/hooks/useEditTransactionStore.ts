import {create} from 'zustand';

interface EditTransactionStoreProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

    transactionId: string;
    setTransactionId: (id: string) => void

    transactionDetails: any;
    setTransactionDetails: (data: any) => void;

    transactionAdded: boolean;
    setTransactionAdded: (status: boolean) => void;

    editTransactionDetails: any;
    setEditTransactionDetails: (data: any) => void;
}

const useEditTransactionStore = create<EditTransactionStoreProps>((set) => ({
    isOpen: false,
    onOpen: ()=> set({ isOpen: true }),
    onClose: ()=> set({ isOpen: false }),

    transactionId: '',
    setTransactionId: (id) => set({ transactionId: id }),

    transactionDetails: {},
    setTransactionDetails: (data) => set({ transactionDetails: data }),

    transactionAdded: false,
    setTransactionAdded: ()=> set({ transactionAdded: true}),

    editTransactionDetails: {},
    setEditTransactionDetails: (data) => set({ editTransactionDetails: data }),

    
}))

export default useEditTransactionStore
