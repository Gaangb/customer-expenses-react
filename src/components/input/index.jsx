import React from "react";
import "./style.css";

export default function Input({
  title,
  type,
  placeholder,
  onChange,
  maxLength,
  customClass,
  value,
  name,
}) {
  return (
    <input
      title={title}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={maxLength}
      className={customClass}
      value={value}
      name={name}
    />
  );
}
