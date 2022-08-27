import Input from "./Input";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Form = ({ isSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConfPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dataDorm = [
    {
      name: "Email",
      type: "email",
      setData: setEmail,
      isLogin: true,
    },
    {
      name: "Password",
      type: "password",
      setData: setPassword,
      isLogin: true,
    },
    {
      name: "Confirm password",
      type: "password",
      setData: setConfPassword,
      isLogin: isSignUp,
    },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("your password is weak");
    } else if (isSignUp && password !== conPassword) {
      setError("Please right your passwd again");
    } else if (isSignUp) {
      //TODO create user
      const response = await axios.post("http://localhost:8000/signup", {
        email,
        password,
      });
      if (response.status === 201) {
        navigate("/onboarding");
      }
    } else {
      return;
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {dataDorm.map((item, index) => {
        return (
          item.isLogin && (
            <Input
              key={index}
              type={item.type}
              name={item.name}
              setData={item.setData}
              setError={setError}
            />
          )
        );
      })}

      {error?.length > 0 && <p className="error">{error}</p>}
      <input className="secondary-button" type="submit" />
    </form>
  );
};

export default Form;
