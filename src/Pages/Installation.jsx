import React, { useEffect, useState } from "react";
import InstalledAppList from "../components/InstalledAppList/InstalledAppList";
import { toast } from "react-toastify";

const Installation = () => {
  const [installation, setInstallation] = useState([]);
  const [sortOrder, setSortOrder] = useState('none')

  // console.log(installation);

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

const sortedApps = () => {
  if(sortOrder === 'size-asc'){
    return [...installation].sort((a,b) => a.size - b.size);
  }
  else if(sortOrder === 'size-dece'){
    return [...installation].sort((a,b) => b.size - a.size);
  }
  else{
    return installation;
  }
}
sortedApps()

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
          <span>{sortedApps().length}</span> Apps Found{" "}
        </h1>
        <label className="form-control outline-0 w-full max-w-xs">
          <select 
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
          className="select border border-[#632ee3] outline-0 font-bold">
            <option value="none">Sort by Size</option>
            <option value="size-asc">Low-&gt;High</option>
            <option value="size-dece">High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-5 px-5 mt-5 lg:px-10 ">
        {sortedApps().map((app) => (
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
