import "./UserGuide.css";
import guideImg from "../assets/guide-img.png";
import { CheckCircle } from "react-bootstrap-icons";
import { useState } from "react";

const UserGuide = () => {
  const tabs = [
    "Benefits Of Hiring Developers",
    "Key Factors To Consider While Hiring",
    "Defining Your Project Requirements",
    "Choosing The Right Development Model",
    "Typical Challenges For Hiring Developers",
    "Hiring Freelancers Vs. Dedicated Developers",
    "Communication With Remote Developers",
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="user-guide py-5">
      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          User Guide To Hire Dedicated Software Developers
        </h2>

        <div className="row gx-5">

          {/* LEFT TABS */}
          <div className="col-md-4">
            <div className="tabs-box">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`tab-item ${activeTab === index ? "active" : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-8">
            <div className="content-box">

              <h4 className="fw-bold mb-3">{tabs[activeTab]}</h4>

              <p className="text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text since the 1500s.
              </p>

              <div className="row mt-3">
                <div className="col-sm-6">
                  <p><CheckCircle className="text-success me-2" /> Client-Centric Approach</p>
                  <p><CheckCircle className="text-success me-2" /> Global Quality Standards</p>
                  <p><CheckCircle className="text-success me-2" /> Cutting-Edge Infrastructure</p>
                </div>
                <div className="col-sm-6">
                  <p><CheckCircle className="text-success me-2" /> Best-In-Class Project Management</p>
                  <p><CheckCircle className="text-success me-2" /> Time-Zone Compatibility</p>
                  <p><CheckCircle className="text-success me-2" /> Agile Adaptability</p>
                </div>
              </div>

              <img src={guideImg} alt="guide" className="img-fluid rounded mt-4" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserGuide;
