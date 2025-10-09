import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router";

const AppCard = ({ app }) => {
  // console.log(app);

  const navigate = useNavigate();
  const { image, title, downloads, ratingAvg, id } = app;
  return (
    <div
      onClick={() => navigate(`/app/${id}`)}
      className="flex flex-col p-4 shadow-xl bg-white rounded-sm transform transition duration-300 ease-in-out hover:scale-105"
    >
      <img className="w-full h-86 object-cover rounded-lg" src={image} alt="" />
      <h3 className="text-xl font-bold my-2 flex-1">{title}</h3>
      <div className="flex justify-between">
        <span className="flex items-center gap-1 text-green-500 rounded-sm bg-[#F1F5E8] px-2">
          <FontAwesomeIcon icon={faDownload} className="text-sm" />
          <p>
            {downloads >= 1000000
              ? (downloads / 1000000).toFixed(1) + "M"
              : downloads >= 1000
              ? (downloads / 1000).toFixed(1) + "K"
              : downloads}
          </p>
        </span>
        <span className="flex items-center gap-1 text-orange-500 bg-[#FFF0E1] px-2 rounded-sm">
          <FontAwesomeIcon icon={faStar} className="text-sm" />
          <p>{ratingAvg}</p>
        </span>
      </div>
    </div>
  );
};

export default AppCard;
