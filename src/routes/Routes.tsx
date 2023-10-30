import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {createBrowserRouter, Navigate, Outlet} from "react-router-dom";
import App from "../App";
import Login from "./login/Login";

const PrivateRoutes = () => {
    const {token} = useContext(AuthContext)
    if (!token)
        return <Navigate to='/login' replace/>
    return <Outlet/>
}

export const Routes = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>,
    },
    {
        element: <PrivateRoutes/>,
        errorElement: <Navigate to='/'/>,
        children: [{
            path: "/",
            element: <App/>
        }]
    },
]);