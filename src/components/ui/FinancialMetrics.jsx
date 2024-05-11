import React from "react";
import NetIncome from "./NetIncome";
import Payables from "./Payables";

const FinancialMetrics = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center py-5">
      <div className="w-full max-w-[570px]">
        <NetIncome />
      </div>
      <div className="w-full max-w-[570px]">
        <Payables />
      </div>
    </section>
  );
};

export default FinancialMetrics;
