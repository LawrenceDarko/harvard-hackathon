// hooks/useSubscriptionStatus.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import ApiService from '../services/api';
// import { useAuthContext } from '../context/AuthContext';
import { useSession } from 'next-auth/react';

const useSubscriptionStatus = () => {
    // const { user } = useAuthContext();
    const { data: session } = useSession();
    const userId = session?.user?.data?._id;
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const fetchStatus = async () => {
        try {
            const response = await ApiService.getSubscriptionStatus();
            setStatus(response.data.data.status);
            console.log("SUBSCRIPTION STATUS", response.data.data.status);
        } catch (error) {
            console.error('Error fetching subscription status', error);
        }
        };

        fetchStatus();
    }, [userId]);

    return status;
};

export default useSubscriptionStatus;
