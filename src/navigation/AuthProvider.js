import React, { createContext, useState } from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('loading');
    const [select, setSelect] = useState({key:'tatca'});

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                select, 
                setSelect
            }}>
            {children}
        </AuthContext.Provider>
    );
};