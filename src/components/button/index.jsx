import "./style.css";

export default function Button({ text, onClick, customClass }) {
  return (
    <button type="button" className={customClass} onClick={onClick}>
      {text}
    </button>
  );
}
