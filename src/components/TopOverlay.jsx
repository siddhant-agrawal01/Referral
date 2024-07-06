import { useState } from "react";
import ReferralModal from "./ReferralModal";

const TopOverlay = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full bg-blue-100 p-4 flex justify-center items-center">
      <span className="text-gray-800 mx-4">
        Navigate your ideal career path with tailored expert advice
      </span>
      {/* <button className="text-blue-500 hover:text-blue-700 transition duration-300">
        Contact expert
      </button> */}
      <button
        onClick={() => setModalOpen(true)}
        className="text-blue-500 hover:text-blue-700 transition duration-300"
      >
        Contact expert
      </button>
      <ReferralModal open={modalOpen} handleClose={() => setModalOpen(false)} />
    </div>
  );
};

export default TopOverlay;
