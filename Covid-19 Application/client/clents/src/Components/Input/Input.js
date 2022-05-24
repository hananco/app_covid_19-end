import React from "react";
import "./Input.css";
const input = ({
  name,
  type = "text",
  label,
  handleOnChange,
  value,
  onClick,
  checked,
  required,
}) => {
  return (
    <div className="inputContainer">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        onChange={(e) => handleOnChange(e)}
        value={value}
        onClick={onClick}
        checked={checked}
        required={required}
      />
    </div>
  );
};

export default input;
//