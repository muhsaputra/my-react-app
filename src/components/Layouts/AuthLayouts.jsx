import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 font-bold mb-2 text-3xl">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        {Navigation({ type })}
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Dont have an account? {""}
        <Link to={"/register"} className="font-bold text-blue-500">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account? {""}
        <Link to={"/login"} className="font-bold text-blue-500">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
