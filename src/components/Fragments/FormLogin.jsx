import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem('email', event.target.email.value);
    // localStorage.setItem('password', event.target.password.value);
    //  console.log(event.target.email.value);
    //  console.log(event.target.password.value);
    // console.log("dipenct");
    // window.location.href = "/products";
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        const expirationTime = new Date().getTime() + res.expires_in * 1000;
        localStorage.setItem("token", res.access_token);
        localStorage.setItem("tokenExpiration", expirationTime);
        window.location.href = "/dashboard";
      } else {
        setLoginFailed(res.response.data.message);
        console.log(res.response.data.message);
      }
    });
  };

  useEffect(() => {
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    const currentTime = new Date().getTime();
    if (tokenExpiration && currentTime > tokenExpiration) {
      localStorage.removeItem("token"); // Hapus token jika sudah kedaluwarsa
      localStorage.removeItem("tokenExpiration"); // Hapus waktu kedaluwarsa juga
    }
  }, []);
  return (
    <form className="mt-7 block" onSubmit={handleLogin}>
      {loginFailed && (
        <div className="bg-red-100 p-3 w-full">
          <div className="flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="flex-none fill-current text-red-500 h-4 w-4"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z" />
            </svg>
            <div className="leading-tight flex flex-col space-y-2">
              <div className="text-sm font-medium text-red-700">
                Something went wrong
              </div>
              <div className="flex-1 leading-snug text-sm text-red-600">
                {loginFailed}
              </div>
            </div>
          </div>
        </div>
      )}

      <InputForm
        type="email"
        name="email"
        placeholder="example@gmail.com"
        label="Email"
      />
      <InputForm
        type="password"
        name="password"
        placeholder="********"
        label="Password"
      />
      <div className="flex items-center justify-center">
        <Button type="submit">Login</Button>
      </div>
      <div className="text-center mt-4">
        <a href="#" className="text-slate-300  hover:underline">
          Forgot password?
        </a>
      </div>
    </form>
  );
};

export default FormLogin;
