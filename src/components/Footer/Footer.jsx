import Logo from "../../assets/logo.png";
import Twitter from "../../assets/twitter.png";
import LinkedIn from "../../assets/linkedin.png";
import Facebook from "../../assets/communication.png";

import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:px-10 px-5  py-10  text-[#5192cf]  bg-[#001931]">
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
        <div className="lg:col-span-2">
          <span
            onClick={() => navigate("/")}
            className="flex items-center gap-1 cursor-pointer"
          >
            <img className="w-[32px] " src={Logo} alt="" />
            <h1 className="text-2xl ml-2 font-bold">Peakly.IO</h1>
          </span>
          <p className="my-5">
            Explore and install top apps easily. Discover trending, new, and
            popular apps in one place. Enjoy a fast, smooth, and user-friendly
            experience built for convenience and creativity.
          </p>
          <a className=" hover:text-blue-300" href="/">
            Read More...
          </a>
        </div>
        {/* Discover */}
        <div className="border-l border-[#5192cf] pl-5">
          <h1 className="font-bold text-2xl mb-3">Discover</h1>
          <ul className="space-y-3">
            <li>
              <a href="/">Buy and Sell</a>
            </li>
            <li>
              <a href="/">Merchent</a>
            </li>
            <li>
              <a href="/">Giving Back</a>
            </li>
            <li>
              <a href="/">Help and Support</a>
            </li>
          </ul>
        </div>
        {/* About */}
        <div className="border-l border-[#5192cf] pl-5">
          <h1 className="font-bold text-2xl mb-3">About</h1>
          <ul className="space-y-3">
            <li>
              <a href="/">Staff</a>
            </li>
            <li>
              <a href="/">Team</a>
            </li>
            <li>
              <a href="/">careers</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
        {/* Resources */}
        <div className="border-l border-[#5192cf] pl-5">
          <h1 className="font-bold text-2xl mb-3">Resources</h1>
          <ul className="space-y-3">
            <li>
              <a href="/">Security</a>
            </li>
            <li>
              <a href="/">Global</a>
            </li>
            <li>
              <a href="/">Charts</a>
            </li>
            <li>
              <a href="/">Privecy</a>
            </li>
          </ul>
        </div>
        {/* social */}
        <div className="flex flex-col md:items-start justify-start border-l border-[#5192cf] pl-5">
          <h3 className="font-bold text-xl mb-2">Social Links</h3>
          <div className="space-y-5">
            <span className="flex gap-4 items-center">
              {/* <img src={Twitter} alt="X" /> */}
              <p>Twitter</p>
            </span>
            <span className="flex gap-4 ">
              {/* <img src={LinkedIn} alt="LinkdIn" /> */}
              <p>LindedIn</p>
            </span>
            <span className="flex gap-4 ">
              {/* <img src={Facebook} alt="Facebook" /> */}
              <p>Facebook</p>
            </span>
          </div>
        </div>
      </div>
      {/* Copyright text here */}
      <div>
        <p className="text-[#5192cf] text-center mt-10 border-y border-[#5192cf] py-5">
          Copyright © 2025 - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

<div className=" flex justify-between items-center border-b pb-2 border-b-gray-100 ">
  {/* Social Icon  */}
  <div>
    <h3 className="font-bold text-xl mb-2">Social Links</h3>
    <div className="flex gap-4 ">
      <img src={Twitter} alt="X" />
      <img src={LinkedIn} alt="LinkdIn" />
      <img src={Facebook} alt="Facebook" />
    </div>
  </div>
</div>;
