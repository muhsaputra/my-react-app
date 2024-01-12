import { Link } from "react-router-dom";

const Button = (props) => {
  const { children, classname } = props;
  return (
    <button
      className={`h-10 px-6 hover:bg-blue-700 transition font-semibold rounded-md ${classname} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
