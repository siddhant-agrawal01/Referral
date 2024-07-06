// import { useState } from "react";
// import axios from "axios";

// const ReferralModal = ({ open, handleClose }) => {
//   const [formData, setFormData] = useState({
//     referrerName: "",
//     referrerEmail: "",
//     refereeName: "",
//     refereeEmail: "",
//   });

  
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Add form validation here

//     // Send data to backend
//     try {
//       await axios.post("http://localhost:5000/referrals", formData);
//       handleClose();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div
//       className={`fixed z-10 inset-0 overflow-y-auto ${!open && "hidden"}`}
//       aria-labelledby="modal-title"
//       role="dialog"
//       aria-modal="true"
//     >
//       <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//         <div
//           className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
//           aria-hidden="true"
//         ></div>
//         <span
//           className="hidden sm:inline-block sm:align-middle sm:h-screen"
//           aria-hidden="true"
//         >
//           &#8203;
//         </span>
//         <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//           <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//             <div className="sm:flex sm:items-start">
//               <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
//                 <h3
//                   className="text-lg leading-6 font-medium text-gray-900"
//                   id="modal-title"
//                 >
//                   Refer a Friend
//                 </h3>
//                 <div className="mt-2">
//                   <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                       <label
//                         className="block text-gray-700 text-sm font-bold mb-2"
//                         htmlFor="referrerName"
//                       >
//                         Your Name
//                       </label>
//                       <input
//                         id="referrerName"
//                         name="referrerName"
//                         type="text"
//                         value={formData.referrerName}
//                         onChange={handleChange}
//                         required
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label
//                         className="block text-gray-700 text-sm font-bold mb-2"
//                         htmlFor="referrerEmail"
//                       >
//                         Your Email
//                       </label>
//                       <input
//                         id="referrerEmail"
//                         name="referrerEmail"
//                         type="email"
//                         value={formData.referrerEmail}
//                         onChange={handleChange}
//                         required
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label
//                         className="block text-gray-700 text-sm font-bold mb-2"
//                         htmlFor="refereeName"
//                       >
//                         Friend&apos;s Name
//                       </label>
//                       <input
//                         id="refereeName"
//                         name="refereeName"
//                         type="text"
//                         value={formData.refereeName}
//                         onChange={handleChange}
//                         required
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label
//                         className="block text-gray-700 text-sm font-bold mb-2"
//                         htmlFor="refereeEmail"
//                       >
//                         Friend&apos;s Email
//                       </label>
//                       <input
//                         id="refereeEmail"
//                         name="refereeEmail"
//                         type="email"
//                         value={formData.refereeEmail}
//                         onChange={handleChange}
//                         required
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                       />
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <button
//                         type="submit"
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//             <button
//               type="button"
//               className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
//               onClick={handleClose}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReferralModal;


import  { useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";


import axios from 'axios';

// eslint-disable-next-line react/prop-types
const ReferralModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/referrals', formData);
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSuccessClose = () => {
    setSuccess(false);
    handleClose();
  };

  return (
    <div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
          <button
            className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            onClick={handleClose}
          >
            <IoIosCloseCircle className='h-6 w-6' />

          </button>
            <h2 className="text-xl mb-4">Refer a Friend</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="referrerName"
                  value={formData.referrerName}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Your Email</label>
                <input
                  type="email"
                  name="referrerEmail"
                  value={formData.referrerEmail}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Friend&aps;s Name</label>
                <input
                  type="text"
                  name="refereeName"
                  value={formData.refereeName}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Friend&apos;s Email</label>
                <input
                  type="email"
                  name="refereeEmail"
                  value={formData.refereeEmail}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-green-500 p-6 rounded-lg shadow-lg text-white text-center animate-bounce w-80">
            <h2 className="text-xl mb-4">Success!</h2>
            <p>Your referral has been submitted.</p>
            <p>Check your email for confirmation.</p>
            <button
              onClick={handleSuccessClose}
              className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferralModal;
