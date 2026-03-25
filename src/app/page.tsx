import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Products from "../components/Products";
import Solutions from "../components/Solutions";
import About from "../components/About";
import Feedbacks from "../components/Feedbacks";
import Legal from "../components/Legal";
import FinalCTA from "../components/FinalCTA";
import CRMCarousel from "../components/CRMCarousel";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Products />
        <Feedbacks />
        <Solutions />
        <About />
        <Legal />
        <FinalCTA />
      </main>
      <CRMCarousel />
      <Footer />
    </div>
  );
}
