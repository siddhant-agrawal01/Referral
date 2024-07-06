import { useState } from "react";
import music from "../assets/music.png";


const FAQ = () => {
  const [activeTab, setActiveTab] = useState("Eligibility");

  const tabs = ["Eligibility", "How To Use?", "Terms & Conditions"];

  const questions = {
    Eligibility: [
      {
        question:
          "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
        answer:
          "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
      },
      {
        question: "What is the minimum system configuration required?",
        answer:
          "Details on system configuration will be provided during the enrollment process.",
      },
    ],
    "How To Use?": [
      {
        question: "How can I access the program materials?",
        answer:
          "Program materials can be accessed through our online portal after enrollment.",
      },
    ],
    "Terms & Conditions": [
      {
        question: "What is the refund policy?",
        answer:
          "You can request a refund within the first 30 days of enrollment.",
      },
    ],
  };

  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-800 border border-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        {questions[activeTab].map((q, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              {q.question}
            </h2>
            <p className="text-gray-700">{q.answer}</p>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r h-48 mx-60 my-20  px-20 from-blue-500 to-blue-600 text-white rounded-lg  flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0 flex pt-20">
          <div className="    w-20 h-20 lg:w-40 lg:h-40">
           
            <img src={music} alt="music" className=" z-10" />
          </div>
          <div className="pt-2">
          <h2 className="text-3xl font-bold">
            Want to delve deeper into the program?
          </h2>
          <p>
            Share your details to receive expert insights from our program team!
          </p>
          </div>
        </div>
        <button className="bg-white font-bold text-blue-500 px-16 py-3 text-xl rounded-lg">
          Get in touch
        </button>
       
      </div>
    </div>
  );
};

export default FAQ;
