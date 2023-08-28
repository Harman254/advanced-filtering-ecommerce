const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
};

export default Button;

// Code snippet from c:\Users\Harman Malova\Desktop\next_js_13\next_shop\app\Recommended\Recommended.jsx