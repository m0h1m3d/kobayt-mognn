import "./App.css";
import Features from "./components/Features/Features";
import FollowUs from "./components/FollowUS/FollowUs";
import Footer from "./components/Footer/Footer";
import HeaderHero from "./components/HeaderHero/HeaderHero";
import Special from "./components/Special/Special";

function App() {
  return (
    <>
      <HeaderHero />
      <Features />
      <Special />
      <FollowUs />
      <Footer />
    </>
  );
}

export default App;
