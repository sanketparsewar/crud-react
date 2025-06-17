import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    { type = "text", className = "", placeholder, maxLength=25, value, ...props },
    ref
  ) => {
    return (
      <div>
        <input
          ref={ref}
          placeholder={placeholder}
          className={`border w-full sm:w-auto px-3 py-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none ${className}`}
          type={type}
          value={value}
          maxLength={maxLength}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
