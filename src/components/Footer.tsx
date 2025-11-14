import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container py-5">

        <div className="row mb-5">

          {/* Logo + Social Icons */}
          <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
            <img src="/logo.png" alt="Logo" className="footer-logo mb-3" />

            <div className="social-links">
              <a href="#" className="social-icon me-3"><FaFacebookF size={20} /></a>
              <a href="#" className="social-icon me-3"><FaTwitter size={20} /></a>
              <a href="#" className="social-icon me-3"><FaLinkedinIn size={20} /></a>
              <a href="#" className="social-icon"><FaYoutube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-2 text-center text-md-start mb-4 mb-md-0">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-list">
              <li><a href="#">Software Team</a></li>
              <li><a href="#">Technologies</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Company</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-12 col-md-3 text-center text-md-start mb-4 mb-md-0">
            <h5 className="footer-heading">Services</h5>
            <ul className="footer-list">
              <li><a href="#">Dedicated Development</a></li>
              <li><a href="#">Staff Augmentation</a></li>
              <li><a href="#">Software Development</a></li>
              <li><a href="#">Development Center</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <h5 className="footer-heading">Contact Us</h5>

            {/* TEXT WHITE FIXED */}
            <p className="footer-text">Envato, Level 13</p>
            <p className="footer-text">2 Elizabeth Victoria 3000, India</p>
            <p className="footer-text">+91 861 944 1176</p>
            <p className="footer-text">ezyoga@gmail.com</p>
          </div>

        </div>

        {/* Bottom Green Bar */}
        <div className="footer-bottom">
          <p className="footer-bottom-text">logoname. 2023. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
