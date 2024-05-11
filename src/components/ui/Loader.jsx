import React from "react";

const Loader = () => {
  return (
    <>
      <div className="flex items-center h-screen w-screen justify-center space-x-8 bg-[#191f3f]] mx-auto">
        <div className="absolute z-10 flex justify-center items-center">
          <div className="c-test c-01 z-30 absolute border-2 rounded-full "></div>
          <div className="c-test c-02 z-20 absolute border-2 rounded-full "></div>
          <div className="c-test c-03 z-10 absolute border-2 rounded-full"></div>
          <div className="c-test c-04 z-0 absolute border-2 rounded-full "></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
