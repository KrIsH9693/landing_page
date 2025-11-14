import "./TechnologySection.css";

import backendIcon from "../assets/backend.png";
import frontendIcon from "../assets/frontend.png";
import mobileIcon from "../assets/mobile.png";
import blockchainIcon from "../assets/blockchain.png";
import devopsIcon from "../assets/devops.png";
import ecommerceIcon from "../assets/ecommerce.png";

const techData = [
  {
    title: "Backend Development",
    icon: backendIcon,
    bg: "#eef1ff",
    border: "#1d3ce8",
  },
  {
    title: "Fronted Development",
    icon: frontendIcon,
    bg: "#fff3df",
    border: "#ffb84d",
  },
  {
    title: "Mobile Development",
    icon: mobileIcon,
    bg: "#ffeafe",
    border: "#d29bff",
  },
  {
    title: "Blockchain, Ai/ML",
    icon: blockchainIcon,
    bg: "#e9fbff",
    border: "#00c4ff",
  },
  {
    title: "DevOps & Low-Code",
    icon: devopsIcon,
    bg: "#faf7ff",
    border: "#c59dff",
  },
  {
    title: "E-commerce & CMS",
    icon: ecommerceIcon,
    bg: "#ffe1e1",
    border: "#ff8f8f",
  },
];

const TechnologySection = () => {
  return (
    <section className="tech-section">
      <h2 className="tech-title">Our Diverse Technology Competency</h2>
      <p className="tech-subtitle">
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
        Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since
      </p>

      <div className="tech-grid">
        {/* Grouped Technology Cards */}
        <div className="tech-group">
          {techData.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="tech-card"
              style={{
                background: item.bg,
                borderBottom: `6px solid ${item.border}`,
              }}
            >
              <img src={item.icon} alt={item.title} className="tech-icon" />
              <h3 className="tech-card-title">{item.title}</h3>
              <p className="tech-skills">
                .NET | C/C++ | DJANGO | Firebase | GOLANG <br />
                SYMFONY | LARAVEL | NODE | PHP | PYTHON <br />
                RUBY ON RAILS | JAVA
              </p>
            </div>
          ))}
        </div>

        <div className="tech-group">
          {techData.slice(3, 6).map((item, index) => (
            <div
              key={index}
              className="tech-card"
              style={{
                background: item.bg,
                borderBottom: `6px solid ${item.border}`,
              }}
            >
              <img src={item.icon} alt={item.title} className="tech-icon" />
              <h3 className="tech-card-title">{item.title}</h3>
              <p className="tech-skills">
                .NET | C/C++ | DJANGO | Firebase | GOLANG <br />
                SYMFONY | LARAVEL | NODE | PHP | PYTHON <br />
                RUBY ON RAILS | JAVA
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
