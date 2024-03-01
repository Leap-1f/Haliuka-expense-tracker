const Input = ({ type, placeholder, text, addClass }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered bg-gray-100 ${addClass}`}
      >
        {text}
      </input>
    </div>
  );
};

export default Input;