import React, { useState, useEffect } from "react";
import { barcharts, comparisionlineschart, ellipseblue } from "../../assets";
import AOS from "aos";
import "aos/dist/aos.css";

const ProfitLoss = () => {
  const [activeTab, setActiveTab] = useState("Nov 20");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="w-full max-w-[580px]"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex justify-between items-center pb-2">
        <h1 className="text-white text-[36px] font-medium capitalize">
          Profit & loss
        </h1>
        <form className="">
          <select
            id="report"
            className="bg-[#0066D0] hover:bg-[#0066D0]/90 transition-colors capitalize cursor-pointer border-0 text-white text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full mr-4 px-4 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>view report</option>
            <option className="bg-[#0066D0]/30" value="report">
              view report
            </option>
            <option className="bg-[#0066D0]/30" value="report">
              view report
            </option>
            <option className="bg-[#0066D0]/30" value="report">
              view report
            </option>
          </select>
        </form>
      </div>
      <h5 className="capitalize text-white text-[18px] pt-3">
        income and expenses (including unpaid bills & invoices)
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
      </div>
      <div className="border border-[#ffff]/20 rounded-2xl p-4 space-y-6 bg-[#ffff]/5 backdrop-blur-md w-full h-[263px] mt-5">
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <h1 className="text-[48px] font-extrabold flex items-center text-[#0066D0]">
              192{" "}
              <span className="text-[16px] pl-2 text-white font-normal">
                +12%
              </span>
            </h1>
            <p className="text-[16px] text-white font-normal pl-1">
              Inflow Today
            </p>
          </div>
          <img
            src={comparisionlineschart}
            className="w-full max-w-[320px] h-[100px]"
            alt=""
          />
        </div>
        <div className="flex justify-between items-end space-x-5 pt-5">
          <div className="flex space-x-7">
            <div className="flex flex-col">
              <img src={barcharts} className="w-[78px] h-[27px]" alt="" />
              <h1 className="font-bold text-[26px] text-white pt-1">$1,806</h1>
            </div>
            <div className="flex flex-col">
              <img src={barcharts} className="w-[78px] h-[27px]" alt="" />
              <h1 className="font-bold text-[26px] text-white pt-1">$1,806</h1>
            </div>
          </div>
          <div class="w-full">
            <div class="relative right-0">
              <ul
                class="relative flex flex-wrap items-center p-1 list-none space-x-1"
                data-tabs="tabs"
                role="list"
              >
                {["Nov 20", "Dec 20", "Jan 20", "Feb 20", "March 20"].map(
                  (tab, index) => (
                    <li key={index} class="z-30 flex-auto text-center">
                      <a
                        onClick={() => handleTabClick(tab)}
                        class={`z-30 flex items-center ${
                          tab === activeTab
                            ? "bg-[#0066D0]"
                            : "hover:bg-[#0066D0]"
                        } justify-center w-full mb-0 transition-all ease-in-out border-0 rounded-3xl cursor-pointer text-white py-1.5`}
                        data-tab-target=""
                        active
                        role="tab"
                        aria-selected={tab === activeTab ? "true" : "false"}
                      >
                        <span class="ml-1 text-[11px]">{tab}</span>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitLoss;
