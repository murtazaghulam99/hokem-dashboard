import React, { useState, useRef, useEffect } from "react";
import { messages } from "../../assets";
import { messagesList } from "../../constants";

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
    <div className="relative">
      <div
        className="w-[48px] h-[48px] cursor-pointer hover:bg-[#191f3f]/50 transition-colors bg-[#ffff]/5 backdrop-blur-md border border-[#fff]/20 rounded-full flex items-center justify-center"
        onClick={toggleDropdown}
      >
        <img src={messages} className="w-[21.49px] h-[21.49px]" alt="" />
      </div>
      {isDropdownOpen && (
        <div
          className="absolute top-full right-0 mt-1 w-72 bg-white border border-gray-200 shadow-lg rounded-lg z-10"
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
        </div>
      )}
    </div>
  );
};

export default Messages;
