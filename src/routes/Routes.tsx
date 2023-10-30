import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {createBrowserRouter, Navigate, Outlet} from "react-router-dom";
import App from "../App";

const PrivateRoutes = () => {
    const {authenticated} = useContext(AuthContext)
    if (!authenticated)
        return <Navigate to='/login' replace/>
    return <Outlet/>
}

export const Routes = createBrowserRouter([
    {
        path: "/login",
        element: <div>Hello world!</div>,
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