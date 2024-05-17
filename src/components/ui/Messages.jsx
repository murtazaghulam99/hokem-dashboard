import React, { useState, useRef, useEffect } from "react";
import { messages } from "../../assets";
import { messagesList } from "../../constants";
import { motion } from "framer-motion";

const Messages = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <motion.div
      className="relative"
      ref={dropdownRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="w-[48px] h-[48px] cursor-pointer hover:bg-[#191f3f]/50 transition-colors bg-[#ffff]/5 backdrop-blur-md border border-[#fff]/20 rounded-full flex items-center justify-center"
        onClick={toggleDropdown}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img src={messages} className="w-[21.49px] h-[21.49px]" alt="" />
      </motion.div>
      {isDropdownOpen && (
        <motion.div
          className="absolute top-full right-[-1rem] md:right-0 mt-1 w-52 md:w-72 bg-white border border-gray-200 shadow-lg rounded-lg z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          ref={dropdownRef}
        >
          <div className="py-2 px-3 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Messages</h2>
          </div>
          <div className="overflow-y-auto max-h-60">
            {messagesList.map((msg) => (
              <div
                key={msg.id}
                className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Messages;
