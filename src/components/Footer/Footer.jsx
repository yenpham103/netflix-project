import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Cookie Preferences</li>
        <li>Legal Notices</li>
        <li>Ways to Watch</li>
        <li>Corporate Information</li>
        <li>Only on Netflix</li>
        <li>Media Center</li>
        <li>Terms of Use</li>
        <li>Contact Us</li>
        <li>Investor Relations</li>
        <li>Speed Test</li>
      </ul>
      <p className="copyright-text">Fullstack Netflix, Inc.</p>
    </div>
  );
}

export default Footer;
