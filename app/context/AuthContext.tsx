'use client'

import React, { useState, useReducer, useContext, useEffect, createContext } from "react"
import { useRouter } from 'next/navigation';
import axios from "axios"
import localStorageService from "../services/localStorageService";
import ApiService from "../services/api";

export const AuthContext = createContext(undefined) as any

export const authReducer = (state: any, action: any) => {
    switch(action.type){
        case "LOGIN":
            return {user: action.payload}
        case "LOGOUT":
            return {user: null}
        default:
            return state

    }
}

export const AuthContextProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(authReducer, {user: null})
    const [subscriptionStatus, setSubscriptionStatus] = useState(' canceled')

    const router = useRouter()

    const fetchSubscribtionStatus = async() => {
        try {
            const response = await ApiService.getSubscriptionStatus();
            const status = response.data.data;

            setSubscriptionStatus(status);
        } catch (error) {
            console.error('Error fetching subscription status', error);
        }
    }

    useEffect(() => {
        fetchSubscribtionStatus()
    }, [])
    

    // useEffect(() => {
    //     const user = JSON.parse(localStorage.getItem('userdata') as any)
    //     // const user = localStorageService.getItem('token')
    //     if(user){
    //         dispatch({type: "LOGIN", payload: user});
    //         fetchSubscribtionStatus();
    //     }
    // }, [])
    

    // console.log("Auth state:", state)
    return (
        <AuthContext.Provider value={{...state, dispatch, subscriptionStatus }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = (): any => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useGeneralContext must be used within a GeneralContextProvider');
    }
    
    return context;
}