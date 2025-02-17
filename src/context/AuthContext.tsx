import React, {useEffect, useState} from "react";
import {createContext} from "react";

interface IAuthContext {
    loading: boolean;
    login: (token: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const token: string | null = localStorage.getItem("jwtToken");
        setIsAuthenticated(!!token);
        setLoading(false);
    }, []);


    const login = (token: string) => {
        localStorage.setItem("jwtToken", token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("jwtToken");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};