import HeroImage from "../assets/Anniversary.png"; 
// import backgroundImage from "../assets/money.png"; 
import backgroundImage2 from "../assets/money2.png"; 
import backgroundImage3 from "../assets/money3.png"; 
import backgroundImage4 from "../assets/money4.png"; 
import backgroundImage5 from "../assets/money5.png"; 
import ReferralModal from "./ReferralModal";
import { useState } from "react";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative bg-blue-50 flex flex-col lg:flex-row items-center justify-center rounded-3xl shadow-2xl w-[90%] lg:w-[70%] h-full mx-auto p-4 lg:p-8 my-8">
      <div className="flex flex-col items-start justify-center w-full lg:w-1/2 p-4 lg:p-8">
        <div className="relative w-full lg:w-1/2 flex items-center justify-center">
          {/* <div
            className="absolute bottom-0 left-0 w-20 h-20 lg:w-40 lg:h-40 bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div> */}
        </div>
        <h1 className="text-4xl lg:text-8xl font-bold text-gray-800">
          Let&apos;s Learn & Earn
        </h1>
        <p className="mt-4 text-xl lg:text-4xl lg:font-medium text-gray-600">
          Get a chance to win up-to{" "}
          <span className="text-blue-600">Rs. 15,000</span>
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 text-xl rounded"
        >
          Refer Now
        </button>
        <ReferralModal open={modalOpen} handleClose={() => setModalOpen(false)} />
      </div>
      <div className="relative hidden lg:flex w-full lg:w-1/2 items-center justify-center">
        <img src={HeroImage} alt="Hero" className="relative z-10" />
        <div
          className="absolute top-0 w-20 h-20 lg:w-40 lg:h-40 left-20 lg:left-40 bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage5})` }}
        ></div>
        <div
          className="absolute bottom-8 left-3 z-20 w-20 h-20 lg:w-40 lg:h-40 bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage2})` }}
        ></div>
        <div
          className="absolute bottom-32 right-0 w-20 h-20 lg:w-40 lg:h-40 bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage3})` }}
        ></div>
        <div
          className="absolute top-0 right-0 w-20 h-20 lg:w-40 lg:h-40 bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage4})` }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
