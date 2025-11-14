import { PlayCircle } from "react-bootstrap-icons"; // React icons for play button
import clientImage1 from "../assets/client1.png"; // Replace with actual image path
import clientImage2 from "../assets/client2.png";
import clientImage3 from "../assets/client3.png";
import clientImage4 from "../assets/client4.png";

const ClientTestimonials = () => {
  return (
    <section className="client-testimonials py-5">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-5">
          What Our Clients Have To Say About Us
        </h2>
        <p className="text-muted mb-5">
          Take A Look At Our Simple And Straightforward Process To Hire Software
          Developers From ValueCoders.
        </p>

        <div className="row">
          {/* Testimonial 1 */}
          <div className="col-md-3 mb-4">
            <div className="testimonial-card">
              <img
                src={clientImage1}
                alt="Krish Bruynson"
                className="img-fluid rounded-circle"
              />
              <h5 className="mt-3">Krish Bruynson</h5>
              <p className="text-muted">Director, Starloft</p>
              <div className="rating mb-3">
                <span className="text-warning">⭐⭐⭐⭐⭐</span>
              </div>
              <PlayCircle size={35} className="play-button" />
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-md-3 mb-4">
            <div className="testimonial-card">
              <img
                src={clientImage2}
                alt="Krish Bruynson"
                className="img-fluid rounded-circle"
              />
              <h5 className="mt-3">Krish Bruynson</h5>
              <p className="text-muted">Director, Starloft</p>
              <div className="rating mb-3">
                <span className="text-warning">⭐⭐⭐⭐⭐</span>
              </div>
              <PlayCircle size={35} className="play-button" />
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-md-3 mb-4">
            <div className="testimonial-card">
              <img
                src={clientImage3}
                alt="Krish Bruynson"
                className="img-fluid rounded-circle"
              />
              <h5 className="mt-3">Krish Bruynson</h5>
              <p className="text-muted">Director, Starloft</p>
              <div className="rating mb-3">
                <span className="text-warning">⭐⭐⭐⭐⭐</span>
              </div>
              <PlayCircle size={35} className="play-button" />
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="col-md-3 mb-4">
            <div className="testimonial-card">
              <img
                src={clientImage4}
                alt="Krish Bruynson"
                className="img-fluid rounded-circle"
              />
              <h5 className="mt-3">Krish Bruynson</h5>
              <p className="text-muted">Director, Starloft</p>
              <div className="rating mb-3">
                <span className="text-warning">⭐⭐⭐⭐⭐</span>
              </div>
              <PlayCircle size={35} className="play-button" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
