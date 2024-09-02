import React from "react";
import "./heading.css";

const Content = ({content, color, className }) => {
  return (
    <h4 className={`contentvalues ${className || ""} ${color || ""}`}>
      {content}
    </h4>
  );
};

export default Content;