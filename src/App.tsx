import React, {useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import {AuthContext} from "./context/AuthContext";
import {ThemedButton} from "./components/buttons/ThemedButton";


function App() {
    const {deleteToken} = useContext(AuthContext);
    const logout = () => {
        deleteToken()
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <ThemedButton onClick={logout}>Logout</ThemedButton>
            </header>
        </div>
    );
}

export default App;
