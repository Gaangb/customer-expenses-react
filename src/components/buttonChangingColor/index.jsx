import React, { useState } from "react";

export default function ButtonChangingColor({ type, onClick, text, icon, isColor }) {

  const buttonColor = isColor ? "#374f67" : "#378ce1";

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ backgroundColor: buttonColor, color: "#fff" }}
    >
      {text}
      {icon}
    </button>
  );
}
