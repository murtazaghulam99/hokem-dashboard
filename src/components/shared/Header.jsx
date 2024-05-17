import React from "react";
import { motion } from "framer-motion";
import Search from "../ui/Search";
import Calender from "../ui/Calender";
import Notifications from "../ui/Notifications";
import Messages from "../ui/Messages";
import Profile from "../ui/Profile";

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section>
      <div className="lg:flex justify-between lg:space-x-5 xl:space-x-0 items-center">
        <div className="">
          <motion.h1
            className="capitalize text-white font-semibold text-[30px] xl:text-[48px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            overview
          </motion.h1>
        </div>
        <motion.div
          className="flex md:flex-row flex-col space-x-2 xl:space-x-6 items-center lg:pt-0 pt-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Search />
          <div className="flex flex-row md:mt-0 mt-5 space-x-3">
            <Calender />
            <Notifications />
            <Messages />
            <Profile />
          </div>
        </motion.div>
      </div>
      <div className="mt-7 border-b-[1px] border-[#ffff]/15"></div>
    </section>
  );
};

export default Header;
