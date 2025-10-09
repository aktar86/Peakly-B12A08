import React, { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div className="flex-1">
        <Suspense fallback={<h1>Data Loading...</h1>}>
          <Outlet></Outlet>
        </Suspense>
      </div>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
};

export default Root;
