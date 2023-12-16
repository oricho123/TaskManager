import React, {FC, FormEventHandler} from 'react';
import {ThemedButton} from "../../../components/buttons/ThemedButton";
import "./styles.module.css"
import {ThemedTextInput} from "../../../components/input/text/ThemedTextInput";

interface LoginProps {
    onSubmit: FormEventHandler<HTMLFormElement>,
}

const LoginForm: FC<LoginProps> = (props) => {

    return (
        <form onSubmit={props.onSubmit}>
            <header>
                <h1>Hello</h1>
            </header>
            <ThemedTextInput fullWidth placeholder='Username' name='username' id='username'/>
            <ThemedTextInput fullWidth placeholder='Password' name='password' id='password'/>
            <ThemedButton type='submit'>Authenticate</ThemedButton>
            <section>
                <a href="tempurl">Can't remember username?</a>
                <a href="tempurl">New to this site?</a>
            </section>
        </form>
    );
}

export default LoginForm;

