import "./FollowUs.css";
import ig from "../../assets/ig.jpg";
import fb from "../../assets/fb.jpg";

function FollowUs() {
  return (
    <div className="follow">
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
      </div>
    </div>
  );
}

export default FollowUs;
