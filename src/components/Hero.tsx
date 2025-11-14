import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* LEFT CONTENT */}
      <div className="hero-left">
        <h1>
          Hire {<span>Dedicated Software Developers</span>} To Build Your Product
        </h1>

        <p className="hero-desc">
          We provide top-notch, skilled developers to accelerate your project
          and transform your ideas into reality.
        </p>

        <div className="hero-buttons">
          <button className="btn-view">View More</button>
          <button className="btn-touch">Get In Touch</button>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="hero-form">
        <h3>Hire Software Developers</h3>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="text" placeholder="Country" required />

          <textarea placeholder="Project Brief" rows={4}></textarea>

          <button className="btn-submit">Hire Software Developer</button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
