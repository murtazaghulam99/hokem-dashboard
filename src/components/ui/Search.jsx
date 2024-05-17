import React from "react";
import { search } from "../../assets";
import { motion } from "framer-motion";

const Search = () => {
  return (
    <>
      <motion.div
        className="mx-auto w-full md:w-[250px] lg:w-[320px] xl:w-[380px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative flex items-center h-12 bg-[#ffff]/5 backdrop-blur-md border border-[#FFFFFF]/20 rounded-2xl overflow-hidden">
          <div className="grid place-items-center cursor-pointer h-full px-3">
            <img src={search} alt="" />
          </div>
          <motion.input
            className="peer h-full border-0 w-full font-light::placeholder outline-none bg-transparent text-sm text-white pr-2"
            type="search"
            id="search"
            placeholder="Search"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Search;
