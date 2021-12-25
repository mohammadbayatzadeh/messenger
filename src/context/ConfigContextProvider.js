import React, { createContext, useEffect, useState } from 'react';
import { firebaseConfig } from '../firebase';
import { useNavigate } from 'react-router-dom';


export const ConfigContext = createContext();

const ConfigContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);
    const history = useNavigate();
    useEffect(() => {
        firebaseConfig.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
            if (user) history("/chat")
        })
    }, [user, history])
    return (
        <ConfigContext.Provider value={user}>
            {children}
        </ConfigContext.Provider>
    );
};

export default ConfigContextProvider;