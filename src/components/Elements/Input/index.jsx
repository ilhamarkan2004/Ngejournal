import Input from "./Input";
import Label from "./Label";

const InputForm = ({name,children,type,placeholder,label}) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder}></Input>
    </div>
  );
};

export default InputForm;
