import React from "react";
import "./style.css";

export default function Container({ customClass, children }) {
  return <div className={customClass}>{children}</div>;
}
