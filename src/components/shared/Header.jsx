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
      easing: "ease-in-out",
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
          <Search data-aos="fade-left" />
          <div className="flex flex-row md:mt-0 mt-5 md:space-x-0 space-x-3">
            <Calender data-aos="fade-left" />
            <Notifications data-aos="fade-left" />
            <Messages data-aos="fade-left" />
            <Profile data-aos="fade-left" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
