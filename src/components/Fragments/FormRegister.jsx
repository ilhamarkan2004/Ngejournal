import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form className="mt-7 block">
      <InputForm
        type="text"
        name="username"
        placeholder="Username"
        label="Username"
      />
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
        <Button type="submit">Register</Button>
      </div>
      <div className="text-center mt-4">
        <a href="#" className="text-gray-600 hover:underline">
          Forgot password?
        </a>
      </div>
    </form>
  );
};

export default FormRegister;
