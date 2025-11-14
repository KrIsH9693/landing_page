import { CheckCircle } from "react-bootstrap-icons";
import topCompanyImg from "../assets/TopCompaniesImage.png"; // ← YOUR IMAGE PATH

const TopCompaniesSection = () => {
  return (
    <section className="py-5 py-lg-20 px-4 px-md-16 px-lg-24 bg-light">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={topCompanyImg}
              alt="Top Companies Illustration"
              className="img-fluid rounded shadow-sm"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4">
              Top Companies Trust{" "}
              <span className="text-success">Our Developers</span> <br />
              For Hiring Software Experts
            </h2>

            <p className="text-secondary fs-5 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>

            <div className="row">
              <div className="col-md-6">
                <p><CheckCircle className="text-success me-2" size={20} /> Client-Centric Approach</p>
                <p><CheckCircle className="text-success me-2" size={20} /> Global Quality Standards</p>
                <p><CheckCircle className="text-success me-2" size={20} /> Cutting-Edge Infrastructure</p>
              </div>

              <div className="col-md-6">
                <p><CheckCircle className="text-success me-2" size={20} /> Best-In-Class Project Management</p>
                <p><CheckCircle className="text-success me-2" size={20} /> Time-Zone Compatibility</p>
                <p><CheckCircle className="text-success me-2" size={20} /> Agile Adaptability</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopCompaniesSection;
