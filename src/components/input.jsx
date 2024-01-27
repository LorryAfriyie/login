export const Input = ({
  type,
  name,
  id,
  className,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
