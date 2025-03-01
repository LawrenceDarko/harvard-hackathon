// services/localStorageService.ts

interface LocalStorageService {
    setItem: (key: string, value: any) => void;
    getItem: (key: string) => any;
    removeItem: (key: string) => void;
}

const localStorageService: LocalStorageService = {
        setItem: (key: string, value: any): void => {
            localStorage.setItem(key, JSON?.stringify(value));
        },

        getItem: (key: string): any => {
            const item = localStorage.getItem(key);
            return item ? JSON?.parse(item) : null;
        },

        removeItem: (key: string): void => {
            localStorage.removeItem(key);
        },
    };

export default localStorageService;
