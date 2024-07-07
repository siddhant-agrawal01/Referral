

// import music from "../assets/music.png";

// import  { useState } from 'react';

// const FAQ = () => {
//   const [selectedOption, setSelectedOption] = useState('Eligibility');
//   const [expandedQuestion, setExpandedQuestion] = useState(0);

//   const sidebarOptions = ['Eligibility', 'How To Use?', 'Terms & Conditions'];
//   const faqItems = [
//     {
//       question: 'Do I need to have prior Product Management and Project Management experience to enroll in the program?',
//       answer: 'No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.'
//     },
//     {
//       question: 'What is the minimum system configuration required?',
//       answer: ''
//     }
//   ];

//   return (
//     <>
//     <div>
//         <h1 className="text-3xl font-bold pt-20 text-center mb-8">
//         Frequently Asked <span className='text-blue-500'>Questions</span>
//       </h1>
//     </div>
//     <div className="flex justify-around">
//       {/* Sidebar */}
    
//       <div className="w-64  px-4 ml-40 py-24  ">
//         {sidebarOptions.map((option, index) => (
//           <button
//             key={index}
//             className={`w-full  p-2 mb-4 py-5 text-center rounded-lg ${
//               selectedOption === option
//                 ? ' text-blue-500 shadow-2xl shadow-gray-400'
//                 : 'bg-white  border-2 border-gray-500'
//             }`}
//             onClick={() => setSelectedOption(option)}
//           >
//             {option}
//           </button>
//         ))}
//       </div>

//       {/* Main content */}
//       <div className="flex-1 px-20 py-24 ">
//         {faqItems.map((item, index) => (
//           <div key={index} className="mb-4">
//             <button
//               className="flex justify-between items-center w-full p-4 "
//               onClick={() => setExpandedQuestion(index === expandedQuestion ? -1 : index)}
//             >
//               <span className="font-semibold text-blue-500">{item.question}</span>
//               <span>{index === expandedQuestion ? '▲' : '▼'}</span>
//             </button>
//             {index === expandedQuestion && (
//               <div className="p-4 bg-white ">
//                 {item.answer}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>

//     <div className="bg-gradient-to-r h-48 mx-60  mb-28 px-20 from-blue-500 to-blue-600 text-white rounded-lg hidden sm:flex flex-col sm:flex-row justify-between items-center">
//          <div className="mb-4 sm:mb-0 flex pt-20">
// /           <div className="w-20 h-20 lg:w-40 lg:h-40">
//              <img src={music} alt="music" className="z-10" /> 
//            </div>
//            <div className="pt-2">
//              <h2 className="text-3xl font-bold">
//                Want to delve deeper into the program?
//              </h2>
//              <p>
//                Share your details to receive expert insights from our program
//                team!
//              </p>
//            </div>
//          </div>
//          <button className="bg-white font-bold text-blue-500 px-16 py-3 text-xl rounded-lg">
//            Get in touch
//          </button>
//      </div>

 


  
//   </>
//   );
// };

// export default FAQ;


import music from "../assets/music.png";
import { useState } from 'react';

const FAQ = () => {
  const [selectedOption, setSelectedOption] = useState('Eligibility');
  const [expandedQuestion, setExpandedQuestion] = useState(0);

  const sidebarOptions = ['Eligibility', 'How To Use?', 'Terms & Conditions'];
  const faqItems = [
    {
      question: 'Do I need to have prior Product Management and Project Management experience to enroll in the program?',
      answer: 'No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.'
    },
    {
      question: 'What is the minimum system configuration required?',
      answer: ''
    }
  ];

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold pt-20 text-center mb-8">
          Frequently Asked <span className='text-blue-500'>Questions</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-around">
        {/* Sidebar */}
        <div className="w-full md:w-64 px-4 ml-0 md:ml-40 py-6 md:py-24">
          {sidebarOptions.map((option, index) => (
            <button
              key={index}
              className={`w-full p-2 mb-4 py-5 text-center rounded-lg ${
                selectedOption === option
                  ? 'text-blue-500 shadow-2xl shadow-gray-400'
                  : 'bg-white border-2 border-gray-500'
              }`}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 px-4 md:px-20 py-6 md:py-24 hidden sm:block">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-4"
                onClick={() => setExpandedQuestion(index === expandedQuestion ? -1 : index)}
              >
                <span className="font-semibold text-blue-500">{item.question}</span>
                <span>{index === expandedQuestion ? '▲' : '▼'}</span>
              </button>
              {index === expandedQuestion && (
                <div className="p-4 bg-white">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r h-48 mx-4 md:mx-60 mb-28 px-20 from-blue-500 to-blue-600 text-white rounded-lg hidden md:flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 flex pt-6 md:pt-20">
          <div className="w-20 h-20 lg:w-40 lg:h-40">
            <img src={music} alt="music" className="z-10" />
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
    </>
  );
};

export default FAQ;
