import { create } from 'zustand';

interface AddUserStoreProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    userEditData: any;
    setUserEditData: (id: string) => void;

    isEditUserOpen: boolean;
    onEditUserOpen: () => void;
    onEditUserClose: () => void;

    editUserDetails: any;
    setEditUserDetails: (data: any) => void;

    newAddedUser: any;
    setNewAddedUser: (data: any) => void;
}

const useAddUserStore = create<AddUserStoreProps>((set) => ({
    isOpen: false,
    onOpen: ()=> set({ isOpen: true }),
    onClose: ()=> set({ isOpen: false }),

    userEditData: {},
    setUserEditData: (data) => set({ userEditData: data }),

    isEditUserOpen: false,
    onEditUserOpen: ()=> set({ isEditUserOpen: true }),
    onEditUserClose: ()=> set({ isEditUserOpen: false }),

    editUserDetails: {},
    setEditUserDetails: (data) => set({ editUserDetails: data }),

    newAddedUser: {},
    setNewAddedUser: (data) => set({ newAddedUser: data }),
}))

export default useAddUserStore
