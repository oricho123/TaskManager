import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {createBrowserRouter, Navigate, Outlet} from "react-router-dom";
import App from "../App";
import LoginPage from "./login/LoginPage";
import {MainPage} from "./main/MainPage";

const PrivateRoutes = () => {
    const {token} = useContext(AuthContext)
    if (!token)
        return <Navigate to='/login' replace/>
    return <Outlet/>
}

const LoggedOutOnly = () => {
    const {token} = useContext(AuthContext)
    if (token)
        return <Navigate to='/' replace/>
    return <Outlet/>
}

export const Routes = createBrowserRouter([
    {
        element: <PrivateRoutes/>,
        errorElement: <Navigate to='/'/>,
        children: [{
            path: "/",
            element: <MainPage/>
        }]
    },
    {
        element: <LoggedOutOnly/>,
        children: [{
            path: "/login",
            element: <LoginPage/>,
        }]
    },
]);