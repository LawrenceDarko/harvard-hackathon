import { create } from 'zustand';

interface AddBillStoreProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

    isEditBillOpen: boolean;
    onEditBillOpen: () => void;
    onEditBillClose: () => void;

    editBillDetails: any;
    setEditBillDetails: (data: any) => void;

    newAddedBill: any;
    setNewAddedBill: (data: any) => void;
}

const useAddBillStore = create<AddBillStoreProps>((set) => ({
    isOpen: false,
    onOpen: ()=> set({ isOpen: true }),
    onClose: ()=> set({ isOpen: false }),

    isEditBillOpen: false,
    onEditBillOpen: ()=> set({ isEditBillOpen: true }),
    onEditBillClose: ()=> set({ isEditBillOpen: false }),

    editBillDetails: {},
    setEditBillDetails: (data) => set({ editBillDetails: data }),

    newAddedBill: {},
    setNewAddedBill: (data) => set({ newAddedBill: data }),
}))

export default useAddBillStore
