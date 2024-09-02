import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem("user");
    if (!user) {
        return <Navigate to="/" />;
    } else {
        return children;
    }
};

export const ProtectedRouteForUnAuthorizedPage = ({ children }) => {
    const user = localStorage.getItem("user");
    if (user) {
        return <Navigate to="/home" />;
    } else {
        return children;
    }
};