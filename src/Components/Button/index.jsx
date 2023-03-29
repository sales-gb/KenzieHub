import { ThemeButton } from '../../style/buttons.js';

const Button = ({ buttonSize, text, onClick, type, isValid }) => {
  return (
    <>
      <ThemeButton
        buttonSize={buttonSize}
        type={type}
        onClick={onClick}
        isValid={isValid}
      >
        {text}
      </ThemeButton>
    </>
  );
};

export default Button;
