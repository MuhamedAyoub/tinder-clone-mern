import Form from "./Form";
const AuthModel = ({ handleClick, isSignUp }) => {
  return (
    <div className="auth-container">
      <div className="auth-model">
        <span onClick={handleClick} className="material-symbols-outlined">
          cancel
        </span>
        <div className="form-container">
          <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
          <p>
            By clicking Log In, you agree to our terms. Learn how we process
            your data in our Privacy Policy and Cookie Policy.
          </p>
          <Form isSignUp={isSignUp} />
          <hr />
          <div>
            <h2>GET THE APP</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModel;
