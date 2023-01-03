import React from 'react';
import { Route, Navigate} from 'react-router-dom';
import ROUTES from "../constants/routes"
import isAuthenticated from "./auth";
import Home from "../pages/Home/Home"

function PublicRoute(props) {
    const { component: Component, restricted = false, ...rest } = props;
    console.log(Component,...rest,props)
    if (isAuthenticated() && restricted) {
        return <Navigate to={ROUTES.DASHBOARD} />;
        // return redirect(ROUTES.DASHBOARD)
    }

    // const render = props => {
    //
    //     return <Component {...props} />;
    // };

    return <Route exact path={props.path} element={<Home />} />;
}

export default PublicRoute;
