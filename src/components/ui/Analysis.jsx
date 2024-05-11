import React from "react";
import CashFlow from "./CashFlow";
import ProfitLoss from "./ProfitLoss";

const Analysis = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 place-items-center justify-items-center py-3">
      <div className="w-full max-w-[580px]">
        <CashFlow />
      </div>
      <div className="w-full max-w-[580px]">
        <ProfitLoss />
      </div>
    </section>
  );
};

export default Analysis;
