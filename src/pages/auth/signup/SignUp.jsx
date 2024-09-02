import React from "react";
import Form from "../../../component/form/Form";
import Navbar from "../../../component/navbar/Navbar";

const SignUp = () => {
    return (
        <div className="auth-page">
            <Navbar/>
            <Form isSignUp />
        </div>
    );
};
export default SignUp;