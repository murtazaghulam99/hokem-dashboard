import React, { useState } from "react";
import { motion } from "framer-motion";
import { arrow, ellipseblue, ellipseyellow } from "../../assets";
import { gridData, tabs } from "../../constants";

const CashFlow = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <motion.section
      className="xl:max-w-[740px] w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex justify-between md:flex-row flex-col items-center pb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-white text-[32px] xl:text-[36px] md:mb-0 mb-3 font-medium capitalize">
          cash flow
        </h1>
        <div className="flex items-center gap-x-3">
          <form className="">
            <select
              defaultValue="months"
              id="months"
              className="bg-[#0066D0] hover:bg-[#0066D0]/90 transition-colors cursor-pointer border-0 text-white md:text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full mr-4 px-4 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>1-6 months</option>
              <option className="bg-[#0066D0]/30" value="1-6 months">
                1-6 months
              </option>
              <option className="bg-[#0066D0]/30" value="1-6 months">
                1-6 months
              </option>
              <option className="bg-[#0066D0]/30" value="1-6 months">
                1-6 months
              </option>
              <option className="bg-[#0066D0]/30" value="1-6 months">
                1-6 months
              </option>
            </select>
          </form>
          <form className="">
            <select
              defaultValue="report"
              id="report"
              className="bg-[#0066D0] hover:bg-[#0066D0]/90 transition-colors cursor-pointer border-0 text-white md:text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full mr-4 px-4 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>View Report</option>
              <option className="bg-[#0066D0]/30" value="View Reports">
                View Report
              </option>
              <option className="bg-[#0066D0]/30" value="View Reports">
                View Report
              </option>
              <option className="bg-[#0066D0]/30" value="View Reports">
                View Report
              </option>
            </select>
          </form>
        </div>
      </motion.div>
      <motion.h5
        className="capitalize text-white md:text-[18px] pt-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        cash coming in and out of your business
      </motion.h5>
      <motion.div
        className="flex text-white space-x-2 md:space-x-7 justify-start pt-2 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex space-x-1 md:space-x-3 items-center">
          <img src={ellipseblue} className="w-[15px] h-[15px]" alt="" />
          <p>Inflow</p>
        </div>
        <div className="flex space-x-1 md:space-x-3 items-center">
          <img src={ellipseblue} className="w-[15px] h-[15px]" alt="" />
          <p>Outflow</p>
        </div>
        <div className="flex space-x-1 md:space-x-3 items-center">
          <img src={ellipseyellow} className="w-[15px] h-[15px]" alt="" />
          <p>Net Changes</p>
        </div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 place-items-center py-5 md:gap-x-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {gridData.map((item, index) => (
          <motion.div
            key={index}
            className="border lg:mb-0 mb-4 flex flex-col text-white space-y-2 items-center justify-center text-center border-[#ffff]/20 rounded-2xl p-5 bg-[#ffff]/5 backdrop-blur-md w-full max-w-[195px] h-[172px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.8 }}
          >
            <img src={arrow} className={`w-3 h-3 ${item.imageClass}`} alt="" />
            <p className="text-md">{item.label}</p>
            <p className="font-semibold text-[24px]">{item.amount}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="relative right-0">
          <ul
            className="relative flex flex-wrap p-0 md:p-1 list-none space-x-1 md:space-x-4"
            data-tabs="tabs"
            role="list"
          >
            {tabs.map((tab, index) => (
              <motion.li
                key={index}
                className="z-30 flex-auto md:text-md text-sm text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 1.2 }}
              >
                <a
                  className={`${
                    activeTab === index ? "bg-[#0066D0]" : "hover:bg-[#0066D0]"
                  } flex items-center justify-center w-full mb-0 transition-all ease-in-out border-0 rounded-3xl cursor-pointer text-white py-1 md:py-2`}
                  onClick={() => handleTabClick(index)}
                  role="tab"
                  aria-selected={activeTab === index ? "true" : "false"}
                >
                  <span className="ml-1">{tab}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CashFlow;
