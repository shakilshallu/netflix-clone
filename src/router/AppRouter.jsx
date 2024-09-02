import React from "react";
import {ProtectedRoute,ProtectedRouteForUnAuthorizedPage} from "../router/ProductedRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninPage from "../pages/auth/signIn/SignInPage";
import SignupPage from "../pages/auth/signup/SignUp";
import HomePage from "../pages/portal/home/Page";
import SearchPage from "../pages/portal/search/Page";
import MyListPage from "../pages/portal/mylist/Page";
import LandingPage from "../pages/public/Landingpage";

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRouteForUnAuthorizedPage>
              <LandingPage />
            </ProtectedRouteForUnAuthorizedPage>
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectedRouteForUnAuthorizedPage>
              <SigninPage />
            </ProtectedRouteForUnAuthorizedPage>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRouteForUnAuthorizedPage>
              <SignupPage />
            </ProtectedRouteForUnAuthorizedPage>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mylist"
          element={
            <ProtectedRoute>
              <MyListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          }
        />
        <Route />
      </Routes>
    </BrowserRouter>
    // route end
  );
};

export default AppRouter;