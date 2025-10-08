import React from "react";
import useAppsData from "../Hooks/useAppData";
import AppCard from "../components/AppCard/AppCard";

const Apps = () => {
  const appData = useAppsData();
  const { apps } = appData;

  return (
    <div className="py-10">
      <h1 className=" text-center font-bold text-5xl mb-3 text-[#001931]">
        Trending Apps
      </h1>
      <p className="text-[#627382] text-center text-xl">
        Explore All Trending Apps on the Market developed by us
      </p>
 {/* border-gradient-to-r from-[#632ee3] to-[#9f62f2] */}
 {/* border-[#632ee3] */}
        <div className="px-5 md:px-25 lg:px-25 mt-10 flex justify-between items-center">
            <h1 className="text-2xl font-bold">({apps.length}) Apps Found</h1>
            <input className="border-2  border-[#632ee3] px-5 py-2 outline-[#9f62f2]" type="search" placeholder="Search here" />
        </div>


      <div className="px-5 md:px-25 lg:px-25  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {apps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
