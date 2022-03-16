

const Button = ({ onClick, text }) => {
  return (
    <button style={{display: "inline block"}} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;