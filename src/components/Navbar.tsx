import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className=" w-full h-[60px] px-[60px] flex items-center justify-center bg-blue-600">
      <p className=" text-white uppercase text-2xl font-bold">Flex visualizer <span className=" text-sm font-thin">by Aram Zadoyan</span></p>
    </header>
  );
};

export default Navbar;
