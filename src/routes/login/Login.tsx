import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

type LoginPropTypes = {};

const fakeAuth = () => {
    return new Promise<string>((resolve) => {
        setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    });
};

const Login = (props: LoginPropTypes) => {
    const {setToken} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = async () => {
        const token = await fakeAuth();

        setToken(token);
        navigate('/');
    }
    return (
        <div>
            <button onClick={handleLogin}>Authenticate</button>
        </div>
    );
}

export default Login;