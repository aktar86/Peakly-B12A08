import React, { useState, useEffect } from "react";
import useAppsData from "../Hooks/useAppData";
import AppCard from "../components/AppCard/AppCard";
import AppNotFound from "../components/AppNotFound/AppNotFound";

const Apps = () => {
  const { apps, loading } = useAppsData();
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [appLoading, setAppLoading] = useState(false);


  useEffect(() => {
    setFilteredApps(apps);
  }, [apps]);

 
  useEffect(() => {
    setAppLoading(true);

    const timer = setTimeout(() => {
      const trimmedSearch = search.trim().toLowerCase();
      const filtered = trimmedSearch
        ? apps.filter((app) => app.title.toLowerCase().includes(trimmedSearch))
        : apps;

      setFilteredApps(filtered);
      setAppLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, [search, apps]);

  return (
    <div>
      {loading ? (
        <span className="flex justify-center items-center min-h-screen">
          <div
            className="radial-progress"
            style={{
              "--value": "70",
              "--size": "12rem",
              "--thickness": "2rem",
            }}
            aria-valuenow={70}
            role="progressbar"
          >
            70%
          </div>
        </span>
      ) : (
        <div className="py-10">
          <h1 className="text-center font-bold text-5xl mb-3 text-[#001931]">
            Our All Applications
          </h1>
          <p className="text-[#627382] text-center text-xl">
            Explore all trending apps on the market developed by us
          </p>

          <div className="px-5 md:px-25 lg:px-25 mt-10 flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              ({filteredApps.length}) Apps Found
            </h1>
            <div className="flex flex-col">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-2 border-[#632ee3] px-5 py-2 outline-[#9f62f2]"
                type="search"
                placeholder="Search here"
              /> 
            </div>
          </div>
          <div>
            {appLoading && (
                <div className="flex justify-center items-center mt-2 min-h-screen">
                  <div
                    className="radial-progress"
                    style={{
                      "--value": "70",
                      "--size": "3rem",
                      "--thickness": "0.5rem",
                    }}
                    aria-valuenow={70}
                    role="progressbar"
                  >
                    70%
                  </div>
                </div>
              )}
          </div>

          <div className="px-5 md:px-25 lg:px-25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
            {filteredApps.length > 0 ? (
              filteredApps.map((app) => <AppCard key={app.id} app={app} />)
            ) : (
              <div className="col-span-full flex flex-col justify-center items-center">
                <h1 className="text-5xl mb-5 font-bold">No App Found</h1>
                <a
                  className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-10 py-2 text-xl text-white font-bold mt-5"
                  href="/"
                >
                  Go Back
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Apps;
