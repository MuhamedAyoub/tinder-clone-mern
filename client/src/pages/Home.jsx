import NavBar from "../components/NavBar";
import { useState } from "react";
import AuthModel from "../components/AuthModel";
const Home = () => {
  const [showModel, setShowModel] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const authToken = false;
  const minimal = false;
  const handleClick = () => {
    setShowModel(!showModel);
    setIsSignUp(true);
  };

  return (
    <div className="container">
      <NavBar
        authToken={authToken}
        minimal={minimal}
        setShowModel={setShowModel}
        setIsSignUp={setIsSignUp}
        showModel={showModel}
      />
      <div className="wrapper">
        <h1>Swipe Right@</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Sign out" : "Create Account"}
        </button>
        {showModel && (
          <AuthModel
            isSignUp={isSignUp}
            setIsSignUp={setIsSignUp}
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
