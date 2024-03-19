const Input = ({ type, placeholder, onBlur, text, addClass, name, onChange, value }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input input-bordered bg-gray-100 ${addClass}`}
        onBlur={onBlur}
      >
        {text}
      </input>
    </div>
  );
};

export default Input;