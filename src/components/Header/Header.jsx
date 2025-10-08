import React, { useState } from "react";
import Git from "../../assets/image.png";
import Logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import './Header.css'

const navColor =
  "relative hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text hover:text-transparent ";
const navUnderlineHover =
  "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] transition-all duration-300 group-hover:w-full";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className=" px-1 md:px-10 flex justify-between items-center py-5 border-b-3 bg-white border-gray-100 ">
      <div className="flex items-center">
        <span className="md:hidden flex items-center" onClick={() => setOpen(!open)}>
          {open ? <X></X> : <Menu></Menu>}

          <ul className={`absolute flex flex-col gap-5 ${open? 'top-15': '-top-50' } bg-white p-2`}>
            <li className="group">
              <NavLink to="/">
                Home
                <span className={navUnderlineHover}></span>
              </NavLink>
            </li>

            <li className="group">
              <NavLink to="/apps" className={navColor}>
                Apps
                <span className={navUnderlineHover}></span>
              </NavLink>
            </li>
            <li className="group">
              <NavLink to="/installation" className={navColor}>
                Installations
                <span className={navUnderlineHover}></span>
              </NavLink>
            </li>
          </ul>
        </span>

        <span
          onClick={() => navigate("/")}
          className="flex items-center gap-1 cursor-pointer ml-2"
        >
          <img className="w-[32px] " src={Logo} alt="" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Peakly.IO
          </h1>
        </span>
      </div>



      <nav className="hidden lg:flex">
        <ul className="flex items-center gap-5">
          <li className="group">
            <NavLink to="/" className={navColor}>
              Home
              <span className={navUnderlineHover}></span>
            </NavLink>
          </li>

          <li className="group">
            <NavLink to="/apps" className={navColor}>
              Apps
              <span className={navUnderlineHover}></span>
            </NavLink>
          </li>

          <li className="group">
            <NavLink to="/installation" className={navColor}>
              Installations
              <span className={navUnderlineHover}></span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-2 py-1 text-white cursor-pointer">
        <a href="https://github.com/aktar86/" target="blank">
          <span className="flex items-center">
            <img
              className="invert brightness-0 w-[24px]"
              src={Git}
              alt="Git logo Icon"
            />
            <span className="ml-1">Contribute</span>
          </span>
        </a>
      </button>
    </div>
  );
};

export default Header;

