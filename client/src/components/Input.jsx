const Input = ({ type, name, setData, key }) => {
  return (
    <div className="input-container">
      <input
        className="input"
        key={key}
        name={name}
        type={type}
        required
        placeholder={name}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  );
};

export default Input;
