import React from "react";

const Trust = () => {
  return (
    <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-25 text-white">
      <h1 className="text-center text-6xl font-extrabold mb-10">Trusted by Millions, Built for You</h1>
      <div className="md:flex md:flex-row flex-col justify-center items-center gap-20">
        <div className="text-center mb-10 lg:mb-0">
          <p>Total Downloads</p>
          <h1 className="text-6xl font-extrabold">29.6M</h1>
          <p >21% More Than Last Month</p>
        </div>

        <div className="text-center  mb-10 lg:mb-0">
          <p>Total Reviews</p>
          <h1 className="text-6xl font-extrabold" >906k</h1>
          <p>46% More Than Last Month</p>
        </div>

        <div className="text-center mb-10 lg:mb-0">
          <p>Active Apps</p>
          <h1 className="text-6xl font-extrabold">132+</h1>
          <p>31 More Will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Trust;
