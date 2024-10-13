import "./pagecss/Input.css"
import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  return (
    <label className={className} >
      {label}

      <input
        type={type}
        className={`mt-1 px-3 ${className}`}
        ref={ref}
        {...props}
      />
    </label>
  );
});

export default Input;
