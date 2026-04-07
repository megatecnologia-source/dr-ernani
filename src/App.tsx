import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";

const Specialties = lazy(() => import("./components/Specialties"));
const ForWhom = lazy(() => import("./components/ForWhom"));
const About = lazy(() => import("./components/About"));
const Results = lazy(() => import("./components/Results"));
const Locations = lazy(() => import("./components/Locations"));
const ResultsGallery = lazy(() => import("./components/ResultsGallery"));
const FAQ = lazy(() => import("./components/FAQ"));
const Footer = lazy(() => import("./components/Footer"));
const FloatingActions = lazy(() => import("./components/FloatingActions"));

export default function App() {
  return (
    <div className="bg-[#0A1A2F] min-h-screen text-[#F8FAFC]">
      <Navbar />
      <Hero />
      <Ticker />
      <Suspense fallback={null}>
        <Specialties />
        <ForWhom />
        <About />
        <Results />
        <Locations />
        <ResultsGallery />
        <FAQ />
        <Footer />
        <FloatingActions />
      </Suspense>
    </div>
  );
}
