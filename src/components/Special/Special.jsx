import Item from "./Item";
import "./special.css";
import shake from "../../assets/shake.jpg";
import caram from "../../assets/caram.jpg";
import cros from "../../assets/cros.jpg";
import { useEffect } from "react";

function Special() {
  useEffect(() => {
      const items = document.querySelectorAll(".item");
    
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
    items.forEach((item) => observer.observe(item));
      
  
  
  
      return () => {
        items.forEach((item) => observer.unobserve(item));
      };
    }, []);



  return (
    <div className="special" id="menu">
      <h1>Our Special Drinks</h1>
      <div className="special-slider">
        <Item
          newClass="item-1"
          img={shake}
          name={"Oreo Milkshake"}
          desc={"The coffee is brewed first roasting the green coffee beans"}
          price={10}
        />
        <Item
          newClass="item-2"
          img={caram}
          name={"Iced Coffee Caramel"}
          desc={"The coffee is brewed first roasting the green coffee beans"}
          price={10}
        />
        <Item
          newClass="item-3"
          img={cros}
          name={"Croissant Coffee"}
          desc={"The coffee is brewed first roasting the green coffee beans"}
          price={10}
        />
      </div>
    </div>
  );
}

export default Special;
