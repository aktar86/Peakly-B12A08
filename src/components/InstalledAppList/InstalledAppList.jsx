import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InstalledAppList = ({ app, handleUninstall }) => {
  const {id, image, title, downloads, ratingAvg, size } = app;
  return (
    <div className="flex justify-between  gap-5 items-center bg-white rounded-lg p-3">
      <div className="flex flex-1 gap-5">
        <img className="w-32 h-32 object-cover rounded-xl" src={image} />
        <div>
          <h1 className="font-bold text-3xl mb-2 ">{title}</h1>
          <div className="flex gap-5 ">
            <p className="text-green-500">
              <FontAwesomeIcon icon={faDownload} />
              {downloads >= 1000000
                ? (downloads / 1000000).toFixed(1) + "M"
                : downloads >= 1000
                ? (downloads / 1000).toFixed(1) + "K"
                : downloads}
            </p>
            <p className="text-orange-500">
                <FontAwesomeIcon icon={faStar}/>
                {ratingAvg}
                </p>
            <p>{size >= 1024 
                ? (size/1024).toFixed(1) + "GB"
                : size}MB</p>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => handleUninstall(id)} className="w-40 p-2 bg-green-400 text-white text-xl ">Uninstall</button>
      </div>
    </div>
  );
};

export default InstalledAppList;
