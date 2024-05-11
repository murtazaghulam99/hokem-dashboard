import React from "react";
import Header from "./shared/Header";
import Stats from "./ui/Stats";
import Analysis from "./ui/Analysis";
import FinancialMetrics from "./ui/FinancialMetrics";

const Dashboard = () => {
  return (
    <>
      <section className="flex-grow py-4 px-2 lg:px-10 md:mr-4 md:my-5 scrollbar-hide overflow-y-auto bg-[url('./assets/background.png')] bg-no-repeat rounded-3xl bg-cover bg-center h-screen">
        <Header />
        <Stats />
        <Analysis />
        <FinancialMetrics />
      </section>
    </>
  );
};

export default Dashboard;
