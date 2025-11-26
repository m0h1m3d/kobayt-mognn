import "./followus.css";
import ig from "../../assets/ig.jpg";
import fb from "../../assets/fb.jpg";
import tk from "../../assets/tk.jpg";
import { useEffect } from "react";

function FollowUs() {
  useEffect(() => {
    const links = document.querySelectorAll(".links a");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      }),
        { threshold: 0.3 };
    });

    links.forEach((link) => observer.observe(link));

    return () => {
      links.forEach((link) => observer.unobserve(link));
    };
  }, []);

  return (
    <div className="follow f-container" id="news">
      <h1>Follow Us!</h1>
      <div className="links">
        <a href="https://www.instagram.com/kopayt.mognn/" target="blank">
          <img src={ig} alt="" />
          <span>kopayat.mognn</span>
        </a>

        <a
          href="https://web.facebook.com/profile.php?id=61573833974088"
          target="blank"
        >
          <img src={fb} alt="" />
          <span>kopayat.mognn</span>
        </a>

        <a href="https://www.tiktok.com/@kobaya249" target="blank">
          <img src={tk} alt="" />
          <span>kopayat.mognn</span>
        </a>
      </div>
    </div>
  );
}

export default FollowUs;
