import React from "react";
import Header from "./shared/Header";
import Stats from "./ui/Stats";
import Analysis from "./ui/Analysis";
import FinancialMetrics from "./ui/FinancialMetrics";

const Dashboard = () => {
  return (
    <>
      <section className="flex-grow py-4 px-10 mr-4 my-5 scrollbar-hide overflow-y-auto bg-[url('./assets/background.png')] bg-no-repeat bg-cover h-screen">
        <Header />
        <Stats />
        <Analysis />
        <FinancialMetrics />
      </section>
    </>
  );
};

export default Dashboard;
