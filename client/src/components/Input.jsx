const Input = ({ type, name, setData, setError }) => {
  return (
    <input
      className="input"
      name={name}
      type={type}
      required
      placeholder={name}
      onChange={(e) => {
        setData(e.target.value);
        setError("");
      }}
    />
  );
};

export default Input;
