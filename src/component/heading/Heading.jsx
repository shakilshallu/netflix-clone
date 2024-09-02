import React from "react";
import "./heading.css";

const Heading = ({ className, title, size, align, color }) => {
  return (
    <h1 className={` ${className || ""} ${size || ""} ${align || ""} ${color || ""}`}>{title}</h1>
  );
};

export default Heading;