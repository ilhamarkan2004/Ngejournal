const Input = ({type,name,placeholder}) => {
    return (
      <input
        id={name}
        type={type}
        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
      />
    );
}

export default Input;