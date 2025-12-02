import { useEffect } from "react";
import "./App.css";
import Features from "./components/Features/Features";
import FollowUs from "./components/FollowUS/FollowUs";
import Footer from "./components/Footer/Footer";
import HeaderHero from "./components/HeaderHero/HeaderHero";
import Special from "./components/Special/Special";

function App() {
  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    if (ua.includes("Instagram")) {
      window.location.href =
        "https://kobayt-mognn.vercel.app/?openExternalBrowser=1";
    }
  }, []);
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
