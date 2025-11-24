import Item from "./Item";
import "./special.css";
import shake from "../../assets/shake.jpg";
import caram from "../../assets/caram.jpg";
import cros from "../../assets/cros.jpg";

function Special() {
  return (
    <div className="special" id="menu">
      <h1>Our Special Drinks</h1>
      <div className="special-slider">
        <Item
          img={shake}
          name={"Oreo Milkshake"}
          desc={"The coffee is brewed first roasting the green coffee beans"}
          price={10}
        />
        <Item
          img={caram}
          name={"Iced Coffee Caramel"}
          desc={"The coffee is brewed first roasting the green coffee beans"}
          price={10}
        />
        <Item
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
