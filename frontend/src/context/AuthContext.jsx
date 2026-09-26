import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('foodvibe_user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [role, setRole] = useState(() => {
        return localStorage.getItem('foodvibe_role') || null; // 'user' | 'partner'
    });

    const [token, setToken] = useState(() => {
        return localStorage.getItem('foodvibe_token') || null;
    });

    const loginUserSession = (userData, authToken) => {
        setUser(userData);
        setRole('user');
        setToken(authToken);
        localStorage.setItem('foodvibe_user', JSON.stringify(userData));
        localStorage.setItem('foodvibe_role', 'user');
        if (authToken) localStorage.setItem('foodvibe_token', authToken);
    };

    const loginPartnerSession = (partnerData, authToken) => {
        setUser(partnerData);
        setRole('partner');
        setToken(authToken);
        localStorage.setItem('foodvibe_user', JSON.stringify(partnerData));
        localStorage.setItem('foodvibe_role', 'partner');
        if (authToken) localStorage.setItem('foodvibe_token', authToken);
    };

    const logout = async () => {
        try {
            if (role === 'partner') {
                await authAPI.logoutFoodPartner();
            } else {
                await authAPI.logoutUser();
            }
        } catch (e) {
            console.error("Logout error:", e);
        } finally {
            setUser(null);
            setRole(null);
            setToken(null);
            localStorage.removeItem('foodvibe_user');
            localStorage.removeItem('foodvibe_role');
            localStorage.removeItem('foodvibe_token');
        }
    };

    return (
        <AuthContext.Provider value={{
            user,
            role,
            token,
            isAuthenticated: !!user,
            isPartner: role === 'partner',
            loginUserSession,
            loginPartnerSession,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
