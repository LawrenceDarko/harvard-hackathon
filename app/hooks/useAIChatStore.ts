import { create } from 'zustand';

interface AIChatStoreProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useAIChatStore = create<AIChatStoreProps>((set) => ({
    isOpen: false,
    onOpen: ()=> set({ isOpen: true }),
    onClose: ()=> set({ isOpen: false }),
}))

export default useAIChatStore
