import { forwardRef } from "react";

export const Input = ({
  type,
  name,
  id,
  className,
  placeholder,
  value,
  onChange,
  ref,
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
      ref={ref}
    />
  );
};
