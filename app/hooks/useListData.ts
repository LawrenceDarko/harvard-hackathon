import { useEffect, useState } from 'react';
import ApiService from '../services/api'; // Import your API service

const useListData = (apiFunction: any, type: string, additionalDependency?: any) => {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiFunction();
                // console.log('Hook Response:', response); // Log the response for debugging purposes
                const transformedData = response?.data?.data?.map((item: any) => {
                    if (type === 'banks') {
                        return {
                            value: item._id,
                            label: item.bankName,
                        };
                    } else if(type === 'category'){
                        return {
                            value: item._id,
                            label: item.name,
                        };
                    } else if(type === 'subCategory'){
                        return {
                            value: item._id,
                            label: item.name,
                        };
                    }
                    console.log('Invalid type:', type);
                    return null;
                });
                setListData(transformedData);
            } catch (error) {
                console.error('Error fetching list data:', error);
            }
        };

        fetchData();
    }, [apiFunction, additionalDependency]);

    return listData;
};

export default useListData;
