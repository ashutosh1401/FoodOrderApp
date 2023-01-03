import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import ROUTES from "../constants/routes";
import isAuthenticated from "./auth";
function PrivateRoute({children}) {

    if(!isAuthenticated()) {
        return <Navigate to={ROUTES.LOGIN} />
    }
    return children
}

export default PrivateRoute;
