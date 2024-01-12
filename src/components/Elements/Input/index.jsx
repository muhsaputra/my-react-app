import Label from "./Label";
import Input from "./input";

const InputForm = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} />
    </div>
  );
};

export default InputForm;
