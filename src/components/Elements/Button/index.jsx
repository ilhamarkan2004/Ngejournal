const Button = ({children,type}) => {
  return (
    <button
      type={type}
      className=" rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2.5 px-3 focus:outline-none focus:shadow-outline w-full"
    >
     {children}
    </button>
  );
};

export default Button;
