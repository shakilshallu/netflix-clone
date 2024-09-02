import React from "react";
import "./button.css";

const Button = ({className,background,size,color,value,round,icon,onclick,iconProp,type,}) => {
  return (
    <button
      className={` ${className || ""} ${background || ""} ${color || ""} ${round && round} ${
        size || ""
      } `}
      type={type || ""}
      onClick={onclick}
    >
      {value}
      {icon && <div className={`${iconProp || ""}`}>{icon}</div>}
    </button>
  );
};

export default Button;