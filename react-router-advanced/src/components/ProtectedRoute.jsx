import React from 'react';
import {Route, Navigate } from 'react-dom';
import {useAuth} from '../hooks/useAuth';


function ProtectedRoute({ element, ...rest}) {
    const isAuthenticated = useAuth ();

    return(
        <Route
        {...rest}
        element={isAuthenticated ? element: <Navigate to="/" />}
       />
    );
}

export default ProtectedRoute;