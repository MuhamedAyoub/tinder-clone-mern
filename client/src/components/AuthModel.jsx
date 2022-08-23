import Form from "./Form";
//import { useState } from "react";

const AuthModel = ({ handleClick, isSignUp, setIsSignUp }) => {
  return (
    <div className="auth-model">
      <span onClick={handleClick}>X</span>
      <div className="form">
        <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
        <p>
          By clicking Log In, you agree to our terms. Learn how we process your
          data in our Privacy Policy and Cookie Policy.
        </p>
        <Form isSignUp={isSignUp} />
        <hr />
        <div>
          <h2>GET THE APP</h2>
        </div>
      </div>
    </div>
  );
};

export default AuthModel;
