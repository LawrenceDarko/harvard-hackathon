import { create } from 'zustand';

interface BudgetSummaryStoreProps {
    budgetSummary: any;
    setBudgetSummary: (data: any) => void;
}

const useBudgetSummaryStore = create<BudgetSummaryStoreProps>((set) => ({
    budgetSummary: {},
    setBudgetSummary: (data: any) => set({ budgetSummary: data}),
}))

export default useBudgetSummaryStore
