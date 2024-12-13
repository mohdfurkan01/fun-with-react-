import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

//header aur footer k liye ek layout ya root file bnate jo ki common hoti h for every page.
//Header aur Footer change nhi honge kisi page par waki component accordingly change hote rahenge

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* outlet uper niche k components same rakhta h bich k components change krta rhta h agr uper lgaya to bich aur niche k component change krega */}
      <Footer />
    </>
  );
};

export default Layout;
