export interface ExpenseItem {
    category: string;
    totalAmount: number;
    percentageChange: number;
}

export interface BalanceItemData {
    _id: string;
    accountType: string;
    cardLogoSrc: string;
    accountNumber: string;
    balance: string;
    bankName: string;
}

export interface IFinancialSummary {
    totalSavings: number[];
    totalIncome: number[];
    totalExpenses: number[];

}

export interface ITransaction {
    id: number;
    category: any;
    name: string;
    type: 'expense' | 'income';
    amount: number;
    date: string;
}

export interface IExpensesGoalsCategory {
    category: string;
    totalAmount: number;
}

export interface IBarChartProps {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
    }[];
    title?: string;
}

export interface ITableColumn {
    label: string;
    key: string;
    renderCell?: (value?: any, rowData?: any) => React.ReactNode;
    sortable?: boolean;
    sortFunction?: any;
}

export interface IUpcomingBillsData {
    name: string;
    date: Date;
    logo: string;
    description: string;
    lastCharged: string;
    amount: number;
}
export interface IUserInfo {
    exp: number; // Expiration timestamp
    userId: string; // User role
    username: string;
}