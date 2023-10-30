import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {ThemedButton} from "../../components/buttons/ThemedButton";


const fakeAuth = () => {
    return new Promise<string>((resolve) => {
        setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    });
};

const Login = () => {
    const {setToken} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = async () => {
        const token = await fakeAuth();

        setToken(token);
        navigate('/');
    }
    return (
        <div>
            <ThemedButton onClick={handleLogin}>Authenticate</ThemedButton>
        </div>
    );
}

export default Login;