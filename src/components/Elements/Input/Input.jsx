const Input = ({type,name,placeholder}) => {
    return (
      <input
        id={name}
        type={type}
        className=" bg-transparent appearance-none border-none rounded w-full py-3 px-4 text-white placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
      />
    );
}

export default Input;