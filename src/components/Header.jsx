import { useState } from "react";
import ReferralModal from "./ReferralModal";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-blue-600">accredian</div>
          <div className="hidden sm:block text-sm text-gray-500">
            credentials that matter
          </div>
        </div>
        <nav className="hidden lg:flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
            >
              Courses <span className="ml-2">&#x25BC;</span>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white z-40 shadow-md rounded-md">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Course 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Course 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Course 3
                </a>
              </div>
            )}
          </div>
          {/* <a href="#" className="text-gray-700">
            Refer & Earn
          </a> */}
          <a
            href="#"
            onClick={() => setModalOpen(true)}
            className=" text-gray-700"
          >
            Refer & Earn
          </a>
          <ReferralModal
            open={modalOpen}
            handleClose={() => setModalOpen(false)}
          />

          <a href="#" className="text-gray-700">
            Resources
          </a>
          <a href="#" className="text-gray-700">
            About Us
          </a>
          <a
            href="#"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md"
          >
            Login
          </a>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Try for free
          </a>
        </nav>
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Courses
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Refer & Earn
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Resources
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            About Us
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Login
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Try for free
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
