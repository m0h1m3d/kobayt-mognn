import { useRef } from "react";
import "./Button.css";

function Button({ desc, className }) {
  const btnRef = useRef(null);

  function handleBtnClick() {
    const button = btnRef.current;
    button.style.transform = "scale(0.8)";

    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 200);
  }

  return (
    <button
      className={`button ${className ? className : ""}`}
      ref={btnRef}
      onClick={() => handleBtnClick()}
    >
      {desc}
    </button>
  );
}

export default Button;
