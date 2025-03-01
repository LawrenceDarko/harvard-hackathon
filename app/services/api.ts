import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import localStorageService from './localStorageService';
import { initialize } from 'next/dist/server/lib/render-server';
import { get } from 'http';
import { getSession } from 'next-auth/react';

const BASE_URL: string = process.env.NEXT_PUBLIC_BACKEND_BASE_URL || '';

const apiConfig: AxiosRequestConfig = {
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
};

const api: AxiosInstance = axios.create(apiConfig);

let authToken: string | null = null;

async function setAuthToken() {
    const session = await getSession();
    authToken = session?.user?.token || null;
    // console.log("AUTH TOKEN: ", authToken)
}

// Interceptor starts here
// Request interceptor
api.interceptors.request.use(
    async (config) => {
        // Add your request interceptor logic here
        config.withCredentials = true;
        // const authToken = localStorageService?.getItem('token');
        await setAuthToken();
        // console.log("AUTH TOKEN: ", authToken)
        if (authToken && !config.headers['Authorization']) {
            // config.headers['settlement_token'] = authToken;
            config.headers['Authorization'] = `Bearer ${authToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error) => {
        // Add your response interceptor logic here
        if (error) {
            // console.log("Redirect URL:", error.response.data.data.redirectUrl);
            // return router.push(error.response.data.data.redirectUrl)
            console.log("ERROR: ", error);
        }
        return Promise.reject(error);
    }
);

// Interceptor ends here


const ApiService = {
    getUsers: () => api.get('/auth/users'),
    getTransactions: (date: any) => api.get(`/transactions?startDate=${date.from}&endDate=${date.to}`),
    getTransactiosByBank: (bankId: string) => api.get(`/transactions/bank/${bankId}`),
    getCategories: () => api.get('/categories'),
    getSubCategories: () => api.get('/sub-categories'),
    getUserById: (userId: any) => api.get(`/auth/users/${userId}`),
    getSpendingLimits: () => api.get('/spending-limits'),
    getPaymentPages: () => api.get('/payment-pages'),
    getPaymentPageTransactions: (paymentPageId: string) => api.get(`/payment-page-transactions/ppg/${paymentPageId}`),
    getPaymentPageByUrl: (urlSlug: string) => api.get(`/payment-pages/${urlSlug}`),
    getUserSettings: () => api.get('/user-settings'),

    // add requests
    addTransaction: (data: any) => api.post('/transactions', {...data}, {headers: {'Content-Type': 'multipart/form-data'}}),
    addTransactionInBulk: (data: any) => api.post('/transactions/bulk', {transactions: data}, {headers: {'Content-Type': 'multipart/form-data'}}),
    addCategory: (data: any) => api.post(`/categories`, data),
    addSubCategory: (data: any) => api.post('/sub-categories', data),
    addBank: (data: any) => api.post('/banks', data),
    addGoal: (data: any) => api.post('/financial-goals', data),
    addAsset: (data: any) => api.post('/assets', data),
    addBill: (data: any) => api.post('/upcoming-bills', {...data}, {headers: {'Content-Type': 'multipart/form-data'}}),
    payBill: (data: any) => api.post('/upcoming-bills/pay', data),
    addOrganizationUser: (data: any) => api.post('/auth/create-user-for-organization', data),
    addSpendingLimit: (data: any) => api.post(`/spending-limits`, data),
    addPaymentPageTransaction: (data: any) => api.post('/payment-page-transactions', data),
    addOrUpdateUserSettings: (data: any) => api.patch('/user-settings', data),
    

    // update Transaction
    registerUser: (data: any) => api.post('/auth/register', data),
    getCashFlow: () => api.get('/summary/total'),
    getExpensesBreakdownByCategory: (startDate: Date, endDate: Date) => api.get(`/summary/category-expenses?startDate=${startDate}&endDate=${endDate}`),
    getYearlyFinancialSummary: (year: number) => api.get(`/summary/yearly-summary?year=${year}`),
    getMonthlyFinancialSummary: (date: string) => api.get(`/summary/monthly-summary?date=${date}`),
    getMonthlyGoals: (date: any) => api.get(`/financial-goals?date=${date}`),
    getMonthlyGoalsByDate: (date: any) => api.get(`/financial-goals/monthly-goal?date=${date}`),
    getAssets: () => api.get('/assets'),
    getAssetsAggregates: () => api.get('/assets/aggregates'),
    getUpcomingBills: () => api.get('/upcoming-bills'),
    getMonthlyAveragesByCategory: () => api.get('/finance/monthly-average-income-by-category'),
    getMonthlyExpensesByCategory: () => api.get('/finance/monthly-average-expenses-by-category'),

    addMerchantDocumentInfo: (data: any) => api.post('/documents', {documents: data}, {headers: {'Content-Type': 'multipart/form-data'}}),
    
    initializeCategories: (categoryTemplateType: any) => api.post(`/categories/initialize?categoryType=${categoryTemplateType}`),
    // Get Merchant Information by Id
    getMerchantGeneralInfoById: (merchantId: string) => api.get(`/merchants/${merchantId}`),

    // get requests
    getBanks: () => api.get('/banks'),
    getBankById: (id: string) => api.get(`/banks/${id}`),
    getTransactionById: (transactionId: string) => api.get(`/transaction/${transactionId}`),


    // update requests
    updateTransaction: (transactionId: string, data: any) => api.patch(`/transactions/${transactionId}`, data),
    updateBill: (billId: string, data: any) => api.patch(`/upcoming-bills/${billId}`, {...data}, {headers: {'Content-Type': 'multipart/form-data'}}),
    updateCategory: (categoryId: string, data: any) => api.patch(`/categories/${categoryId}`, data),
    updateAUser: (userId: any, data: any) => api.patch(`/auth/users/${userId}`, {...data}, {headers: {'Content-Type': 'multipart/form-data'}}),
    updateAGoal: (goalId: string, data: any) => api.patch(`/financial-goals/${goalId}`, data),
    updateBank: (bankId: string, data: any) => api.patch(`/banks/${bankId}`, data),
    updateAsset: (assetId: string, data: any) => api.patch(`/assets/${assetId}`, data),
    updateSpendingLimit: (spendingLimitId: string, data: any) => api.patch(`/spending-limits/${spendingLimitId}`, data),
    

    // Delete requests
    deleteTransaction: (id: string) => api.delete(`/transactions/${id}`),
    deleteTransactionsInBulk: (data: any) => api.post(`/transactions/bulk/delete`, {transactionIds: data}),
    deleteBill: (id: string) => api.delete(`/upcoming-bills/${id}`),
    deleteCategory: (id: string) => api.delete(`/categories/${id}`),
    deleteOrganizationUser: (id: string) => api.delete(`/auth/users/${id}`),
    deleteGoal: (id: string) => api.delete(`/financial-goals/${id}`),
    deleteBank: (id: string) => api.delete(`/banks/${id}`),
    deleteAsset: (id: string) => api.delete(`/assets/${id}`),
    deleteSpendingLimit: (id: string) => api.delete(`/spending-limits/${id}`),
    
    sendPasswordResetEmail: (data: any) => api.post(`/auth/request-password-reset`, data),
    resetPassword: (token: string, data: any) => api.post(`/auth/reset-password/${token}`, data),

    createPlaidLinkToken: (userId: any) => api.post(`/plaid/create-link-token`, {userId: userId}),
    exchangePublicToken: (data: any) => api.post(`/plaid/exchange-public-token`, data),
    createPaymentPage: (data: any) => api.post(`/payment-pages`, data, {headers: {'Content-Type': 'multipart/form-data'}}),

    createStripeCheckoutSession: (data: any) => api.post(`/subscription/create-checkout-session`, {plan: data}),
    createStripeCustomer: () => api.post(`/subscription/create-customer`),
    getSubscriptionStatus: () => api.get(`/subscription/status`),
    cancelStripeSubscription: () => api.post(`/subscription/cancel`),
};

export default ApiService;

// Get requests
// export const useGetUsers = () => useQuery(['users'], () => api.get('/auth/users').then(res => res.data));
// export const useGetTransactions = () => useQuery(['transactions'], () => api.get('/transactions').then(res => res.data));
// export const useGetTransactionsByBank = (bankId: string) => useQuery(['transactions', bankId], () => api.get(`/transactions/bank/${bankId}`).then(res => res.data));
// export const useGetCategories = () => useQuery(['categories'], () => api.get('/categories').then(res => res.data));
// export const useGetSubCategories = () => useQuery(['subCategories'], () => api.get('/sub-categories').then(res => res.data));
// export const useGetUserById = (userId: string) => useQuery(['user', userId], () => api.get(`/users/${userId}`).then(res => res.data));
// export const useGetSpendingLimits = () => useQuery(['spendingLimits'], () => api.get('/spending-limits').then(res => res.data));

// // Add requests
// export const useAddTransaction = () => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         (data: any) => api.post('/transactions', data, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['transactions']),
//         }
//     );
// };

// export const useAddCategory = () => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         (data: any) => api.post('/categories', data).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['categories']),
//         }
//     );
// };

// export const useAddSubCategory = () => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         (data: any) => api.post('/sub-categories', data).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['subCategories']),
//         }
//     );
// };

// export const useAddBank = () => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         (data: any) => api.post('/banks', data).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['banks']),
//         }
//     );
// };

// export const useAddGoal = () => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         (data: any) => api.post('/financial-goals', data).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['goals']),
//         }
//     );
// };

// export const useAddAsset = () => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         (data: any) => api.post('/assets', data).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['assets']),
//         }
//     );
// };

// export const useAddBill = () => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         (data: any) => api.post('/upcoming-bills', data, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['bills']),
//         }
//     );
// };

// export const useAddOrganizationUser = () => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         (data: any) => api.post('/auth/create-user-for-organization', data).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['organizationUsers']),
//         }
//     );
// };

// export const useAddSpendingLimit = () => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         (data: any) => api.post('/spending-limits', data).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['spendingLimits']),
//         }
//     );
// };

// // Update requests
// export const useUpdateTransaction = (transactionId: string) => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         (data: any) => api.patch(`/transactions/${transactionId}`, data).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['transactions', transactionId]),
//         }
//     );
// };

// export const useUpdateBill = (billId: string) => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         (data: any) => api.patch(`/upcoming-bills/${billId}`, data, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['bills', billId]),
//         }
//     );
// };

// export const useUpdateCategory = (categoryId: string) => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         (data: any) => api.patch(`/categories/${categoryId}`, data).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['categories', categoryId]),
//         }
//     );
// };

// export const useUpdateAUser = (userId: string) => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         (data: any) => api.patch(`/auth/users/${userId}`, data).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['user', userId]),
//         }
//     );
// };

// export const useUpdateAGoal = (goalId: string) => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         (data: any) => api.patch(`/financial-goals/${goalId}`, data).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['goals', goalId]),
//         }
//     );
// };

// export const useUpdateBank = (bankId: string) => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         (data: any) => api.patch(`/banks/${bankId}`, data).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['banks', bankId]),
//         }
//     );
// };

// export const useUpdateAsset = (assetId: string) => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         (data: any) => api.patch(`/assets/${assetId}`, data).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['assets', assetId]),
//         }
//     );
// };

// export const useUpdateSpendingLimit = (spendingLimitId: string) => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         (data: any) => api.patch(`/spending-limits/${spendingLimitId}`, data).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['spendingLimits', spendingLimitId]),
//         }
//     );
// };

// // Delete requests
// export const useDeleteTransaction = (id: string) => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         () => api.delete(`/transactions/${id}`).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['transactions']),
//         }
//     );
// };

// export const useDeleteBill = (id: string) => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         () => api.delete(`/upcoming-bills/${id}`).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['bills']),
//         }
//     );
// };

// export const useDeleteCategory = (id: string) => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         () => api.delete(`/categories/${id}`).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['categories']),
//         }
//     );
// };

// export const useDeleteOrganizationUser = (id: string) => {
//     const queryClient = useQueryClient();
//     return useMutation(
//         () => api.delete(`/
//         /${id}`).then(res => res.data),
//         {
//             onSuccess: () => queryClient.invalidateQueries(['organizationUsers']),
//         }
//     );
// }


// import { useGetUsers, useAddTransaction } from '../path/to/hooks'; // Adjust the path as needed
// import { useForm, SubmitHandler } from 'react-hook-form';
// import toast from 'react-hot-toast';

// const MyComponent = () => {
//     const { register, handleSubmit, reset } = useForm();
//     const { data: users, isLoading, error } = useGetUsers();
//     const addTransaction = useAddTransaction();

//     const onSubmit: SubmitHandler<FieldValues> = async (data) => {
//         const pendingToast = toast.loading('Adding Transaction...', { duration: 0 });
//         try {
//             await addTransaction.mutateAsync({ ...data });
//             toast.dismiss(pendingToast);
//             toast.success('Transaction added successfully.');
//             reset();
//         } catch (error: any) {
//             toast.dismiss(pendingToast);
//             toast.error(`${error?.response?.data?.message} \nFailed to add transaction. Please try again.`);
//             console.log('ERROR ADDING TRANSACTION', error);
//         }
//     };

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error loading users</div>;
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 {/* Form fields go here */}
//                 <button type="submit">Add Transaction</button>
//             </form>
//             <div>
//                 {users.map((user: any) => (
//                     <div key={user.id}>{user.name}</div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MyComponent;
