import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";

// UPPER SECTION (Why Hire + Technologies)
import HireSection from "./components/HireSection";
import TechnologySection from "./components/TechnologySection";
import WhyHireSection from "./components/WhyHireSection";
import TopCompaniesSection from "./components/TopCompaniesSection";
import OurHiringProcess from "./components/OurHiringProcess";

// MID SECTION (Software + How We Work + Steps + Testimonials)
// import HowWeWorkSection from "./components/HowWeWorkSection";
// import StepsSection from "./components/StepsSection";
import TestimonialSection from "./components/TestimonialSection";

// LOWER SECTION (Top Companies + Footer)
import Footer from "./components/Footer";
import UserGuide from "./components/UserGuide";
// import OurHiringProcess from "./components/OurHiringProcess";

function App() {
  return (
    <>
      {/* Header + Hero */}
      <Header />
      <Hero />

      {/* WHY HIRE INDIA DEVELOPERS */}
      <HireSection />

      {/* TECHNOLOGY STACK */}
      <TechnologySection />
      <WhyHireSection />
      <TopCompaniesSection />

      {/* SOFTWARE SERVICES */}
      <OurHiringProcess />

      {/* HOW WE WORK */}
      <UserGuide />

      {/* STEPS SECTION */}
      {/* <StepsSection /> */}

      {/* TESTIMONIALS */}
      <TestimonialSection />

      {/* TOP COMPANIES TRUST SECTION */}

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
