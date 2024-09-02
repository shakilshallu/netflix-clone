import React from "react";
import "./input.css";
const Input = ({label,bg = "",placeholder = "",name,value,type,onChange,}) => {
  return (
    <div className="parent">
      <input
        className={`${bg}`}
        type={type}
        name={name || ""}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
      />
      {label && <label>{label}</label>}
    </div>
  );
};

export default Input;