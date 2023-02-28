import { IInput } from "./interfaces/input.interface";

const Input = (props: IInput) => {
  return (
    <div>
      {props.title}
      <input
        type={props.type}
        onChange={props.handler}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
