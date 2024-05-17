import React, { useEffect } from "react";
import CashFlow from "./CashFlow";
import ProfitLoss from "./ProfitLoss";

const Analysis = () => {

  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-y-0 gap-y-5 place-items-center justify-items-center py-1">
      <CashFlow />
      <ProfitLoss />
    </section>
  );
};

export default Analysis;
