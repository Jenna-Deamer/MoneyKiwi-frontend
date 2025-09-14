import { useState, useEffect } from 'react';
import { AccountContext } from './AccountContext';
const API_URL = import.meta.env.VITE_BACKEND_API_URL;

const AccountProvider = ({ children }) => {
    const [accounts, setAccounts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const getUserFinancialAccounts = async () => {
        try {
            const response = await fetch(`${API_URL}/accounts/`, {
                method: "GET",
                credentials: "include"
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setAccounts(data.data);
            } else {
                setAccounts(null);
            }
        } catch (err) {
            console.error(err);
            setError("Failed to fetch accounts");
            setAccounts(null);
        }
    };

     
    useEffect(() => {
        getUserFinancialAccounts().then(() => setLoading(false));
    }, []);

    return (
        <AccountContext.Provider value={{ accounts, loading, getUserFinancialAccounts, error }}>
            {children}
        </AccountContext.Provider>
    );
}


export default AccountProvider;