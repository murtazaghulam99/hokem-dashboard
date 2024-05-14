import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { barcharts, ellipseblue } from "../../assets";
import { linechartData } from "../../constants";

const ProfitLoss = () => {
  const [activeTab, setActiveTab] = useState("Nov 20");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="xl:max-w-[650px] w-full">
      <div className="flex justify-between md:flex-row flex-col items-center pb-2">
        <h1 className="text-white text-[32px] md:text-[36px] md:my-0 my-4 font-medium capitalize">
          Profit & loss
        </h1>
        <form>
          <select
            id="report"
            defaultValue="report"
            className="bg-[#0066D0] hover:bg-[#0066D0]/90 transition-colors capitalize cursor-pointer border-0 text-white md:text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full mr-4 px-4 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>view report</option>
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
      <h5 className="capitalize text-white md:text-[18px] pt-3">
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
      <div className="border border-[#ffff]/20 rounded-2xl p-4 space-y-6 bg-[#ffff]/5 backdrop-blur-md w-full md:h-[263px] mt-5">
        <div className="flex justify-between md:flex-row flex-col items-end">
          <div className="flex flex-col">
            <h1 className="text-[50px] font-extrabold flex items-center text-[#0066D0]">
              192{" "}
              <span className="text-[16px] pl-2 text-white font-normal">
                +12%
              </span>
            </h1>
            <p className="text-[16px] text-white font-normal pl-1">
              Inflow Today
            </p>
          </div>
          <LineChart
            width={330}
            height={100}
            data={linechartData}
            margin={{ top: 5, right: 5, left: 4, bottom: 0 }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            {/* <XAxis dataKey="name" /> */}
            {/* <YAxis /> */}
            <Tooltip />
            {/* <Legend /> */}
            <Line type="monotone" dataKey="pv" stroke="#0066D0" />
            <Line type="monotone" dataKey="uv" stroke="#4060A9" />
          </LineChart>
        </div>
        <div className="flex justify-between md:flex-row flex-col items-center md:items-end md:space-x-5 pt-2 md:pt-6">
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
          <div className="w-full md:mb-0 mb-2 md:mt-0 mt-6">
            <div className="relative right-0">
              <ul
                className="relative flex flex-wrap items-center p-1 list-none space-x-1"
                data-tabs="tabs"
                role="list"
              >
                {["Nov 20", "Dec 20", "Jan 20", "Feb 20", "March 20"].map(
                  (tab, index) => (
                    <li key={index} className="z-30 flex-auto text-center">
                      <a
                        onClick={() => handleTabClick(tab)}
                        className={`z-30 flex items-center ${
                          tab === activeTab
                            ? "bg-[#0066D0]"
                            : "hover:bg-[#0066D0]"
                        } justify-center w-full mb-0 transition-all ease-in-out border-0 rounded-3xl cursor-pointer text-white py-1`}
                        data-tab-target=""
                        active
                        role="tab"
                        aria-selected={tab === activeTab ? "true" : "false"}
                      >
                        <span className="ml-0 text-[11px]">{tab}</span>
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
