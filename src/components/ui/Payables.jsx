import React from "react";

const Payables = () => {
  return (
    <>
      <section className="w-full max-w-[570px]">
        <h1 className="text-white text-[32px] md:text-[36px] capitalize font-semibold">
          payable & owning
        </h1>
        <div>
          <div className="capitalize text-white pt-4 pl-1 font-normal text-[18px]">
            <p>invoices payable to you</p>
          </div>
          <div className="border flex capitalize text-white text-[16px] justify-between border-[#ffff]/20 rounded-2xl mt-2 p-4 bg-[#ffff]/5 backdrop-blur-md w-full">
            <p>due</p>
            <p>$563,854.25</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payables;
