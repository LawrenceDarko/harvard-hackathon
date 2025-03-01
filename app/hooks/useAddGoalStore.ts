import { create } from 'zustand';

interface AddGoalStoreProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;

    isEditGoalOpen: boolean;
    onEditGoalOpen: () => void;
    onEditGoalClose: () => void;

    newAddedGoal: any;
    setNewAddedGoal: (data: any) => void;

    editGoals: any;
    setEditGoals: (data: any) => void;

    updatedGoal: any;
    setUpdatedGoal: (data: any) => void;
}

const useAddGoalStore = create<AddGoalStoreProps>((set) => ({
    isOpen: false,
    onOpen: ()=> set({ isOpen: true }),
    onClose: ()=> set({ isOpen: false }),

    isEditGoalOpen: false,
    onEditGoalOpen: ()=> set({ isEditGoalOpen: true }),
    onEditGoalClose: ()=> set({ isEditGoalOpen: false }),

    newAddedGoal: {},
    setNewAddedGoal: (data: any) => set({ newAddedGoal: data }),

    editGoals: {},
    setEditGoals: (data: any) => set({ editGoals: data }),

    updatedGoal: {},
    setUpdatedGoal: (data: any) => set({ updatedGoal: data }),
}))

export default useAddGoalStore
