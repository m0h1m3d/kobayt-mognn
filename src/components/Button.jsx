import "./button.css";

function Button({ desc }) {
  function handleBtnClick() {
    const button = document.querySelector(".btn");
    button.style.transform = "scale(0.8)";

    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 200);
  }

  return (
    <button className="btn" onClick={() => handleBtnClick()}>
      {desc}
    </button>
  );
}

export default Button;
