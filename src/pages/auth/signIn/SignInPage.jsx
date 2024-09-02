import Footer from "../../../component/footer/Footer";
import Form from "../../../component/form/Form";
import Navbar from "../../../component/navbar/Navbar";
import "./signin.css";
// import Navbar from "../../../components/navbar/Navbar";
// import React from "react";
// import Form from "../../../components/form/Form";
// import Footer from "../../../components/footer/Footer";

const SignIn = () => {
    return (
        <div className="auth-page">
            <Navbar/>
            <Form isSignin />
            <div className="footsignin">
            <Footer />
            </div>
        </div>
    );
};

export default SignIn;