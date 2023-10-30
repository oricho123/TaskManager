import {createContext, ReactNode, useState} from "react";

type Props = {
    children?: ReactNode;
}

type AuthContextType = {
    token: string | null;
    setToken: (newState: string | null) => void;
};

const initialValue = {
    token: null,
    setToken: () => {
    }
};

const AuthContext = createContext<AuthContextType>(initialValue);

const AuthProvider = ({children}: Props) => {
    const [token, setToken] = useState<string | null>(initialValue.token);


    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}