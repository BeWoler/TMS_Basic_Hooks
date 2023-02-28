import { IButton } from "./interfaces/button.interface";

const Button = (props: IButton) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        props.handler();
      }}>
      {props.value}
    </button>
  );
};

export default Button;
