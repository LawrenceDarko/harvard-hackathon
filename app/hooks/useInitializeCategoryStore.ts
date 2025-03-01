import { create } from 'zustand';

interface InitializeCategoryStoreProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

    initializedCategories: any;
    setInitializedCategories: (data: any) => void;
}

const useInitializeCategoryStore = create<InitializeCategoryStoreProps>((set) => ({
    isOpen: false,
    onOpen: ()=> set({ isOpen: true }),
    onClose: ()=> set({ isOpen: false }),

    initializedCategories: {},
    setInitializedCategories: (data) => set({ initializedCategories: data }),
}))

export default useInitializeCategoryStore
