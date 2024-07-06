


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
      await axios.post('https://acrredian-backend.onrender.com/referrals', formData);
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
