import { create } from 'zustand';

interface AddAssetStoreProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

    isEditAssetOpen: boolean;
    onEditAssetOpen: () => void;
    onEditAssetClose: () => void;

    editAssetDetails: any;
    setEditAssetDetails: (data: any) => void;

    newAddedAsset: any;
    setNewAddedAsset: (data: any) => void;

    editedAssetData: any;
    setEditedAssetData: (data: any) => void;
}

const useAddAssetStore = create<AddAssetStoreProps>((set) => ({
    isOpen: false,
    onOpen: ()=> set({ isOpen: true }),
    onClose: ()=> set({ isOpen: false }),

    isEditAssetOpen: false,
    onEditAssetOpen: ()=> set({ isEditAssetOpen: true }),
    onEditAssetClose: ()=> set({ isEditAssetOpen: false }),

    editAssetDetails: {},
    setEditAssetDetails: (data) => set({ editAssetDetails: data }),

    newAddedAsset: {},
    setNewAddedAsset: (data) => set({ newAddedAsset: data }),

    editedAssetData: {},
    setEditedAssetData: (data) => set({ editedAssetData: data })
}))

export default useAddAssetStore
