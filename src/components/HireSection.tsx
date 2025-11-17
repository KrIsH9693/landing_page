import "./HireSection.css";

import hireImg1 from "../assets/hire1.png"; 
import hireImg2 from "../assets/hire2.png"; 
import { CheckCircle, XCircle } from "lucide-react";

const HireSection = () => {
  return (
    <section className="hire-section-container">
      {/* TOP TITLE */}
      <div className="text-center mb-5">
        <h2 className="hire-title">Why Hire Developers From Our Name?</h2>
        <p className="hire-subtitle">
          Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since.
        </p>
      </div>

      <div className="hire-grid">
        {/* LEFT IMAGE */}
        <div className="hire-image-box">
          <img src={hireImg1} alt="Developer Working" className="hire-image" />
        </div>

        {/* RIGHT TEXT CONTENT */}
        <div className="hire-content-box">
          <h3 className="hire-small-title">High Quality/Cost Ratio</h3>

          <div className="hire-point">
            <CheckCircle className="hire-check-icon" />
            <div>
              <h4>Hire Silicon Valley Caliber At Half The Cost</h4>
              <p>
                Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.
              </p>
            </div>
          </div>

          <div className="hire-point">
            <XCircle className="hire-cross-icon" />
            <div>
              <h4>100+ Skills Available</h4>
              <p>
                Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.
              </p>
            </div>
          </div>
        </div>

        {/* SECOND ROW LEFT */}
        <div className="hire-content-box second-row">
          <h3 className="hire-small-title">Rigorous Vetting</h3>

          <div className="hire-point">
            <CheckCircle className="hire-check-icon" />
            <div>
              <h4>5+ Hours Of Tests And Interviews</h4>
              <p>
                Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.
              </p>
            </div>
          </div>

          <div className="hire-point">
            <XCircle className="hire-cross-icon" />
            <div>
              <h4>Seniority Tests</h4>
              <p>
                Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.
              </p>
            </div>
          </div>
        </div>

        {/* SECOND ROW IMAGE */}
        <div className="hire-image-box">
          <img src={hireImg2} alt="Developer Testing" className="hire-image" />
        </div>
      </div>
    </section>
  );
};

export default HireSection;
