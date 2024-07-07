// import referral from "../assets/referral.png"; // Adjust the path as needed
// import ReferralModal from "./ReferralModal";
// import { useState } from "react";

// const ReferralProcess = () => {
//   const [modalOpen, setModalOpen] = useState(false);

//   const steps = [
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-16 w-16 md:h-24 md:w-24 mb-2"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
//         </svg>
//       ),
//       text: "Submit referrals easily via our website's referral section.",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-16 w-16 md:h-24 md:w-24 mb-2"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
//           <path
//             fillRule="evenodd"
//             d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//       text: "Earn rewards once your referral joins an Accredian program.",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-16 w-16 md:h-24 md:w-24 mb-2"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
//           <path
//             fillRule="evenodd"
//             d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//       text: "Both parties receive a bonus 30 days after program enrollment.",
//     },
//   ];

//   return (
//     <div className="max-w-full mx-auto py-10 bg-blue-50 my-24">
//       <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-black">
//         How Do I <span className="text-blue-500">Refer?</span>
//       </h2>
//       <div className="relative">
//         <img
//           src={referral}
//           alt="Referral process"
//           className="mx-auto hidden lg:block"
//         />

//         <div className="absolute top-0 left-0 right-0 bottom-0 hidden lg:block">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className={`absolute flex flex-col items-center text-center w-48`}
//               style={{ ...getPositionStyle(index) }}
//             >
//               <div className="text-blue-600">{step.icon}</div>
//               <p className="text-xs md:text-sm">{step.text}</p>
//             </div>
//           ))}
//         </div>

//         {/* Mobile View */}
//         <div className="lg:hidden flex flex-col items-center space-y-8">
//           {steps.map((step, index) => (
//             <div key={index} className="text-center w-36 md:w-48">
//               <div className="text-blue-600 flex justify-center">
//                 {step.icon}
//               </div>
//               <p className="text-xs md:text-sm">{step.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="text-center mt-12">
//         <button
//           onClick={() => setModalOpen(true)}
//           className="bg-blue-600 text-white px-10 md:px-20 text-sm md:text-xl py-3 md:py-5 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
//         >
//           Refer Now
//         </button>
//         <ReferralModal
//           open={modalOpen}
//           handleClose={() => setModalOpen(false)}
//         />
//       </div>
//     </div>
//   );
// };

// const getPositionStyle = (index) => {
//   const baseStyle = {
//     position: "absolute",
//     top: "50%",
//     transform: "translateY(-50%)",
//   };

//   switch (index) {
//     case 0:
//       return { ...baseStyle, left: "25%" };
//     case 1:
//       return {
//         ...baseStyle,
//         left: "50%",
//         transform: "translate(-50%, -50%)",
//       };
//     case 2:
//       return { ...baseStyle, right: "25%" };
//     default:
//       return baseStyle;
//   }
// };

// export default ReferralProcess;
import referral from "../assets/referral.png"; // Adjust the path as needed
import ReferralModal from "./ReferralModal";
import { useState } from "react";

const ReferralProcess = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const steps = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 md:h-24 md:w-24 mb-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
        </svg>
      ),
      text: "Submit referrals easily via our website's referral section.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 md:h-24 md:w-24 mb-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clipRule="evenodd"
          />
        </svg>
      ),
      text: "Earn rewards once your referral joins an Accredian program.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 md:h-24 md:w-24 mb-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path
            fillRule="evenodd"
            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
            clipRule="evenodd"
          />
        </svg>
      ),
      text: "Both parties receive a bonus 30 days after program enrollment.",
    },
  ];

  return (
    <div className="max-w-full mx-auto py-10 bg-blue-50 my-24">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-black">
        How Do I <span className="text-blue-500">Refer?</span>
      </h2>
      <div className="relative">
        <img
          src={referral}
          alt="Referral process"
          className="mx-auto hidden lg:block"
        />

        <div className="absolute top-0 left-0 right-0 bottom-0 hidden lg:block">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`absolute flex flex-col items-center text-center w-48`}
              style={{ ...getPositionStyle(index) }}
            >
              <div className="text-blue-600">{step.icon}</div>
              <p className="text-xs md:text-sm">{step.text}</p>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden flex flex-col items-center space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center w-36 md:w-48">
              <div className="text-blue-600 flex justify-center">
                {step.icon}
              </div>
              <p className="text-xs md:text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-10 md:px-20 text-sm md:text-xl py-3 md:py-5 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
        >
          Refer Now
        </button>
        <ReferralModal
          open={modalOpen}
          handleClose={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
};

const getPositionStyle = (index) => {
  const baseStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  };

  switch (index) {
    case 0:
      return { ...baseStyle, left: "25%" };
    case 1:
      return {
        ...baseStyle,
        left: "50%",
        transform: "translate(-50%, -50%)",
      };
    case 2:
      return { ...baseStyle, right: "25%" };
    default:
      return baseStyle;
  }
};

export default ReferralProcess;
