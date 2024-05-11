import React, { useState, useRef, useEffect } from "react";
import { chevrondown, profile } from "../../assets";
import { menuItems } from "../../constants";

const Profile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center cursor-pointer pl-2 xl:pl-5 space-x-1"
        onClick={toggleDropdown}
      >
        <img
          id="avatarButton"
          className="w-[48px] h-[48px] rounded-full"
          src={profile}
          alt="User dropdown"
        />
        <img src={chevrondown} className="w-6 h-6" alt="" />
      </div>
      {dropdownOpen && (
        <div
          id="userDropdown"
          className="absolute right-0 mt-2 z-[500] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div className="font-medium truncate">name@hokem.com</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="avatarButton"
          >
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
