import React from "react";
import { motion } from "framer-motion";

const NetIncome = () => {
  return (
    <>
      <motion.section
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-white text-[32px] md:text-[36px] font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Net Income
        </motion.h1>
        <div>
          <motion.div
            className="flex capitalize text-white pt-5 px-3 font-medium text-[18px] justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>Year</p>
            <p>2021</p>
            <p>2022</p>
          </motion.div>
          <motion.div
            className="border flex capitalize text-white text-[16px] justify-between border-[#ffff]/20 rounded-2xl mt-1 p-4 bg-[#ffff]/5 backdrop-blur-md w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p>income</p>
            <p>$44,743.74</p>
            <p>$563,854.25</p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default NetIncome;
