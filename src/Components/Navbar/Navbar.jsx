import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [openDropdown, setOpenDropdown] = useState(null); // Dropdown state
  const dropdownRef = useRef(null); // Ref for detecting outside clicks

  const menuItems = [
    
    {
      name: "Cards",
      subMenu: [
        { name: "Thred Carse Card", link: "/thredCarseCard" },
        { name: "Anymeted Card", link: "/anymetedCard" },
      ],
    },
    {
      name: "Button",
      subMenu: [
        { name: "Animeted Button", link: "/animetedButton" },
        { name: "Mobile Apps", link: "/mobile-apps" },
      ],
    },
    {
      name: "Slider",
      subMenu: [
        { name: "Swiper Landing", link: "/swiperLanding" },
        { name: "Slider Swiper", link: "/navMenu" },
      ],
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gray-800 shadow-md px-6 py-3">
      {/* Mobile Menu */}
      <div className="flex justify-between items-center">
        {/* Brand Logo */}
        <Link className="text-2xl font-bold text-blue-600 hover:text-blue-500 transition-colors" to="/">
          Brand
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 w-full bg-gray-800 shadow-md rounded-lg p-3 mt-3 z-50"
          >
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-gray-700 last:border-none">
                {item.subMenu ? (
                  <>
                    <button
                      className="w-full flex justify-between items-center p-3 text-lg font-semibold text-white hover:bg-gray-700 rounded-md transition-colors"
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                      aria-expanded={openDropdown === index}
                    >
                      {item.name}
                      <motion.span
                        animate={{ rotate: openDropdown === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        ▼
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {openDropdown === index && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="p-5 bg-gray-700 rounded-md overflow-hidden"
                        >
                          {item.subMenu.map((sub, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={sub.link}
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenDropdown(null);
                                }}
                                className="block p-3 text-gray-300 hover:bg-gray-600 rounded-md transition-colors"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                    className="block p-3 text-lg font-semibold text-white hover:bg-gray-700 rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;