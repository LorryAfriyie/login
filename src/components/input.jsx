import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  ({ type, name, id, className, placeholder, value, onChange }, ref) => {
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
  },
);