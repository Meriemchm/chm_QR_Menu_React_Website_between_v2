import React,{useState,useEffect} from "react";

const NavBar = () => {

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 md:px-20 bg-second fixed z-10`}
    >
      <div className="flex">
        <h1
          className={`signature font-bold text-base md:text-lg  text-primary `} 
        >
          {/* text-3xl md:text-4xl */}
          Between us
        </h1>
        {/* <p className="menu_name text-primary">Coffee</p> */}
      </div>
      <img src="coffee-beans.svg" alt="" className="md:h-24" />
    </div>
  );
};

export default NavBar;
