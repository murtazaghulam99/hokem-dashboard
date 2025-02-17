import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { motion } from "framer-motion";
import { statCards } from "../../constants";

const Stats = () => {
  const chartRefs = useRef([]);

  useEffect(() => {
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
      type: "line",
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
            ticks: {
              color: "white",
            },
          },
          x: {
            ticks: {
              color: "white",
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "white",
            },
          },
        },
      },
    });
  };

  return (
    <motion.section
      className="py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-y-0 gap-y-3 gap-x-2 xl:grid-cols-4 place-items-center">
        {statCards.map((card, index) => (
          <motion.div
            key={index}
            className="border border-[#ffff]/20 rounded-2xl p-4 space-y-2 bg-[#ffff]/5 backdrop-blur-md w-full md:max-w-[370px] max-w-[300px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
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
            <h2 className="text-white font-semibold text-[32px]">$56,674</h2>
            <canvas
              ref={(ref) => (chartRefs.current[index] = ref)}
              className="w-full max-w-[240px]"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Stats;
