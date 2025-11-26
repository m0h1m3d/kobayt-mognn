export function handleBtnClick(e) {
    const button = e.target
    button.style.transform = "scale(0.8)";

    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 200);
  }