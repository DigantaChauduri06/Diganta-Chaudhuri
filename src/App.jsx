import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { HashLoader } from "react-spinners";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { LoaderContext } from "./context/LoaderContext";

function App() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2500);
  }, []);

  return (
    <>
      {loader && (
        <div className="loader">
          <HashLoader color={"#EB1B4E"} loading={loader} size={100} />
        </div>
      )}

      {console.log(loader)}
      <div className={loader ? "none-display" : ""}>
        <LoaderContext.Provider value={{ loader, setLoader }}>
          <Navbar />
          <Outlet />
        </LoaderContext.Provider>
      </div>
    </>
  );
}

export default App;
