import { useState } from "react";

const FloatingNavbar = () => {
  const [activeLink, setActiveLink] = useState("Refer");

  return (
    <div className=" bg-blue-100 rounded-full shadow-lg px-4 py-2 pt-4 flex justify-around space-x-4 overflow-x-auto whitespace-nowrap text-xl my-4 max-w-3xl sm:max-w-5xl mx-auto   ">
      {["Refer", "Benefits", "FAQs", "Support"].map((link) => (
        <a
          key={link}
          href="#"
          className={`text-gray-700 px-2 ${
            activeLink === link ? "text-blue-600" : ""
          }`}
          onClick={() => setActiveLink(link)}
        >
          {link}
          {activeLink === link && (
            <span className="block h-1 w-1 bg-blue-600 rounded-full mx-auto mt-1"></span>
          )}
        </a>
      ))}
    </div>
  );
};

export default FloatingNavbar;
