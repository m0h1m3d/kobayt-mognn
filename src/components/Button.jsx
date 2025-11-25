import { useRef } from "react";
import "./button.css";

function Button({ desc }) {
  const btnRef = useRef(null);

  function handleBtnClick() {
    const button = btnRef.current;
    button.style.transform = "scale(0.8)";

    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 200);
  }

  return (
    <button className="btn" ref={btnRef} onClick={() => handleBtnClick()}>
      {desc}
    </button>
  );
}

export default Button;
