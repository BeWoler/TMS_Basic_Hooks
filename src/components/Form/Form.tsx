import { useState } from "react";
import { FormTypes } from "../../types/form.type";
import inputHandler from "../../utils/inputHandler";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";

const Form = () => {
  const [formData, setFormData] = useState<FormTypes>({
    text: "",
  });

  return (
    <form>
      <Input
        title='text '
        placeholder='text'
        type='text'
        handler={(e) => inputHandler(e, setFormData)}
        value={formData.text}
      />
      <Button
        value='send'
        handler={() => {
          console.log(formData);
          setFormData({ text: "" });
        }}
      />
    </form>
  );
};

export default Form;
