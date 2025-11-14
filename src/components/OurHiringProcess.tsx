import "./OurHiringProcess.css";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";

const OurHiringProcess = () => {
  return (
    <section className="hiring-process-section py-5">
      <div className="container text-center">

        <h2 className="display-5 fw-bold mb-2">Our Hiring Process</h2>
        <p className="text-muted mb-5">
          Take A Look At Our Simple And Straightforward Process To Hire Software Developers.
        </p>

        <div className="row justify-content-center">

          {/* STEP 1 */}
          <div className="col-md-3 text-center mb-4">
            <div className="circle-icon">
              <img src={step1} alt="step1" />
              <span className="count">1</span>
            </div>
            <h5 className="mt-3 fw-bold">INQUIRY</h5>
            <p className="text-muted small">
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="col-md-3 text-center mb-4">
            <div className="circle-icon">
              <img src={step2} alt="step2" />
              <span className="count">2</span>
            </div>
            <h5 className="mt-3 fw-bold">SELECT DEVELOPERS</h5>
            <p className="text-muted small">
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="col-md-3 text-center mb-4">
            <div className="circle-icon">
              <img src={step3} alt="step3" />
              <span className="count">3</span>
            </div>
            <h5 className="mt-3 fw-bold">TEAM INTEGRATION</h5>
            <p className="text-muted small">
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>
          </div>

          {/* STEP 4 */}
          <div className="col-md-3 text-center mb-4">
            <div className="circle-icon">
              <img src={step4} alt="step4" />
              <span className="count">4</span>
            </div>
            <h5 className="mt-3 fw-bold">TEAM SCALING</h5>
            <p className="text-muted small">
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurHiringProcess;
