import React, { useState } from "react";
import { motion } from "framer-motion";
import { logo, logout } from "../../assets";
import { navItems } from "../../constants";

const Sidebar = () => {
  const [activePath, setActivePath] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleItemClick = (path) => {
    setActivePath(path);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <section>
        <div className="hidden md:block">
          <aside className="fixed h-screen text-white w-42 xl:w-64 flex flex-col justify-between p-7">
            <div className="flex flex-col items-center justify-center pt-8">
              <img src={logo} className="w-full max-w-[140px]" alt="" />
              <motion.div
                className="flex flex-col items-start text-[16px] font-semibold pt-14 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className={`flex space-x-3 items-center transition-colors hover:text-blue-500 hover:bg-gray-800 hover:rounded-lg py-3 px-4 w-full ${
                      item.href === activePath
                        ? "border-[#0066D0] border-l-4"
                        : ""
                    }`}
                    onClick={() => handleItemClick(item.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <img src={item.icon} className="w-[22px] h-[22px]" alt="" />
                    <p>{item.text}</p>
                  </motion.a>
                ))}
              </motion.div>
            </div>
            <a
              href="#"
              className="flex space-x-3 text-[16px] font-semibold justify-center items-center transition-colors hover:text-blue-500 hover:bg-gray-800 rounded-lg py-3 px-4 w-full"
            >
              <img src={logout} className="w-[22px] h-[22px]" alt="" />
              <p>Logout</p>
            </a>
          </aside>
        </div>
        <div className="md:hidden block">
          <button
            className="fixed z-[500] top-4 right-4 text-white bg-gray-800 rounded-md p-2"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {isSidebarOpen && (
            <motion.aside
              className="fixed bg-[#00051b] h-screen text-white w-64 flex z-[50] flex-col justify-between p-7"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center justify-center pt-2 md:pt-8">
                <img src={logo} className="w-full max-w-[140px]" alt="" />
                <motion.div
                  className="flex flex-col items-start text-[16px] font-semibold pt-14 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {navItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className={`flex space-x-3 items-center transition-colors hover:text-blue-500 hover:bg-gray-800 hover:rounded-lg py-2 md:py-3 px-4 w-full ${
                        item.href === activePath
                          ? "border-[#0066D0] border-l-4"
                          : ""
                      }`}
                      onClick={() => handleItemClick(item.href)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <img
                        src={item.icon}
                        className="w-[22px] h-[22px]"
                        alt=""
                      />
                      <p>{item.text}</p>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
              <a
                href="#"
                className="flex space-x-3 text-[16px] font-semibold justify-center items-center transition-colors hover:text-blue-500 hover:bg-gray-800 rounded-lg py-3 px-4 w-full"
              >
                <img src={logout} className="w-[22px] h-[22px]" alt="" />
                <p>Logout</p>
              </a>
            </motion.aside>
          )}
        </div>
      </section>
    </>
  );
};

export default Sidebar;
