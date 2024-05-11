import React, { useState, useEffect } from "react";
import { arrow, ellipseblue, ellipseyellow } from "../../assets";
import { gridData, tabs } from "../../constants";
import AOS from "aos";
import "aos/dist/aos.css";

const CashFlow = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="w-full max-w-[580px]" data-aos="fade-up">
      <div className="flex justify-between items-center pb-2">
        <h1 className="text-white text-[30px] xl:text-[36px] font-medium capitalize">
          cash flow
        </h1>
        <div className="flex items-center gap-x-3">
          <form className="">
            <select
              id="months"
              className="bg-[#0066D0] hover:bg-[#0066D0]/90 transition-colors cursor-pointer border-0 text-white text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full mr-4 px-4 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>1-6 months</option>
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
              id="report"
              className="bg-[#0066D0] hover:bg-[#0066D0]/90 transition-colors cursor-pointer border-0 text-white text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full mr-4 px-4 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>View Report</option>
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
      </div>
      <h5 className="capitalize text-white text-[18px] pt-3">
        cash coming in and out of your business
      </h5>
      <div className="flex text-white space-x-7 justify-start pt-2 items-center">
        <div className="flex space-x-3 items-center">
          <img src={ellipseblue} className="w-[15px] h-[15px]" alt="" />
          <p>Inflow</p>
        </div>
        <div className="flex space-x-3 items-center">
          <img src={ellipseblue} className="w-[15px] h-[15px]" alt="" />
          <p>Outflow</p>
        </div>
        <div className="flex space-x-3 items-center">
          <img src={ellipseyellow} className="w-[15px] h-[15px]" alt="" />
          <p>Net Changes</p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 py-5 space-x-5">
        {gridData.map((item, index) => (
          <div
            key={index}
            className="border flex flex-col text-white space-y-2 items-center justify-center text-center border-[#ffff]/20 rounded-2xl p-5 bg-[#ffff]/5 backdrop-blur-md h-[172px] w-[172px]"
            data-aos="fade-up"
          >
            <img src={arrow} className={`w-3 h-3 ${item.imageClass}`} alt="" />
            <p className="text-md">{item.label}</p>
            <p className="font-semibold text-[24px]">{item.amount}</p>
          </div>
        ))}
      </div>
      <div className="w-full">
        <div className="relative right-0">
          <ul
            className="relative flex flex-wrap p-1 list-none space-x-4"
            data-tabs="tabs"
            role="list"
          >
            {tabs.map((tab, index) => (
              <li key={index} className="z-30 flex-auto text-center">
                <a
                  className={`${
                    activeTab === index ? "bg-[#0066D0]" : "hover:bg-[#0066D0]"
                  } flex items-center justify-center w-full mb-0 transition-all ease-in-out border-0 rounded-3xl cursor-pointer text-white py-2`}
                  onClick={() => handleTabClick(index)}
                  role="tab"
                  aria-selected={activeTab === index ? "true" : "false"}
                >
                  <span className="ml-1">{tab}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CashFlow;
