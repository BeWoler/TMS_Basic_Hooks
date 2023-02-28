import { ChangeEvent, Dispatch } from "react";
import { FormTypes } from "../types/form.type";

const inputHandler = (
  e: ChangeEvent<HTMLInputElement>,
  setter: Dispatch<React.SetStateAction<FormTypes>>
) => {
  setter({ text: e.target.value });
};

export default inputHandler;
