import React from "react";
export default function ButtonChangingColor({
  type,
  onClick,
  text,
  icon,
  isColor,
}) {
  const buttonColor = isColor ? "#378ce1" : "#fff";
  const fontColor = isColor ? "#fff" : "#378ce1";

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ backgroundColor: buttonColor, color: fontColor }}
    >
      {text}
      {icon}
    </button>
  );
}
