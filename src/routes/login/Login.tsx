import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {ThemedButton} from "../../components/buttons/ThemedButton";
import defaultBannerImage from "./assets/bg.jpeg"
import styles from "./styles.module.css"

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
        <div className={styles["login-page"]}>
            <aside style={{backgroundImage: `url(${defaultBannerImage})`}} className={styles["login-page-banner"]}/>
            <main>
                <form className={styles["login-form"]}>
                    <header>
                        <h1>Hello</h1>
                    </header>
                    <input/>
                    <section>
                        <button>test</button>
                        <ThemedButton onClick={handleLogin}>Authenticate</ThemedButton>
                    </section>
                </form>
            </main>
        </div>
    );
}

export default Login;