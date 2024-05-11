import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Search from "../ui/Search";
import Calender from "../ui/Calender";
import Notifications from "../ui/Notifications";
import Messages from "../ui/Messages";
import Profile from "../ui/Profile";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section data-aos="fade-down">
      <div className="lg:flex justify-between lg:space-x-5 xl:space-x-0 border-b-[1px] border-[#ffff]/20 items-center">
        <div className="pb-4" data-aos="fade-right">
          <h1 className="capitalize text-white font-semibold text-[30px] xl:text-[48px]">
            overview
          </h1>
        </div>
        <div className="flex md:flex-row flex-col pb-4 space-x-2 xl:space-x-6 items-center">
          <Search  />
          <div className="flex flex-row md:mt-0 mt-5 space-x-3">
            <Calender />
            <Notifications  />
            <Messages />
            <Profile  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
