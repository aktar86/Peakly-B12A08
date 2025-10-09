import React, { useEffect, useState } from "react";
import InstalledAppList from "../components/InstalledAppList/InstalledAppList";
import { toast } from "react-toastify";



const Installation = () => {
  const [installation, setInstallation] = useState([]);



  useEffect(() => {
    const saveAppData = JSON.parse(localStorage.getItem("installation"));
    if (saveAppData) {
      setInstallation(saveAppData);
    }
  }, []);

  const handleUninstall = (id) => {
    const saveAppData = JSON.parse(localStorage.getItem("installation")) || [];

    const remainingData = saveAppData.filter((app) => app.id !== id);
    localStorage.setItem("installation", JSON.stringify(remainingData));

    setInstallation(remainingData);

    toast.info("App Uninstalled", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      style: {
        background: "#fff",
        color: "#e11d48",
        fontWeight: "bold",
      },
      progressStyle: {
        background: "#e11d48",
      },
    });



  };




  return (
    <div className="lg:px-20 py-20">
      <div>
        <h1 className="text-[#001931] text-3xl md:text-5xl font-extrabold text-center">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] text-lg mt-3 md:text-xl text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between mt-10 px-5 md:p-10 md:px-10">
        <h1 className="font-bold text-xl">
          {" "}
          <span>{installation.length}</span> Apps Found{" "}
        </h1>
        <button>Sort</button>
      </div>
      <div className="space-y-5 px-5 mt-5 lg:px-10 ">
        {installation.map((app) => (
          <InstalledAppList
            key={app.id}
            app={app}
            handleUninstall={handleUninstall}
          ></InstalledAppList>
        ))}
      </div>
    </div>
  );
};

export default Installation;
