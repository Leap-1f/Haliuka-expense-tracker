const Input = ({ type, placeholder, text, addClass, name, onChange }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className={`input input-bordered bg-gray-100 ${addClass}`}
      >
        {text}
      </input>
    </div>
  );
};

export default Input;