import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAppsData from "../../Hooks/useAppData";
import DownloadIcon from "../../assets/cloud-download.png";
import StarIcon from "../../assets/star.png";
import ReviewIcon from "../../assets/review.png";
import ChartData from "../ChartData/ChartData";
import AppNotFound from "../AppNotFound/AppNotFound";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const [install, setInstall] = useState(false);
  const { apps } = useAppsData();
  const appData = apps.find((a) => a.id === Number(id));

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("installation")) || [];
    const found = saved.find((app) => app.id === Number(id));
    if (found) {
      setInstall(true);
    }
  }, [id]);

  if (!appData) {
    return <AppNotFound />;
  }

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    description,
    size,
    ratings,
  } = appData;

  const barChartData = ratings;

  const installBtnhandler = () => {
    const existingAppData =
      JSON.parse(localStorage.getItem("installation")) || [];

    const isDuplicate = existingAppData.some((p) => p.id === appData.id);
    if (isDuplicate) {
      return toast.error("Sorry! Your app is already installed", {
        position: "top-center",
        autoClose: 2000,
        style: {
          background: "#fff",
          color: "#ff4d4f",
          fontWeight: "bold",
        },
        progressStyle: {
          background: "#ff4d4f",
        },
      });
    }

    if (install) return;

    const updatedApps = [...existingAppData, appData];
    localStorage.setItem("installation", JSON.stringify(updatedApps));
    setInstall(true);

    toast.success("Yoo! App Installed Successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      style: {
        background: "#fff",
        color: "#632EE3",
        fontWeight: "bold",
      },
      progressStyle: {
        background: "#632EE3",
      },
    });
  };

  return (
    <div className="lg:px-25 mt-10">
      {/* app details card */}
      <div className="flex flex-col lg:flex-row gap-10 bg-white p-5">
        <div>
          <img className="h-64 w-86 object-cover" src={image} alt={title} />
        </div>
        <div className="flex-1">
          <div className="border-b-3 pb-2 border-gray-200 max-w-full">
            <h1 className="font-bold text-2xl">{title}</h1>
            <p>
              Developed by{" "}
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 mt-5">
            <div className="space-y-1">
              <img src={DownloadIcon} alt="Download icon" />
              <p>Downloads</p>
              <h1 className="font-extrabold text-2xl text-[#001931]">
                {downloads >= 1000000
                  ? (downloads / 1000000).toFixed(1) + "M"
                  : downloads >= 1000
                  ? (downloads / 1000).toFixed(1) + "K"
                  : downloads}
              </h1>
            </div>
            <div className="space-y-1">
              <img src={StarIcon} alt="Star icon" />
              <p>Average Ratings</p>
              <h1 className="font-extrabold text-2xl text-[#001931]">
                {ratingAvg}
              </h1>
            </div>
            <div className="space-y-1">
              <img src={ReviewIcon} alt="Review icon" />
              <p>Total Reviews</p>
              <h1 className="font-extrabold text-2xl text-[#001931]">
                {reviews}
              </h1>
            </div>
          </div>

          <div className="mt-3">
            <button
              onClick={installBtnhandler}
              className="py-2 px-5 text-white text-xl rounded-sm cursor-pointer bg-[#00D390]"
            >
              {install ? "Installed " : `Install Now (${size})`}
            </button>
          </div>
        </div>
      </div>

      {/* recharts Section */}
      <div className="bg-white p-5 mt-10">
        <ChartData barChartData={barChartData}></ChartData>
      </div>

      {/* description */}
      <div className="my-10 bg-white p-5">
        <h3 className="font-bold text-xl mb-2">Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
