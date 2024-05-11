import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/shared/Sidebar";
import Loader from "./components/ui/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="App flex h-screen">
            <Sidebar />
            <div className="ml-0 md:ml-52 xl:ml-64 flex-grow">
              <Dashboard />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
