import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Chart from "chart.js/auto";
import { statCards } from "../../constants";

const Stats = () => {
  const chartRefs = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    statCards.forEach((card, index) => {
      const ctx = chartRefs.current[index].getContext("2d");
      destroyChart(ctx);
      createChart(ctx, card.title);
    });
  }, []);

  const destroyChart = (ctx) => {
    const chart = Chart.getChart(ctx);
    if (chart) {
      chart.destroy();
    }
  };

  const createChart = (ctx, title) => {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: title,
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: "rgba(0, 102, 208, 0.2)",
            borderColor: "rgba(0, 102, 208, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  return (
    <section className="py-10" data-aos="fade-up">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
        {statCards.map((card, index) => (
          <div
            key={index}
            className="border border-[#ffff]/20 rounded-2xl p-5 space-y-6 bg-[#ffff]/5 backdrop-blur-md w-full max-w-[300px]"
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
            <canvas
              ref={(ref) => (chartRefs.current[index] = ref)}
              width="70"
              height="50"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
