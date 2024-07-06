import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FAQ from "./components/FAQ";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TopOverlay from "./components/TopOverlay";
import FloatingNavbar from "./components/FloatingNavbar";
import ReferralBenefits from "./components/ReferralBenefits";
import ReferralProcess from "./components/ReferralProcess";
// import { useState } from "react";
// import ReferralModal from "./components/ReferralModal";

const App = () => {
  // const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <TopOverlay />
      <Header />
      <FloatingNavbar />
      <HeroSection />
      <ReferralProcess />
      <ReferralBenefits />
      <FAQ />
      {/* <Contact />/ */}
      <Footer />
      {/* <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Refer Now
      </button> */}
      {/* <ReferralModal open={modalOpen} handleClose={() => setModalOpen(false)} /> */}
    </div>
  );
};

export default App;
