import React from "react";

function Button({ children, type = "button", className, ...props }) {
  return (
    <div>
      <button type={type} {...props} className={` ${className} cursor-pointer`}>
        {children}
      </button>
    </div>
  );
}

export default Button;
