import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './authContext';
const API_URL = import.meta.env.VITE_BACKEND_API_URL;

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // check if user status on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const loginAction = async (email, password) => {
        setError("");
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
                credentials: "include"
            });

            const data = await response.json();
            if (response.ok) {
                setUser(data.user);
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate("/dashboard");
                console.log(data.message)
                console.log(data.user)
            } else {
                setError(data.message || "Login failed");
            }
        } catch {
            setError("An error occurred. Please try again.");
        }
    };

    const signUpAction = async (email, password) => {
        try {
            const response = await fetch(`${API_URL}/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Account created')
            } else {
                setError(data.message || "Registration failed");
            }
        } catch (err) {
            console.error(err);
            setError("An error occurred. Please try again.");
        }
    }

    const logOutAction = async () => {
        try {
            await fetch(`${API_URL}/auth/logout`, {
                method: "POST",
                credentials: "include"
            });
        } catch (err) {
            console.error(err);
        }
        setUser(null);
        localStorage.removeItem('user');
        navigate("/login");
    };


    return (
        <AuthContext.Provider value={{ user, loading, loginAction, signUpAction, logOutAction, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
