import "./header.css";
import menuSvg from "../../assets/menu.svg";
import closeSvg from "../../assets/close.svg";
// import Button from "../Button/Button.jsx";
import { useEffect } from "react";
import { handleBtnClick } from "../../helper/buttonEffect";

function HeaderHero() {

  useEffect(()=>{
    const heading = document.querySelector(".hero").querySelector('h1');
    const par = document.querySelector(".hero").querySelector('p');
    // const btn = document.querySelector(".hero").querySelector('button');
    const btn = document.querySelector(".hero-btn");

    setTimeout(() => {
      heading.classList.remove('hide');
    }, 300);

    setTimeout(() => {
      par.classList.remove('hide');
    }, 500);
    
    setTimeout(() => {
      btn.classList.remove('hide');
    }, 700);

  },[])

  function toggleMenu() {
    const overlay = document.querySelector(".overlay");
    const navUl = document.querySelector("nav ul");

    overlay.style.opacity = overlay.style.opacity === "1" ? "0" : "1";
    overlay.style.pointerEvents =
      overlay.style.pointerEvents === "auto" ? "none" : "auto";

    navUl.style.transform = `translateX(${
      navUl.style.transform === "translateX(0%)" ? "100%" : "0%"
    })`;
  }

  return (
    <div className="container" id="home">
      <div className="overlay" onClick={() => toggleMenu()}></div>
      <header>
        <nav>
          <h3>Kobayt Mognn</h3>
          <button className="menu" onClick={() => toggleMenu()}>
            <img src={menuSvg} alt="menu" />
          </button>
          <ul>
            <button className="close" onClick={() => toggleMenu()}>
              <img src={closeSvg} alt="close menu" />
            </button>
            <div className="list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#news">News</a>
              </li>
            </div>
          </ul>
        </nav>
      </header>
      <div className="hero">
        <h1 className="hide">
          <span>Good Coffee </span>Will Always Find The Audience
        </h1>
        <p className="hide">We provide a vareity of unique and delicious drinks!</p>
        {/* <Button className='hide' desc={"Learn More"} /> */}
        <button onClick={(e)=>handleBtnClick(e)} className="hero-btn hide">Learn More</button>
      </div>
    </div>
  );
}

export default HeaderHero;
