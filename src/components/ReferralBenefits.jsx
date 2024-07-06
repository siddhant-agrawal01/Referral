import { useState } from "react";
import ReferralModal from "./ReferralModal";

const ReferralBenefits = () => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-[90%] md:w-[80%] mx-auto mt-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        What Are The <span className="text-blue-600">Referral Benefits?</span>
      </h2>
      <div className="flex justify-between mb-2 md:mb-4">
        <span className="text-lg md:text-xl font-bold"></span>
        <label className="flex items-center space-x-2">
          <span className="text-gray-600 text-sm md:text-base">Enrolled</span>
          <input
            type="checkbox"
            checked={isEnrolled}
            onChange={() => setIsEnrolled(!isEnrolled)}
            className="form-checkbox h-4 w-4 md:h-5 md:w-5 text-blue-600"
          />
        </label>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4">
          <div className="bg-blue-600 text-white font-bold p-2 md:p-4 rounded-t-lg">
            ALL PROGRAMS
          </div>
          <ul className="bg-gray-100 rounded-b-lg">
            {[
              "PRODUCT MANAGEMENT",
              "STRATEGY & LEADERSHIP",
              "BUSINESS MANAGEMENT",
              "FINTECH",
              "SENIOR MANAGEMENT",
              "DATA SCIENCE",
              "DIGITAL TRANSFORMATION",
              "BUSINESS ANALYTICS",
            ].map((category) => (
              <li
                key={category}
                className="p-2 md:p-4 border-b border-gray-300"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-3/4 md:pl-8 mt-4 md:mt-0">
          <table className="w-full bg-white rounded-lg shadow text-sm md:text-base">
            <thead>
              <tr className="bg-blue-200">
                <th className="p-2 md:p-4 text-blue-900 text-left">Programs</th>
                <th className="p-2 md:p-4 text-blue-900 text-left">
                  Referrer Bonus
                </th>
                <th className="p-2 md:p-4 text-blue-900 text-left">
                  Referee Bonus
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  program:
                    "Professional Certificate Program in Product Management",
                  referrer: "₹ 7,000",
                  referee: "₹ 9,000",
                },
                {
                  program:
                    "PG Certificate Program in Strategic Product Management",
                  referrer: "₹ 9,000",
                  referee: "₹ 11,000",
                },
                {
                  program:
                    "Executive Program in Data Driven Product Management",
                  referrer: "₹ 10,000",
                  referee: "₹ 10,000",
                },
                {
                  program:
                    "Executive Program in Product Management and Digital Transformation",
                  referrer: "₹ 10,000",
                  referee: "₹ 10,000",
                },
                {
                  program: "Executive Program in Product Management",
                  referrer: "₹ 10,000",
                  referee: "₹ 10,000",
                },
                {
                  program: "Advanced Certification in Product Management",
                  referrer: "₹ 10,000",
                  referee: "₹ 10,000",
                },
                {
                  program:
                    "Executive Program in Product Management and Project Management",
                  referrer: "₹ 10,000",
                  referee: "₹ 10,000",
                },
              ].map(({ program, referrer, referee }) => (
                <tr key={program} className="border-t border-gray-300">
                  <td className="p-2 md:p-4">{program}</td>
                  <td className="p-2 md:p-4">{referrer}</td>
                  <td className="p-2 md:p-4">{referee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center mt-6 md:mt-8">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-12 py-3 md:px-20 md:py-5 text-base md:text-xl rounded-md"
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

export default ReferralBenefits;
