import React from "react";
import { search } from "../../assets";

const Search = () => {
  return (
    <>
      <div className="mx-auto">
        <div className="relative flex items-center w-full xl:w-[420px] h-12 bg-[#ffff]/5 backdrop-blur-md border border-[#FFFFFF]/20 rounded-2xl overflow-hidden">
          <div className="grid place-items-center cursor-pointer h-full px-3">
            <img src={search} alt="" />
          </div>
          <input
            className="peer h-full border-0 w-full font-light::placeholder outline-none bg-transparent text-sm text-white pr-2"
            type="search"
            id="search"
            placeholder="Search"
          />
        </div>
      </div>
    </>
  );
};

export default Search;
