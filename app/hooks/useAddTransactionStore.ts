import {create} from 'zustand';

interface AddTransactionStoreProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    transactions: any[];
    setTransactions: (data: any) => void;

    transactionAdded: boolean;
    setTransactionAdded: (status: boolean) => void;

    newAddedTransaction: any;
    setNewAddedTransaction: (data: any) => void;
    
}

const useAddTransactionStore = create<AddTransactionStoreProps>((set) => ({
    isOpen: false,
    onOpen: ()=> set({ isOpen: true }),
    onClose: ()=> set({ isOpen: false }),
    transactions: [],
    setTransactions: (data) => set({ transactions: data }),

    transactionAdded: false,
    setTransactionAdded: ()=> set({ transactionAdded: true}),

    newAddedTransaction: {},
    setNewAddedTransaction: (data) => set({ newAddedTransaction: data }),
}))

export default useAddTransactionStore
