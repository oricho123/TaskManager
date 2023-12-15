import React from 'react';
import defaultBannerImage from "./assets/bg.jpeg"
import styles from "./styles.module.css"
import LoginForm from "./Components/LoginForm";

const LoginPage = () => {
    return (
        <div className={styles["login-page"]}>
            <aside style={{backgroundImage: `url(${defaultBannerImage})`}}/>
            <main>
                <LoginForm/>
            </main>
        </div>
    );
}

export default LoginPage;