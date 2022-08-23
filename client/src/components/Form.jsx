import Input from "./Input";
import { useState } from "react";

const Form = ({ isSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConfPassword] = useState("");
  const [error, setError] = useState("");
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
  const handleSubmit = (e) => {
    if (password.length < 6) {
      setError("your password is weak");
    }
    if (isSignUp && password !== conPassword) {
      setError("Please right your passwd again");
    } else {
      setError("");
      e.preventDefault();
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
            />
          )
        );
      })}

      <input className="secondary-button" type="submit" />
      {error.length > 0 && <p className="error">{error}</p>}
    </form>
  );
};

export default Form;
