import React, { useState, useEffect } from "react";
import { logo, logout } from "../../assets";
import { navItems } from "../../constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Sidebar = () => {
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleItemClick = (path) => {
    setActivePath(path);
  };

  return (
    <aside className="fixed h-screen text-white w-64 flex flex-col justify-between p-7">
      <div className="flex flex-col items-center justify-center pt-8">
        <img
          src={logo}
          className="w-full max-w-[140px]"
          alt=""
          data-aos="fade-down"
        />
        <div className="flex flex-col items-start text-[16px] font-semibold pt-14 space-y-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`flex space-x-3 items-center transition-colors hover:text-blue-500 hover:bg-gray-800 hover:rounded-lg py-3 px-4 w-full ${
                item.href === activePath ? "border-[#0066D0] border-l-4" : ""
              }`}
              onClick={() => handleItemClick(item.href)}
              data-aos="fade-up"
            >
              <img src={item.icon} className="w-[22px] h-[22px]" alt="" />
              <p>{item.text}</p>
            </a>
          ))}
        </div>
      </div>
      <a
        href="#"
        className="flex space-x-3 text-[16px] font-semibold justify-center items-center transition-colors hover:text-blue-500 hover:bg-gray-800 rounded-lg py-3 px-4 w-full"
      >
        <img src={logout} className="w-[22px] h-[22px]" alt="" />
        <p>Logout</p>
      </a>
    </aside>
  );
};

export default Sidebar;
