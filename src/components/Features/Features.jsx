import "./features.css";
import Card from "./Card";
import coffee from "../../assets/coffee.svg";
import medal from "../../assets/medal.svg";
import bean from "../../assets/bean.svg";
import bag from "../../assets/bag.svg";
import wait from "../../assets/wait.jpg";

// import Button from "../Button/Button.jsx";
import { useEffect } from "react";

function Features() {
  const description =
    "The Coffee is brewed using the finest beans sourced from around the world,.";

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                    // return;
                }
            });
        },
        { threshold: 0.3 }
    );
    cards.forEach((card) => observer.observe(card));
    
    
    const houseImg = document.querySelector(".house img");
    const houseDesc = document.querySelector(".house-description");
    const observerHouse = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
            // return;
          }
        });
      },
      { threshold: 0.3 }
    );
    observerHouse.observe(houseImg);
    observerHouse.observe(houseDesc);


    return () => {
      cards.forEach((card) => observer.unobserve(card));
      observerHouse.unobserve(houseImg);
    };
  }, []);

  return (
    <>
      <div className="features" id="about">
        <Card
          icon={coffee}
          feature={"Awesome Aroma"}
          description={description}
        />
        <Card icon={medal} feature={"High Quality"} description={description} />
        <Card icon={bean} feature={"Pure Grades"} description={description} />
        <Card
          icon={bag}
          feature={"Proper Roasting"}
          description={description}
        />
      </div>
      <div className="house">
        <img src={wait} height="300" alt="logo" />
        <div className="house-description">
          <h2>Best Drinks House In Your Home Town</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          {/* <Button className="btn" desc={"Read More"} /> */}
        </div>
      </div>
    </>
  );
}

export default Features;
