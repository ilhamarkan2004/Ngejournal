const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-slate-300 text-sm font-bold mb-2 text-left"
    >
      {children}
    </label>
  );
};

export default Label;
