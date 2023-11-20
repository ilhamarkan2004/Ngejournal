import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form className="mt-7 block">
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
