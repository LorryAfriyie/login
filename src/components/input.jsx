import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  (
    { type, name, id, className, placeholder, value, defaultValue, onChange },
    ref,
  ) => {
    return (
      <input
        type={type}
        name={name}
        id={id}
        className={className}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        ref={ref}
      />
    );
  },
);
