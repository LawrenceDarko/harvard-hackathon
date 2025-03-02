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
    // update Transaction
    registerUser: (data: any) => api.post('/auth/register', data),
    
    sendPasswordResetEmail: (data: any) => api.post(`/auth/request-password-reset`, data),
    resetPassword: (token: string, data: any) => api.post(`/auth/reset-password/${token}`, data),

};

export default ApiService;
