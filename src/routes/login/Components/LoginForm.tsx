import React, {useContext} from 'react';
import {AuthContext} from "../../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {ThemedButton} from "../../../components/buttons/ThemedButton";
import "./styles.module.css"


const fakeAuth = (formData: FormData) => {
    console.log(formData.get('password'))
    return new Promise<string>((resolve) => {
        setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    });
};

const LoginForm = () => {
    const {setToken} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        console.log(formData);
        const token = await fakeAuth(formData);
        setToken(token);

        navigate('/')
    }

    return (
        <form onSubmit={handleLogin}>
            <header>
                <h1>Hello</h1>
            </header>
            <label htmlFor="username">Username</label><br/>
            <input type="text" id="username" name="username"/><br/>
            <label htmlFor="password">Password</label><br/>
            <input type="text" id="password" name="password"/>
            <ThemedButton type='submit'>Authenticate</ThemedButton>
            <section>
                <a href="tempurl">Can't remember username?</a>
                <a href="tempurl">New to this site?</a>
            </section>
        </form>
    );
}

export default LoginForm;