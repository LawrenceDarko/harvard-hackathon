import { create } from 'zustand';

interface AddSpendingLimitStoreProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

    isEditSpendingLimitOpen: boolean;
    onEditSpendingLimitOpen: () => void;
    onEditSpendingLimitClose: () => void;

    newAddedSpendingLimit: any;
    setNewAddedSpendingLimit: (data: any) => void;

    editSpendingLimits: any;
    setEditSpendingLimits: (data: any) => void;

    newUpdatedSpendingLimit: any;
    setNewUpdatedSpendingLimit: (data: any) => void;
}

const useAddSpendingLimitStore = create<AddSpendingLimitStoreProps>((set) => ({
    isOpen: false,
    onOpen: ()=> set({ isOpen: true }),
    onClose: ()=> set({ isOpen: false }),

    isEditSpendingLimitOpen: false,
    onEditSpendingLimitOpen: ()=> set({ isEditSpendingLimitOpen: true }),
    onEditSpendingLimitClose: ()=> set({ isEditSpendingLimitOpen: false }),

    newAddedSpendingLimit: {},
    setNewAddedSpendingLimit: (data: any) => set({ newAddedSpendingLimit: data }),

    editSpendingLimits: {},
    setEditSpendingLimits: (data: any) => set({ editSpendingLimits: data }),

    newUpdatedSpendingLimit: {},
    setNewUpdatedSpendingLimit: (data: any) => set({ newUpdatedSpendingLimit: data })
}))

export default useAddSpendingLimitStore
