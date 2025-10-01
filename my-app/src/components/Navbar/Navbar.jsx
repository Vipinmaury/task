import React, { useState } from "react";
import mainlogo from "../../assets/mainlogo.gif";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Domestic", submenu: ["Option 1", "Option 2", "Option 3"] },
    { name: "International", submenu: ["Option 1", "Option 2", "Option 3"] },
    { name: "Place", submenu: ["Option 1", "Option 2", "Option 3"] },
    { name: "Packages", submenu: ["Option 1", "Option 2", "Option 3"] },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 text-white shadow-xl px-6 py-6 flex items-center justify-between">
        {/* Logo overlapping */}
        <div className="absolute -top-6 left-6 mt-10">
          <img src={mainlogo} alt="Logo" className="h-28 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="flex-1 hidden md:flex justify-center space-x-10 text-white font-medium">
          <li>
            <a
              href="#"
              className="hover:text-black transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-black transition-colors duration-300"
            >
              About Us
            </a>
          </li>

          {/* Dropdown menus */}
          {menuItems.map((item, idx) => (
            <li key={idx} className="relative group">
              <a
                href="#"
                className="flex items-center hover:text-black transition-colors duration-300"
              >
                {item.name}
              </a>
              <ul className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
                {item.submenu.map((sub, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-sky-100 hover:to-blue-100 hover:text-black transition-all duration-300"
                    >
                      {sub}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li>
            <a
              href="#"
              className="hover:text-black transition-colors duration-300"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-black transition-colors duration-300"
            >
              Pay Now
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white focus:outline-none text-2xl hover:text-black transition-colors duration-300"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-sky-50 to-blue-50 shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-between items-center p-4 border-b border-blue-200">
          <img src={mainlogo} alt="Logo" className="h-12 w-auto" />
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 text-2xl hover:text-black transition-colors duration-300"
          >
            ✕
          </button>
        </div>

        {/* Menu list */}
        <ul className="flex flex-col mt-4 space-y-2 text-gray-700 font-medium px-4">
          <li>
            <a
              href="#"
              className="block py-2 hover:text-black transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 hover:text-black transition-colors duration-300"
            >
              About Us
            </a>
          </li>

          {/* Collapsible Dropdowns */}
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <details className="group">
                <summary className="cursor-pointer py-2 hover:text-black transition-colors duration-300">
                  {item.name}
                </summary>
                <ul className="ml-4 mt-1 space-y-1">
                  {item.submenu.map((sub, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="block px-2 py-1 text-gray-600 hover:text-black transition-colors duration-300"
                      >
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}

          <li>
            <a
              href="#"
              className="block py-2 hover:text-black transition-colors duration-300"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 hover:text-black transition-colors duration-300"
            >
              Pay Now
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay when drawer is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </>
  );
};

export default Navbar;
