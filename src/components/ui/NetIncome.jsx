import React from "react";

const NetIncome = () => {
  return (
    <>
      <section className="w-full max-w-[570px]">
        <h1 className="text-white text-[36px] font-semibold">Net Income</h1>
        <div>
          <div className="flex capitalize text-white pt-4 px-3 font-medium text-[18px] justify-between">
            <p>Year</p>
            <p>2021</p>
            <p>2022</p>
          </div>
          <div className="border flex capitalize text-white text-[16px] justify-between border-[#ffff]/20 rounded-2xl mt-1 p-4 bg-[#ffff]/5 backdrop-blur-md w-full">
            <p>income</p>
            <p>$44,743.74</p>
            <p>$563,854.25</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NetIncome;
