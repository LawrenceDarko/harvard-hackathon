import { create } from 'zustand';

interface AddCategoryStoreProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    categoryEditData: any;
    setCategoryEditData: (id: string) => void;

    isEditCategoryOpen: boolean;
    onEditCategoryOpen: () => void;
    onEditCategoryClose: () => void;

    editCategoryDetails: any;
    setEditCategoryDetails: (data: any) => void;

    newAddedCategory: any;
    setNewAddedCategory: (data: any) => void;
}

const useAddCategoryStore = create<AddCategoryStoreProps>((set) => ({
    isOpen: false,
    onOpen: ()=> set({ isOpen: true }),
    onClose: ()=> set({ isOpen: false }),
    categoryEditData: {},
    setCategoryEditData: (data) => set({ categoryEditData: data }),

    isEditCategoryOpen: false,
    onEditCategoryOpen: ()=> set({ isEditCategoryOpen: true }),
    onEditCategoryClose: ()=> set({ isEditCategoryOpen: false }),

    editCategoryDetails: {},
    setEditCategoryDetails: (data) => set({ editCategoryDetails: data }),

    newAddedCategory: {},
    setNewAddedCategory: (data) => set({ newAddedCategory: data }),
}))

export default useAddCategoryStore
