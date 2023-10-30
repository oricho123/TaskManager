import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

type LoginPropTypes = {};

const Login = (props: LoginPropTypes) => {
    const {setAuthenticated} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = () => {
        setAuthenticated(true);
        navigate('/');
    }
    return (
        <div>
            <button onClick={handleLogin}>Authenticate</button>
        </div>
    );
}

export default Login;