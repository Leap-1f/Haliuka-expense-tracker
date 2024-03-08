const Button = ({ text, onClick, }) => {
  return (
    <div>
      <button onClick={onClick} className="btn w-full rounded-[20px] hover:bg-blue-700 text-white bg-blue text-lg font-normal">
        {text}
      </button>
    </div>
  );
};

export default Button;