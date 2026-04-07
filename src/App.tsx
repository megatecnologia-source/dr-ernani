import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Specialties from "./components/Specialties";
import ForWhom from "./components/ForWhom";
import About from "./components/About";
import Results from "./components/Results";
import Locations from "./components/Locations";
import ResultsGallery from "./components/ResultsGallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  return (
    <div className="bg-[#0A1A2F] min-h-screen text-[#F8FAFC]">
      <Navbar />
      <Hero />
      <Ticker />
      <Specialties />
      <ForWhom />
      <About />
      <Results />
      <Locations />
      <ResultsGallery />
      <FAQ />
      <Footer />
      <FloatingActions />
    </div>
  );
}
