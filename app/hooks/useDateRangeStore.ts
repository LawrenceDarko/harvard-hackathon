import { create } from 'zustand';

interface DateRangeStoreProps {
    dateRange: { from: Date, to: Date };
    setDateRange: (newDateRange: { from: Date, to: Date }) => void;
}

const inputDate = new Date();
const startOfMonth = new Date(inputDate.getFullYear(), inputDate.getMonth(), 1);
const endOfMonth = new Date(inputDate.getFullYear(), inputDate.getMonth() + 1, 0);

const useDateRangeStore = create<DateRangeStoreProps>((set) => ({
    dateRange: { from: startOfMonth, to: endOfMonth },
    setDateRange: (newDateRange) => set({ dateRange: newDateRange }),
}));

export default useDateRangeStore;
