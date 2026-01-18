import React from "react";
import logoImg from "../assets/logo.png";
const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={logoImg} alt="" />
      <h3 className="text-2xl font-bold -ms-2">zapShift</h3>
    </div>
  );
};

export default Logo;
