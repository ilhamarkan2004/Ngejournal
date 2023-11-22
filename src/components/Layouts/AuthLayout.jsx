import { Link } from "react-router-dom";

const AuthLayout = ({ children, type, title }) => {
  return (
    <div className="flex justify-center items-center min-h-screen  bg-cover bg-center bg-[url('/images/latar.jpg')]">
      <div className="backdrop-blur-lg shadow-md rounded-lg md:rounded-xl lg:rounded-2xl px-8 py-10 mb-4 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-3 text-center text-white">
          <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
            {title}
          </span>
        </h2>
        <p className="text-slate-200 font-semibold text-sm text-center">
          Welcome To Ngejounal !!!
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-center text-slate-300 mt-6">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-center text-slate-300 mt-6">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
