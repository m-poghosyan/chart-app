import React from "react";
import "./tabButton.scss";

const TabButton = ({ innerText, isActive, ...props }) => {
  return (
    <button className={`tabButton ${isActive ? "active" : ""}`} {...props}>
      {innerText}
    </button>
  );
};

export default TabButton;
