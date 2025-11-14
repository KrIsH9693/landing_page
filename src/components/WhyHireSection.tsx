import "./WhyHireSection.css";
import cityImage from "../assets/WhyHireImage.png";
import { ArrowUpRight } from "react-bootstrap-icons";

const WhyHireSection = () => {
  return (
    <section className="whyhire-wrapper">
      <div className="container-fluid px-4 px-md-5">
        <div className="row align-items-center">

          {/* LEFT SIDE IMAGE */}
          <div className="col-lg-6 p-0">
            <div className="whyhire-image-wrapper">
              <img src={cityImage} alt="City" className="whyhire-image" />
              <div className="whyhire-overlay"></div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="col-lg-6 text-white ps-lg-5 mt-5 mt-lg-0">
            
            <h2 className="whyhire-heading">
              Why Hire Software Developers <br />
              <span className="text-success">In India?</span>
            </h2>

            <ul className="whyhire-list">
              <li>
                English Speaking Programmers
                <ArrowUpRight className="icon" />
              </li>
              <li>
                Flexible Work Hours
                <ArrowUpRight className="icon" />
              </li>
              <li>
                Rapid Onboarding Process
                <ArrowUpRight className="icon" />
              </li>
              <li>
                Expertise In Top Technologies
                <ArrowUpRight className="icon" />
              </li>
              <li>
                Reliable Partner Credentials
                <ArrowUpRight className="icon" />
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireSection;
