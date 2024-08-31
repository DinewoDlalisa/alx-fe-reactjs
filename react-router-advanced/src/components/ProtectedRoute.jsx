import React from 'react';
import {Route, Navigate } from 'react-dom';


function ProtectedRoute({ element, ...rest}) {
    const isAuthenticated = false;

    return(
        <Route
        {...rest}
        element={isAuthenticated ? element: <Navigate to="/" />}
       />
    );
}

export default ProtectedRoute;