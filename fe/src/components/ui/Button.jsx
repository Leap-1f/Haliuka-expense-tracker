const Button = ({ text, onClick, type, addClass}) => {
  return (
    <div>
      <button type={type} onClick={onClick} className={`btn w-full rounded-[20px] hover:bg-blue-700 text-white ${addClass} text-lg font-normal`}>
        {text}
      </button>
    </div>
  );
};

export default Button;