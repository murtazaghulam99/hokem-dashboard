import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { graph } from "../../assets";
import { statCards } from "../../constants";

const Stats = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="py-10" data-aos="fade-up">
      <div className="grid grid-cols-1 sm:grid-cols-2 :grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
        {statCards.map((card, index) => (
          <div
            key={index}
            className="border border-[#ffff]/20 rounded-2xl p-5 space-y-6 bg-[#ffff]/5 backdrop-blur-md w-full max-w-[300px]"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-between">
              <div className="flex space-x-2 items-center">
                <img src={card.icon} className="w-[25px] h-[25px]" alt="" />
                <h6 className="font-semibold text-white text-[17px]">
                  {card.title}
                </h6>
              </div>
              <div className="bg-[#ffff]/10 rounded-lg flex items-center justify-center text-center w-[60px] h-[35px]">
                <p className="font-normal text-white text-[17px]">+17%</p>
              </div>
            </div>
            <h2 className="text-white font-semibold text-[36px]">$56,674</h2>
            <img src={graph} className="w-[166px] h-[42px]" alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
