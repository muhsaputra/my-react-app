import InputForm from "../Elements/input/";
import Button from "../Elements/Button/buttonIndex";
const FormLogin = () => {
  return (
    <form action="">
      {/* Email Form */}
      <InputForm label="Email" type="email" placeholder="Enter your email" />

      {/* Password Form */}
      <InputForm
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      {/* Button */}
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
