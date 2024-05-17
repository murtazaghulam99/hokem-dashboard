import React from "react";
import { motion } from "framer-motion";

const Payables = () => {
  return (
    <>
      <motion.section
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-white text-[32px] md:text-[36px] capitalize font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          payable & owning
        </motion.h1>
        <div>
          <motion.div
            className="capitalize text-white pt-4 pl-1 font-normal text-[18px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>invoices payable to you</p>
          </motion.div>
          <motion.div
            className="border flex capitalize text-white text-[16px] justify-between border-[#ffff]/20 rounded-2xl mt-2 p-4 bg-[#ffff]/5 backdrop-blur-md w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p>due</p>
            <p>$563,854.25</p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Payables;
