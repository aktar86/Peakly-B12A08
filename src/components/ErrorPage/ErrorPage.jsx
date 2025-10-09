import React from "react";
import { Link, useNavigate } from "react-router";
import ErrorImg from "../../assets/error-404.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div className="flex-1">
        <div className="col-span-4 flex flex-col justify-center items-center p-20">
          <img className="w-64" src={ErrorImg} alt="404 error image" />
          <h1 className="font-bold text-5xl mt-10">Oops, page not found!</h1>
          <p className="text-lg text-[#627382]  mt-3">
            The page you are looking for is not available.
          </p>

          <Link
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-10 py-3 text-xl text-white font-bold mt-5"
          >
            Go Back!
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
