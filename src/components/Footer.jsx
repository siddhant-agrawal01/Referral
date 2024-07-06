

import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import phone from "../assets/phone.png"; // Adjust the path as needed

import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-neutral-800 text-white p-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Upper Part */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-700 pb-4 mb-4">
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <h1 className="text-3xl font-bold">accredian</h1>
            <p className="text-xs">credentials that matter</p>
          </div>
          <div className="text-center lg:text-right">
            <button className="bg-blue-500 border-solid border-2 border-white text-lg text-white px-4 py-2 rounded-lg">
              Schedule 1-on-1 Call Now
            </button>
            <p className="text-sm mt-2">Speak with our Learning Advisor</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col mb-8 lg:mb-0">
            <h2 className="text-lg font-semibold">Programs</h2>
            <ul className="space-y-2 mt-4">
              <li>
                <a href="#" className="hover:underline">
                  Data Science & AI
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Product Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Business Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Business Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Project Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Strategy & Leadership
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Senior Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Fintech
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col mb-8 lg:mb-0">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <ul className="mt-4 space-y-2">
              <li>
                Email us (For Data Science Queries):{" "}
                <a
                  href="mailto:admissions@accredian.com"
                  className="hover:underline"
                >
                  admissions@accredian.com
                </a>
              </li>
              <li>
                Email us (For Product Management Queries):{" "}
                <a href="mailto:pm@accredian.com" className="hover:underline">
                  pm@accredian.com
                </a>
              </li>
              <li>
                Data Science Admission Helpline:{" "}
                <a href="tel:+919079653929" className="hover:underline">
                  +91 9079653929
                </a>{" "}
                (9 AM - 7 PM)
              </li>
              <li>
                Product Management Admission Helpline:{" "}
                <a href="tel:+919625811095" className="hover:underline">
                  +91 9625811095
                </a>
              </li>
              <li>
                Enrolled Student Helpline:{" "}
                <a href="tel:+917969322507" className="hover:underline">
                  +91 7969322507
                </a>
              </li>
              <li>
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
                18, Gurugram, Haryana 122015
              </li>
              <li>
                <a href="#" className="text-lg">
                  Why Accredian
                </a>
              </li>
              <li>
                <p className="text-lg">Follow us</p>
                <div className="flex space-x-4 py-2">
                  <a
                    href="https://facebook.com"
                    className="hover:text-blue-500"
                  >
                    <IoLogoFacebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://instagram.com"
                    className="px-4 hover:text-pink-500"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </a>
                  <a href="https://x.com" className="hover:text-blue-400">
                    <FaSquareXTwitter className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="px-4 hover:text-blue-700"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                  <a href="https://youtube.com" className="hover:text-red-500">
                    <FaYoutube className="h-6 w-6" />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col mb-8 lg:mb-0">
            <h2 className="text-lg font-semibold">Accredian</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Admission Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Referral Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms Of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Master FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center border-t border-gray-700 pt-4">
      
          <div className="text-sm text-center lg:text-left">
            &copy; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All
            Rights Reserved
          </div>
          <a
            href="#"
            className="absolute right-0 mx-10 w-16 h-16 lg:mb-20 "
            style={{ backgroundImage: `url(${phone})` }}
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
