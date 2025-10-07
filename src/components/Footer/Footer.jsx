import Logo from "../../assets/logo.png";
import Twitter from "../../assets/twitter.png";
import LinkedIn from "../../assets/linkedin.png";
import Facebook from "../../assets/communication.png";

import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:px-10  py-10  text-white  bg-[#001931]"  >
      <div className=" flex justify-between items-center border-b pb-2 border-b-gray-100 ">
        <div>
          <span
            onClick={() => navigate("/")}
            className="flex items-center gap-1 cursor-pointer ml-2"
          >
            <img className="w-[32px] " src={Logo} alt="" />
            <h1 className="text-xl font-bold">Peakly.IO</h1>
          </span>
        </div>
        {/* Social Icon  */}
        <div>
          <h3 className="font-bold text-xl mb-2">Social Links</h3>
          <div className="flex gap-4 ">
            <img src={Twitter} alt="X" />
            <img src={LinkedIn} alt="LinkdIn" />
            <img src={Facebook} alt="Facebook" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
